"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  isVisible?: boolean
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  isVisible = true,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isVisible) {
      return
    }

    // Reset counter when end value changes
    setCount(0)
    countRef.current = 0

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    startTimeRef.current = Date.now()
    const endTime = startTimeRef.current + duration

    const updateCounter = () => {
      const now = Date.now()
      const remaining = Math.max(endTime - now, 0)
      const progress = 1 - remaining / duration

      // Easing function for smoother animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      countRef.current = Math.floor(easedProgress * end)
      setCount(countRef.current)

      if (now < endTime) {
        timerRef.current = setTimeout(updateCounter, 16)
      } else {
        setCount(end)
      }
    }

    updateCounter()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [end, duration, isVisible])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

