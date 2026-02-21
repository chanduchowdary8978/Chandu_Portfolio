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
      {/* Subtle grid background */}
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
            {"M.Tech Mathematics & Computing • NIT Jalandhar"}
          </span>
        </div>

        <h1 className="animate-fade-in-up text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          {"Hi, I'm "}
          <span className="text-primary">Bondu Chandu</span>
        </h1>

        <div
          className="mt-4 flex h-10 items-center justify-center animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="font-mono text-xl text-muted-foreground md:text-2xl">
            {display}
            <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-primary align-middle" />
          </span>
        </div>

        <p
          className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          I focus on understanding why machine learning models work, not just how to use them.
          My interests span optimization and gradients, time-series modeling, and building
          practical ML systems with MLOps pipelines and Kafka-based data flows.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-mono text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Get in Touch
          </a>

          {/* Resume Download Button */}
          <a
            href="/Chandu_Portfolio/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/10"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-5 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/chanduchowdary8978",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/chandu-chowdary-bondu/",
              label: "LinkedIn",
            },
            {
              icon: FileText,
              href: "/Chandu_Portfolio/resume.pdf",
              label: "Resume",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="mt-16 inline-block animate-bounce text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}