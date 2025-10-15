"use client"

import Reveal from "./reveal"
import ProjectCard from "./project-card"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const projects = [
    {
      title: "CollabCanvas App",
      tech: ["Next.js", "WebSockets", "PostgreSQL"],
      gitLink: "https://github.com/DevDurgesh619/CollabCanva",
      liveDemoLink: "https://draw-app-frontend-git-main-devdurgesh619s-projects.vercel.app/",
      imgSrc: "/images/collab-canvas-thumbnail.jpg",
    },
    {
      title: "Second Brain App",
      tech: ["React", "Node.js", "PostgreSQL"],
      gitLink: "https://github.com/DevDurgesh619/Second-Brain-App",
      liveDemoLink: "https://second-brain-app-frontend-git-main-devdurgesh619s-projects.vercel.app/",
      imgSrc: "/images/Brainly.jpg",
    },
    {
      title: "Instagram Automation Platform",
      tech: ["Next.js", "Queues", "Workers"],
      gitLink: "https://github.com/yourusername/insta-automation",
      liveDemoLink: "https://instaauto.vercel.app",
      imgSrc: "/images/projects/instaautomation.png",
    },
    {
      title: "Real-Time Chat App",
      tech: ["Next.js", "WebRTC", "Redis"],
      gitLink: "https://github.com/yourusername/realtime-chat",
      liveDemoLink: "https://realtimechat.vercel.app",
      imgSrc: "/images/projects/realtimechat.png",
    },
  ]

  return (
    <Reveal id="projects" as="section" className="scroll-mt-24 relative overflow-hidden">
      {/* Interactive background motion glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,255,0.05)] via-transparent to-[rgba(255,0,255,0.08)] blur-3xl"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          className="mb-8 text-2xl font-semibold text-[color:var(--text-primary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {"Case Studies"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              //@
              variants={item}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <ProjectCard
                title={project.title}
                tech={project.tech}
                mediaType="image"
                gitLink={project.gitLink}
                liveDemoLink={project.liveDemoLink}
                imgSrc={project.imgSrc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Reveal>
  )
}
