import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Calendar, Layers } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Alex Chen`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
              {project.featured && (
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {project.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                {project.stack.length} technologies
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-10 rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
              Overview
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          {/* Tech stack */}
          <div className="mb-10">
            <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="mb-10">
              <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                Links
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Other projects */}
          <div className="border-t border-border pt-10">
            <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
              Other Projects
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
                  >
                    <p className="mb-1 font-mono text-xs text-muted-foreground">
                      {p.year}
                    </p>
                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {p.title}
                      <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
