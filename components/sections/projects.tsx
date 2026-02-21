"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { projects, type ProjectTag } from "@/lib/data"

// These must match ProjectTag in lib/data.ts
const allTags: ProjectTag[] = ["Optimization", "MLOps", "Systems", "Time Series", "ML"]

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All")

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="03 / Projects"
            title="Selected Work"
            description="Projects spanning optimization, machine learning, and ML systems"
          />
        </AnimateOnScroll>

        {/* Filters */}
        <AnimateOnScroll delay={100}>
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag("All")}
              className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
                activeTag === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-lg px-4 py-2 font-mono text-xs transition-all ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <AnimateOnScroll key={project.slug} delay={i * 80}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  {project.featured && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center font-mono text-sm text-muted-foreground">
            No projects found for this filter.
          </p>
        )}
      </div>
    </section>
  )
}