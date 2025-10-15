"use client"

import { useMotionValue, useTransform, motion } from "framer-motion"
import ParticlesBackground from "./particles-background"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // ✅ Avoid SSR "window is not defined" error
  const backgroundX = useTransform(x, [0, windowSize.width || 1], ["-10%", "10%"])
  const backgroundY = useTransform(y, [0, windowSize.height || 1], ["-10%", "10%"])

  // ✅ Track window size safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // ✅ Mouse move animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  // ✅ Scroll handler for button click
  const handleScrollToProjects = () => {
    console.log("Button clicked")
    const section = document.getElementById("projects")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      console.warn("Section with id='projects' not found.")
    }
  }

  return (
    <section
      aria-label="Hero"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Background motion gradient */}
      <motion.div
        style={{
          background: `radial-gradient(
            600px at ${mouse.x}px ${mouse.y}px, 
            rgba(0, 255, 255, 0.2),
            transparent 80%
          )`,
          x: backgroundX,
          y: backgroundY
        }}
        className="absolute inset-0 z-0 transition-all duration-300"
      />

      <ParticlesBackground />

      {/* Hero content */}
      <div className="relative z-20 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-20 text-center select-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#3352CC] via-[#2FE699] to-[#00FFFF]
          bg-[length:200%_100%] animate-gradient bg-300%"
        >
          Architecting Digital Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-balance text-[color:var(--text-secondary)] md:text-lg"
        >
          Full-Stack Developer merging visually compelling design with technically robust back-end engineering.
        </motion.p>

        {/* ✅ Scroll button */}
        <div className="pt-4">
          <motion.button
            type="button"
            onClick={handleScrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-[color:var(--accent)] px-5 py-2.5 font-medium text-[color:var(--background)] cursor-pointer focus:outline-none"
            animate={{
              boxShadow: [
                "0 0 15px rgba(0, 255, 255, 0.4)",
                "0 0 30px rgba(0, 255, 255, 0.7)",
                "0 0 15px rgba(0, 255, 255, 0.4)"
              ],
              backgroundColor: [
                "rgb(0,255,255)",
                "rgb(0,220,255)",
                "rgb(0,255,255)"
              ]
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            View My Work
          </motion.button>
        </div>
      </div>

      {/* Background overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-background/20 to-background"
        aria-hidden="true"
      />
    </section>
  )
}
