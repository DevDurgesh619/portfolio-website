"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)

      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false) // scrolling down → hide
      } else {
        setVisible(true) // scrolling up → show
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  }

  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", damping: 18, stiffness: 120 } },
  }

  const listVariants = {
    hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  }

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(8px)",
      }}
      transition={{
        duration: visible ? 0.25 : 0.5, // 👈 Faster appear, slower disappear
        ease: "easeOut",
      }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(10,15,25,0.8)] border-b border-cyan-400/30 shadow-[0_4px_30px_rgba(0,255,255,0.05)]"
          : "bg-transparent border-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#" aria-label="Go to top" className="flex items-center gap-2 group">
            <span className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300 ease-out">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <span className="text-white font-semibold tracking-wide text-lg select-none">
              DevDurgesh
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 font-mono text-sm">
            {[
              { href: "#projects", label: "Projects" },
              { href: "#about", label: "About" },
              { href: "#lab", label: "Lab" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative group text-cyan-200 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-md text-cyan-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim background */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              initial="hidden"
              animate="show"
              exit="hidden"
              //@ts-ignore
              variants={overlayVariants}
              onClick={() => setMenuOpen(false)}
            />
            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              className="fixed right-0 top-0 z-[70] h-screen w-4/5 max-w-xs bg-[rgba(10,15,25,0.95)] backdrop-blur-xl border-l border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
              initial="hidden"
              animate="show"
              exit="hidden"
              //@ts-ignore
              variants={sidebarVariants}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b border-cyan-400/20">
                <span className="font-semibold text-cyan-300">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-2 text-cyan-200 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <motion.ul
                className="flex flex-col gap-2 p-4 font-mono text-base text-cyan-200"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {[
                  { href: "#projects", label: "Projects" },
                  { href: "#about", label: "About" },
                  { href: "#lab", label: "Lab" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-2 py-3 transition-colors hover:text-cyan-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
