import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

const highlights = [
  { icon: GraduationCap, label: "M.Tech Mathematics & Computing, NIT Jalandhar" },
  { icon: Briefcase, label: "Machine Learning & ML Systems" },
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
            description="How I think about building and shipping ML systems."
          />
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-5">
          <AnimateOnScroll className="md:col-span-3" delay={100}>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I work at the intersection of machine learning and systems engineering.
                Training a model is only half the job — the other half is making it
                reliable enough to run in production, which shapes most of what I build:
                distributed training, calibrated predictions, and inference services that
                hold up under load.
              </p>
              <p>
                The most recent example is a fraud detection system trained with LocalSGD
                across simulated data centers and served through a FastAPI endpoint in
                Docker. Before that, an LSTM forecasting pipeline built during an internship
                at ISRO, and ongoing research into distributed optimization and spatial
                queueing systems.
              </p>
              <p>
                Underneath it is a math background — linear algebra, probability,
                optimization — that I use less as theory and more as a debugging tool: why
                a model isn't converging, why a distributed job is slower than it should
                be, and what to do about it.
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