"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

interface Destination {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      className="overflow-hidden group transition-all duration-500 border-none"
      style={{
        transform: isHovered ? "translateY(-15px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 15px 15px -5px rgba(0, 0, 0, 0.1)"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img
          src={imageError ? "/images/portugal-landscape.jpg" : destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.15)" : "scale(1)" }}
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
            {destination.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {destination.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                style={{
                  transform: isHovered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.9)",
                  opacity: isHovered ? 1 : 0,
                  transition: `transform 0.4s ease ${index * 0.1}s, opacity 0.4s ease ${index * 0.1}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 bg-gradient-to-br from-white to-gray-50">
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <Button variant="ghost" className="group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors p-0">
          Explore {destination.name}
          <ArrowRight
            className="ml-2 h-4 w-4 transition-all duration-300"
            style={{
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
              opacity: isHovered ? 1 : 0.7,
            }}
          />
        </Button>
      </div>
    </Card>
  )
}
