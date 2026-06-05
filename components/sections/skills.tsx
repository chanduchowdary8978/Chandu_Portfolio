import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { skills } from "@/lib/data"

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="02 / Skills"
            title="Technical Stack"
            description="Tools and technologies I work with daily to build intelligent systems."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <AnimateOnScroll key={group.category} delay={i * 80}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors group-hover:bg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
