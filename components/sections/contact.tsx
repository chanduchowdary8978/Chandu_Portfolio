import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="06 / Contact"
            title="Contact"
            description="You can reach me through the following platforms."
          />
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact info */}
          <AnimateOnScroll delay={100}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-primary">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">
                      chanduchowdary8978@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">India</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Socials */}
          <AnimateOnScroll delay={200}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-5 font-mono text-sm uppercase tracking-widest text-primary">
                Socials
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    handle: "@chanduchowdary8978",
                    href: "https://github.com/chanduchowdary8978",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    handle: "/in/chandu-chowdary-bondu",
                    href: "https://www.linkedin.com/in/chandu-chowdary-bondu/",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                  >
                    <s.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-foreground">{s.label}</p>
                      <p className="text-xs text-muted-foreground">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}