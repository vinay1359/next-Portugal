"use client"

import { useEffect } from "react"
import { Home, Info, Map, Compass, Calendar, Phone } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export default function MobileMenu({ onClose, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden"

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const menuItems = [
    { name: "Home", id: "home", icon: <Home className="h-5 w-5" /> },
    { name: "About", id: "about", icon: <Info className="h-5 w-5" /> },
    { name: "Destinations", id: "destinations", icon: <Map className="h-5 w-5" /> },
    { name: "Experiences", id: "experiences", icon: <Compass className="h-5 w-5" /> },
    { name: "Plan Your Trip", id: "plan", icon: <Calendar className="h-5 w-5" /> },
    { name: "Contact", id: "contact", icon: <Phone className="h-5 w-5" /> },
  ]

  const handleLinkClick = (id: string) => {
    onClose()
    onNavigate(id)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900/95 to-purple-900/95 z-50 flex flex-col items-center justify-center">
      <nav className="w-full max-w-md px-8">
        <ul className="space-y-6 text-center">
          {menuItems.map((item) => (
            <li key={item.id} className="border-b border-white/10 pb-4">
              <button
                onClick={() => handleLinkClick(item.id)}
                className="text-white text-2xl font-medium hover:text-yellow-400 transition-colors flex items-center justify-center"
              >
                <span className="mr-3 text-yellow-400">{item.icon}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

