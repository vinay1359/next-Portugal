"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const createParticles = () => {
      particles.current = []
      // Limit number of particles for better performance
      const numberOfParticles = Math.min(Math.min(window.innerWidth, window.innerHeight) * 0.03, 50)

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 0.5 - 0.25
        const speedY = Math.random() * 0.5 - 0.25
        const colors = ["rgba(255, 255, 255,", "rgba(255, 240, 150,", "rgba(255, 200, 150,"]
        const color = colors[Math.floor(Math.random() * colors.length)]
        const alpha = Math.random() * 0.5 + 0.1

        particles.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          alpha,
        })
      }
    }

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Recreate particles when resizing to ensure proper distribution
        createParticles()
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color} ${particle.alpha})`
        ctx.fill()
      })

      // Connect particles with lines if they're close enough
      // Optimize by only checking particles within a reasonable distance
      const maxDistance = 100
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.6 }} />
}
