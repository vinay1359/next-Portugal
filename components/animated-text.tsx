"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  highlightColor?: string
}

export default function AnimatedText({ text, className = "", highlightColor = "text-primary" }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation
    const animationFrame = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 300)

      return () => {
        clearTimeout(timer)
        cancelAnimationFrame(animationFrame)
      }
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  // Handle empty text gracefully
  if (!text) return null

  const words = text.split(" ")

  return (
    <h1 className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-2">
          <span
            className={`inline-block ${wordIndex % 3 === 1 ? highlightColor : ""}`}
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.8s ease ${wordIndex * 0.1}s, opacity 0.8s ease ${wordIndex * 0.1}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  )
}

