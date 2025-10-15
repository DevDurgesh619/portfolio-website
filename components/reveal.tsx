"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  as: Tag = "section",
  id,
  className = "",
}: {
  children: React.ReactNode
  as?: any
  id?: string
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag id={id} ref={ref as any} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
