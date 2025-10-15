"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.4,
    }))

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR)
      canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // draw faint grid lines for blueprint feel
      ctx.strokeStyle = "rgba(0, 255, 255, 0.06)"
      ctx.lineWidth = 1
      const grid = 64
      for (let x = 0; x < window.innerWidth; x += grid) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, window.innerHeight)
        ctx.stroke()
      }
      for (let y = 0; y < window.innerHeight; y += grid) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(window.innerWidth, y)
        ctx.stroke()
      }

      // particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0,255,255,0.35)"
        ctx.fill()
      })

      // subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 100) {
            ctx.strokeStyle = "rgba(0,255,255,0.08)"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />
}
