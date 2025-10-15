"use client"

import Reveal from "./reveal"
import { Cpu, Server, Boxes, Database, Network, Layers } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  { name: "React", icon: Cpu },
  { name: "Next.js", icon: Boxes },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "WebSockets", icon: Network },
]

export default function About() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <Reveal id="about" as="section" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">{"About"}</h2>
          <p className="text-[color:var(--text-secondary)]">
            {
              "My journey into tech began in the visual worlds of Blender and Unreal Engine. Over time, I transitioned from crafting immersive 3D experiences to engineering full-stack applications—bridging form and function. Today I build cohesive, performant systems with a focus on elegant UX, resilient APIs, and real-time collaboration."
            }
          </p>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={item}
              className="flex items-center gap-3 rounded-md border border-border bg-card p-3"
            >
              <Icon className="h-5 w-5 text-[color:var(--accent)]" aria-hidden="true" />
              <span className="font-medium text-[color:var(--text-primary)]">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Reveal>
  )
}
