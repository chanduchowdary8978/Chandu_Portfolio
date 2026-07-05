import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { researchItems, type ResearchStatus } from "@/lib/data"
import { cn } from "@/lib/utils"

const statusConfig: Record<ResearchStatus, { label: string; dot: string; text: string }> = {
  "Under Review": { label: "Under Review", dot: "bg-chart-2", text: "text-chart-2" },
  "In Preparation": {
    label: "Manuscript in Preparation",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
  "Under Research": { label: "Under Research", dot: "bg-primary", text: "text-primary" },
  Published: { label: "Published", dot: "bg-chart-5", text: "text-chart-5" },
}

export function ResearchSection() {
  return (
    <section id="research" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="04 / Research"
            title="Research & Publications"
            description="Applied research in distributed learning and mathematical modeling of large-scale systems."
          />
        </AnimateOnScroll>

        <div className="space-y-4">
          {researchItems.map((item, i) => {
            const config = statusConfig[item.status]
            return (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider",
                        config.text
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
                      {config.label}
                    </span>
                    {item.secondaryStatus && (
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.secondaryStatus}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
