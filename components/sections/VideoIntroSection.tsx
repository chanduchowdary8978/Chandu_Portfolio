"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import styles from "@/styles/VideoIntro.module.css"

const CinematicLayer = dynamic(
  () => import("@/components/cinematic/CinematicLayer").then((m) => ({ default: m.CinematicLayer })),
  { ssr: false }
)

const BASE      = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const VIDEO_SRC = `${BASE}/intro.mp4`

export function VideoIntroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mainVidRef = useRef<HTMLVideoElement>(null)
  const ambientRef = useRef<HTMLVideoElement>(null)

  // refs for GSAP targets
  const taglineRef  = useRef<HTMLDivElement>(null)
  const preRef      = useRef<HTMLSpanElement>(null)
  const nameRef     = useRef<HTMLHeadingElement>(null)
  const roleRef     = useRef<HTMLParagraphElement>(null)
  const bioRef      = useRef<HTMLParagraphElement>(null)
  const bottomRef   = useRef<HTMLDivElement>(null)

  const [muted, setMuted]       = useState(true)
  const [showHint, setShowHint] = useState(true)

  // ── Auto-hide sound hint ─────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000)
    return () => clearTimeout(t)
  }, [])

  // ── GSAP entrance ────────────────────────────────────────────
  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const run = async () => {
      const { gsap } = await import("gsap")

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        tl
          .fromTo(taglineRef.current,
            { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
          .fromTo(preRef.current,
            { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 0.75)
          .fromTo(nameRef.current,
            { opacity: 0, y: 40, skewY: 1.5 },
            { opacity: 1, y: 0, skewY: 0, duration: 1.0 }, 0.95)
          .fromTo(roleRef.current,
            { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1.25)
          .fromTo(bioRef.current,
            { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 1.40)
          .fromTo(bottomRef.current,
            { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.8 }, 1.55)
      })
    }

    run()
    return () => ctx?.revert()
  }, [])

  // ── Auto-mute when hero leaves viewport ─────────────────────
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const v = mainVidRef.current
          if (v && !v.muted) { v.muted = true; setMuted(true) }
        }
      },
      { threshold: 0, rootMargin: "-50% 0px 0px 0px" }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    const v = mainVidRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    setShowHint(false)
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section ref={sectionRef} id="hero" className={styles.hero}>

      {/* Ambient blurred bg */}
      <video ref={ambientRef} className={styles.ambientVideo}
        src={VIDEO_SRC} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />

      {/* Main video */}
      <video ref={mainVidRef} className={styles.mainVideo}
        src={VIDEO_SRC} autoPlay muted loop playsInline preload="auto" />

      {/* Overlays */}
      <div className={styles.gradientLeft} aria-hidden="true" />
      <div className={styles.gradientVert} aria-hidden="true" />
      <div className={styles.vignette}     aria-hidden="true" />

      {/* Three.js bokeh */}
      <CinematicLayer />

      {/* Content */}
      <div className={styles.content}>

        {/* Top tagline */}
        <div ref={taglineRef} className={styles.tagline}>
          <span className={styles.taglineText}>
            M.Tech Mathematics &amp; Computing &nbsp;·&nbsp; NIT Jalandhar
          </span>
        </div>

        {/* Name + copy — anchored to bottom-left */}
        <div className={styles.nameBlock}>
          <div className={styles.nameInner}>
            <span ref={preRef} className={styles.preLabel}>
              Portfolio · 2026
            </span>
            <h1 ref={nameRef} className={styles.name}>
              Chandu
            </h1>
            <p ref={roleRef} className={styles.role}>
              Machine Learning&nbsp;&nbsp;·&nbsp;&nbsp;Optimization&nbsp;&nbsp;·&nbsp;&nbsp;MLOps
            </p>
            <p ref={bioRef} className={styles.bio}>
              I study why models work — not just how to use them.
              Gradients, convergence, and systems that ship.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div ref={bottomRef} className={styles.bottomBar}>

          <button onClick={scrollToAbout} aria-label="Scroll to About"
            className={styles.scrollIndicator}>
            <span className={styles.scrollLabel}>Scroll</span>
            <div className={styles.scrollLine}>
              <span className={styles.scrollPulse} />
            </div>
          </button>

          <div className={styles.controls}>
            {showHint && (
              <span className={styles.soundHint} aria-live="polite">
                Tap for sound
              </span>
            )}
            <button onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className={styles.muteBtn}>
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
