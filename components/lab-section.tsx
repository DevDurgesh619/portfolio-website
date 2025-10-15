"use client"

import Reveal from "./reveal"
import { useRef } from "react"

export default function LabSection() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  const handleVideoClick = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <Reveal id="lab" as="section" className="bg-[color:var(--secondary)]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-6 text-2xl font-semibold text-[color:var(--text-primary)]">
          {"The Visual Lab: From 3D to VFX"}
        </h2>
        <div className="flex snap-x gap-4 overflow-x-auto pb-2">
          {/* Card 1 - YouTube placeholder */}
          <div className="min-w-[320px] snap-start rounded-lg border border-border bg-card p-4 transition-colors hover:border-[color:var(--accent)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] sm:min-w-[420px]">
            <div
              className="aspect-video w-full rounded-md bg-[color:var(--surface)] cursor-pointer"
              onClick={() => handleVideoClick(video1Ref)}
            >
              <video
                ref={video1Ref}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                {"Temple Run VFX"}
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                {"VFX project using Blender and After Effects."}
              </p>
            </div>
          </div>

          {/* Card 2 - Video placeholder */}
          <div className="min-w-[320px] snap-start rounded-lg border border-border bg-card p-4 transition-colors hover:border-[color:var(--accent)] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] sm:min-w-[420px]">
            <div
              className="aspect-video w-full overflow-hidden rounded-md bg-[color:var(--surface)] cursor-pointer"
              //@ts-ignore
              onClick={() => handleVideoClick(video2Ref)}
            >
              {/* Replace with your video file */}
              <video
                ref={video2Ref}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                {"3D Environment Design"}
              </h3>
              <p className="text-sm text-[color:var(--text-secondary)]">
                {"World-building in Unreal Engine."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}