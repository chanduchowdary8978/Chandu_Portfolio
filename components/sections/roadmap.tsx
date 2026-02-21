import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { roadmapItems } from "@/lib/data"
import { CheckCircle2, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-primary",
    bg: "bg-primary/10",
    label: "Completed",
  },
  "in-progress": {
    icon: Loader2,
    color: "text-chart-2",
    bg: "bg-chart-2/10",
    label: "In Progress",
  },
  planned: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-secondary",
    label: "Planned",
  },
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="05 / Roadmap"
            title="Learning & Build Roadmap"
            description="My journey from optimization and gradients to ML systems, MLOps pipelines, and deployment."
          />
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-6">
            {roadmapItems.map((item, i) => {
              const config = statusConfig[item.status]
              const Icon = config.icon

              return (
                <AnimateOnScroll key={item.title} delay={i * 80}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative hidden shrink-0 md:block">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full",
                          config.bg
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5",
                            config.color,
                            item.status === "in-progress" && "animate-spin"
                          )}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-xs",
                            config.bg,
                            config.color
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-3 w-3 md:hidden",
                              item.status === "in-progress" && "animate-spin"
                            )}
                          />
                          {config.label}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="mb-1 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}