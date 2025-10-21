import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[color:var(--surface)]">
      {/* Gradient top border */}
      <div
        aria-hidden="true"
        className="h-[1px] w-full"
        style={{ backgroundImage: "linear-gradient(to right, var(--accent), transparent)" }}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: CTA */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">
              {"Available for new opportunities."}
            </h3>
            <Link
              href="mailto:hello@example.com"
              className="inline-block font-mono text-[color:var(--accent)] hover:opacity-90"
            >
              {"patidardurgesh619@gmail.com"}
            </Link>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[color:var(--text-primary)]">{"Quick Links"}</h4>
            <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
              <li>
                <Link href="#projects" className="hover:text-[color:var(--accent)] transition-colors">
                  {"Projects"}
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[color:var(--accent)] transition-colors">
                  {"About"}
                </Link>
              </li>
              <li>
                <Link href="#lab" className="hover:text-[color:var(--accent)] transition-colors">
                  {"Lab"}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[color:var(--accent)] transition-colors">
                  {"Contact"}
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[color:var(--text-primary)]">{"Follow Me"}</h4>
            <div className="flex items-center gap-4">
              <Link
                aria-label="GitHub"
                href="https://github.com/DevDurgesh619"
                className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/durgesh-patidar-648302225"
                className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom row */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-[color:var(--text-secondary)]">
            {`© ${new Date().getFullYear()} DevDurgesh. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
