"use client"

import { useEffect, useRef } from "react"
import styles from "@/styles/VideoIntro.module.css"
import * as THREE from "three"

export function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Dynamically import Three.js to avoid SSR issues
    let animId: number
    let renderer: import("three").WebGLRenderer
    let scene: import("three").Scene
    let camera: import("three").PerspectiveCamera
    let particles: import("three").Points

    const mouse = { x: 0, y: 0 }
    const targetCam = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    const init = async () => {
      const THREE = await import("three")
      const canvas = canvasRef.current
      if (!canvas) return

      // ── Renderer ─────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)

      // ── Scene + Camera ────────────────────────────────────────
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 80

      // ── Particle geometry ─────────────────────────────────────
      const PARTICLE_COUNT = 280
      const positions = new Float32Array(PARTICLE_COUNT * 3)
      const colors    = new Float32Array(PARTICLE_COUNT * 3)
      const sizes     = new Float32Array(PARTICLE_COUNT)
      const phases    = new Float32Array(PARTICLE_COUNT) // per-particle animation phase

      // Warm orange palette + soft whites
      const palette = [
        new THREE.Color(1.0, 0.58, 0.18),  // warm orange
        new THREE.Color(1.0, 0.72, 0.35),  // golden amber
        new THREE.Color(1.0, 0.90, 0.65),  // pale gold
        new THREE.Color(1.0, 1.0,  1.0),   // white
        new THREE.Color(1.0, 0.45, 0.12),  // deep orange
        new THREE.Color(0.9, 0.82, 1.0),   // soft lavender (monitor glow accent)
      ]

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Spread across a wide volume — slightly off-center toward the right
        // (video subject is typically left of frame)
        positions[i * 3]     = (Math.random() - 0.4) * 180
        positions[i * 3 + 1] = (Math.random() - 0.5) * 120
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60

        const col = palette[Math.floor(Math.random() * palette.length)]
        colors[i * 3]     = col.r
        colors[i * 3 + 1] = col.g
        colors[i * 3 + 2] = col.b

        // Larger bokeh closer to camera, tiny sparkles further away
        sizes[i]  = Math.random() < 0.15
          ? 8 + Math.random() * 18   // large bokeh blobs
          : 1.5 + Math.random() * 6  // small particles

        phases[i] = Math.random() * Math.PI * 2
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("aColor",   new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute("size",     new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute("phase",    new THREE.BufferAttribute(phases, 1))

      // ── Shader material (soft glowing circles) ─────────────────
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: renderer.getPixelRatio() },
        },
        vertexShader: `
          attribute float size;
          attribute float phase;
          attribute vec3 aColor;
          varying vec3 vColor;
          varying float vAlpha;
          uniform float uTime;
          uniform float uPixelRatio;

          void main() {
            vColor = aColor;

            // Slow sine-wave floating
            vec3 pos = position;
            pos.x += sin(uTime * 0.22 + phase)         * 2.5;
            pos.y += sin(uTime * 0.18 + phase * 1.3)   * 2.0;
            pos.z += cos(uTime * 0.14 + phase * 0.7)   * 1.5;

            vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

            // Alpha fades with depth (closer = more visible)
            float depth = (-mvPos.z - 10.0) / 80.0;
            vAlpha = clamp(1.0 - depth * 0.6, 0.08, 0.72);

            gl_PointSize  = size * uPixelRatio * (80.0 / -mvPos.z);
            gl_Position   = projectionMatrix * mvPos;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            // Soft radial gradient → glowing bokeh disc
            vec2  uv   = gl_PointCoord - vec2(0.5);
            float dist = length(uv);
            if (dist > 0.5) discard;

            float glow = 1.0 - smoothstep(0.0, 0.5, dist);
            // Brighter core, soft feathered edge
            float alpha = pow(glow, 1.8) * vAlpha;

            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // ── Resize handler ────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        ;(material.uniforms.uPixelRatio as THREE.IUniform).value =
          renderer.getPixelRatio()
      }
      window.addEventListener("resize", onResize)
      window.addEventListener("mousemove", handleMouseMove)

      // ── Render loop ───────────────────────────────────────────
      let lastTime = 0
      const animate = (time: number) => {
        animId = requestAnimationFrame(animate)
        const t = time * 0.001

        if (t - lastTime < 0.016) return // cap at ~60fps
        lastTime = t

        ;(material.uniforms.uTime as THREE.IUniform).value = t

        // Gentle parallax — smooth lerp toward mouse position
        targetCam.x += (mouse.x * 4 - targetCam.x) * 0.025
        targetCam.y += (mouse.y * 2.5 - targetCam.y) * 0.025
        camera.position.x = targetCam.x
        camera.position.y = targetCam.y

        // Very slow global particle drift
        particles.rotation.y = t * 0.008
        particles.rotation.x = t * 0.004

        renderer.render(scene, camera)
      }
      animate(0)

      return () => {
        window.removeEventListener("resize", onResize)
        window.removeEventListener("mousemove", handleMouseMove)
        cancelAnimationFrame(animId)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
      }
    }

    const cleanup = init()

    return () => {
      cleanup.then((fn) => fn?.())
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvasLayer} />
}
