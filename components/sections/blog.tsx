import { SectionHeader } from "@/components/section-header"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { blogPosts } from "@/lib/data"
import { ArrowUpRight, Clock } from "lucide-react"

export function BlogSection() {
  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <SectionHeader
            label="04 / Blog"
            title="Notes & Writing - On LinkedIn"
            description="Thoughts on machine learning, engineering, and the craft of building AI systems."
          />
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <AnimateOnScroll key={post.title} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
