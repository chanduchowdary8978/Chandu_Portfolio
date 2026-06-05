"use client"

import { ArrowDown, Github, Linkedin, FileText } from "lucide-react"
import { useEffect, useState } from "react"

const titles = [
  "Math + ML Engineering",
  "Optimization & Gradients",
  "MLOps & ML Systems",
]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [display, setDisplay] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    if (typing) {
      if (display.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplay(currentTitle.slice(0, display.length + 1))
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(timeout)
      }
    } else {
      if (display.length > 0) {
        const timeout = setTimeout(() => {
          setDisplay(display.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [display, typing, titleIndex])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="animate-fade-in mb-6">
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-xs text-primary">
            M.Tech Mathematics & Computing • NIT Jalandhar
          </span>
        </div>

        <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Hi, I'm <span className="text-primary">Bondu Chandu</span>
        </h1>

        <div className="mt-4 flex h-10 items-center justify-center">
          <span className="font-mono text-xl text-muted-foreground md:text-2xl">
            {display}
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-primary" />
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          I focus on understanding why machine learning models work, not just how to use them.
          My interests span optimization and gradients, time-series modeling, and building
          practical ML systems with MLOps pipelines and Kafka-based data flows.
        </p>

        {/* 🔥 BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm hover:border-primary hover:text-primary"
          >
            Get in Touch
          </a>


          {/* ✅ DOWNLOAD RESUME */}
          <a
            href="/Chandu_Portfolio/Chandu_Resume.pdf"
            download
            className="rounded-lg border border-primary px-6 py-3 text-sm text-primary hover:bg-primary/20"
          >
            Download Resume
          </a>

        </div>

        {/* SOCIALS */}
        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://github.com/chanduchowdary8978"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/bondu-chandu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="/Chandu_Portfolio/Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-full hover:text-primary"
          >
            <FileText className="h-5 w-5" />
          </a>
        </div>

        <a href="#about" className="mt-16 inline-block animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}