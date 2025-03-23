"use client"

import { useEffect, useState, forwardRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, className = "", speed = 0.2 }, ref) => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
      const handleScroll = () => {
        if (typeof window !== "undefined") {
          setOffset(window.pageYOffset)
        }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
      <section ref={ref} className={`relative overflow-hidden ${className}`}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${offset * speed}px)`,
            backgroundImage: "url('/placeholder.svg?height=1000&width=1000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="relative z-10">{children}</div>
      </section>
    )
  },
)

ParallaxSection.displayName = "ParallaxSection"

export default ParallaxSection

