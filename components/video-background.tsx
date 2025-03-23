"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7

      // Add event listener for video errors
      const handleVideoError = () => {
        setVideoError(true)
      }

      videoRef.current.addEventListener("error", handleVideoError)

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("error", handleVideoError)
        }
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-800/20 to-pink-800/30 z-5 mix-blend-multiply"></div>

      {videoError ? (
        // Fallback background if video fails to load
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-800 animate-gradient-x"
          style={{ backgroundSize: "200% 200%", animation: "gradient 15s ease infinite" }}
        ></div>
      ) : null}
    </div>
  )
}
