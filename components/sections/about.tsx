import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

const highlights = [
  { icon: GraduationCap, label: "M.Tech Mathematics & Computing, NIT Jalandhar" },
  { icon: Briefcase, label: "ML, Optimization & MLOps Focus" },
  { icon: MapPin, label: "India" },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="01 / About"
            title="About Me"
            description="I focus on understanding why models work, not just how to use them — from gradients and optimization to ML systems and MLOps."
          />
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-5">
          <AnimateOnScroll className="md:col-span-3" delay={100}>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I am a Mathematics & Computing student at NIT Jalandhar focused on
                understanding machine learning models from first principles. I care deeply
                about the mathematical structure behind optimization, gradients, and
                generalization — not just using high-level APIs.
              </p>
              <p>
                My work spans two directions: (1) core ML and optimization, where I study and
                implement gradient-based methods, convergence behavior, and conditioning
                effects, and (2) ML systems and MLOps, where I design practical pipelines
                involving data ingestion, training, evaluation, and deployment. Recently, I
                have been building Kafka-based data pipelines and experimenting with
                end-to-end MLOps workflows.
              </p>
              <p>
                I enjoy turning theory into reliable systems through careful experimentation
                in Python and PyTorch. My long-term goal is to become an AI engineer who
                combines mathematical rigor with strong systems thinking — building models
                that are not only accurate, but also stable, interpretable, and deployable.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="md:col-span-2" delay={200}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-primary">
                Quick Facts
              </h3>
              <ul className="space-y-4">
                {highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-foreground">{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}