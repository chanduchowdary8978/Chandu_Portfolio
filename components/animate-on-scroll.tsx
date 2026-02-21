"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: "fade-in-up" | "fade-in" | "slide-in-left"
  delay?: number
}

export function AnimateOnScroll({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
  }[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        visible && animationClass,
        className
      )}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
