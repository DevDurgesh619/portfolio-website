"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  }
  const sidebarVariants = {
    hidden: { x: "100%" },
    show: { x: 0, transition: { type: "tween", duration: 0.3 } },
  }
  const listVariants = {
    hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b",
        scrolled ? "border-border/80" : "border-transparent",
        "backdrop-blur",
        "bg-[color:var(--surface)]/80",
      ].join(" ")}
      aria-label="Primary navigation"
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo and Name */}
          <Link href="#" aria-label="Go to top" className="flex items-center gap-2">
            <span className="text-[color:var(--accent)]" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            <span className="text-[color:var(--text-primary)] font-semibold tracking-wide">{"DevDurgesh"}</span>
          </Link>

          {/* Links (desktop only) */}
          <ul className="hidden lg:flex items-center gap-6 font-mono text-sm text-[color:var(--text-secondary)]">
            <li>
              <Link href="#projects" className="transition-colors hover:text-[color:var(--accent)]">
                {"// Projects"}
              </Link>
            </li>
            <li>
              <Link href="#about" className="transition-colors hover:text-[color:var(--accent)]">
                {"// About"}
              </Link>
            </li>
            <li>
              <Link href="#lab" className="transition-colors hover:text-[color:var(--accent)]">
                {"// Lab"}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition-colors hover:text-[color:var(--accent)]">
                {"// Contact"}
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Open menu"
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-md text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Click outside to close */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={overlayVariants}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              key="sidebar"
              className="fixed right-0 top-0 z-[70] h-screen w-4/5 max-w-xs bg-[color:var(--surface)]/90 backdrop-blur-xl border-l border-[color:var(--border)] shadow-2xl"
              initial="hidden"
              animate="show"
              exit="hidden"
              //@ts-ignore
              variants={sidebarVariants}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between h-14 px-4 border-b border-[color:var(--border)]">
                <span className="font-semibold text-[color:var(--text-primary)]">{"Menu"}</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-2 rounded-md text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <motion.ul
                className="flex flex-col gap-2 p-4 font-mono text-base text-[color:var(--text-secondary)]"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <motion.li variants={itemVariants}>
                  <Link
                    href="#projects"
                    className="block rounded-md px-2 py-3 transition-colors hover:text-[color:var(--accent)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {"// Projects"}
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="#about"
                    className="block rounded-md px-2 py-3 transition-colors hover:text-[color:var(--accent)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {"// About"}
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="#lab"
                    className="block rounded-md px-2 py-3 transition-colors hover:text-[color:var(--accent)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {"// Lab"}
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="#contact"
                    className="block rounded-md px-2 py-3 transition-colors hover:text-[color:var(--accent)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {"// Contact"}
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
