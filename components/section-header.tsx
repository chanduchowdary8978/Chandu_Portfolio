interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
