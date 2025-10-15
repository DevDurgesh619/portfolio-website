import Link from "next/link"

type Props = {
  title: string
  tech: string[]
  imgSrc: string
  liveDemoLink?: string
  gitLink?: string
  mediaType?: "image" | "video"
}

export default function ProjectCard({
  title,
  tech,
  imgSrc,
  liveDemoLink = "#",
  gitLink = "#",
  mediaType = "image",
}: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-[color:var(--accent)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]">
      <div className="aspect-[16/9] w-full bg-[color:var(--surface)]">
        {mediaType === "image" ? (
          <img
            src={imgSrc}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[color:var(--text-secondary)]">
            {"Video/GIF Placeholder"}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">{title}</h3>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[color:var(--accent)] bg-card px-3 py-1 text-xs font-mono text-[color:var(--accent)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          <Link
            href={liveDemoLink}
            target="_blank"
            className="rounded-md bg-[color:var(--accent)] px-3 py-2 text-sm font-medium text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent-hover)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          >
            {"Live Demo"}
          </Link>

          <Link
            href={gitLink}
            target="_blank"
            className="rounded-md border border-[color:var(--accent)] px-3 py-2 text-sm font-medium text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)] hover:text-[color:var(--background)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          >
            {"GitHub"}
          </Link>
        </div>
      </div>
    </article>
  )
}
