import Reveal from "./reveal"
import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <Reveal id="contact" as="section" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-3 text-2xl font-semibold text-[color:var(--text-primary)]">{"Let's Build Together."}</h2>
        <p className="mb-8 max-w-2xl text-[color:var(--text-secondary)]">
          {"Have an interesting project or an open role? I'd love to connect."}
        </p>
        <div className="flex items-center gap-5">
          <Link
            aria-label="Email"
            href="mailto:hello@example.com"
            className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
          >
            <Mail className="h-6 w-6" />
          </Link>
          <Link
            aria-label="GitHub"
            href="https://github.com/your-handle"
            className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/your-handle"
            className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
