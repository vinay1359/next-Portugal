"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import {
  ChevronDown,
  Map,
  Compass,
  Utensils,
  Hotel,
  Sun,
  Waves,
  Menu,
  X,
  Camera,
  Plane,
  Wine,
  Coffee,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Calendar,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import VideoBackground from "@/components/video-background"
import DestinationCard from "@/components/destination-card"
import AnimatedCounter from "@/components/animated-counter"
import MobileMenu from "@/components/mobile-menu"
import ParallaxSection from "@/components/parallax-section"
import AnimatedText from "@/components/animated-text"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const heroRef = useRef<HTMLDivElement>(null!)
  const aboutRef = useRef<HTMLDivElement>(null!)
  const statsRef = useRef<HTMLDivElement>(null!)
  const destinationsRef = useRef<HTMLDivElement>(null!)
  const experiencesRef = useRef<HTMLDivElement>(null!)
  const planRef = useRef<HTMLDivElement>(null!)
  const contactRef = useRef<HTMLDivElement>(null!)

  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Check which section is currently in view
      const sections = [
        { id: "home", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "destinations", ref: destinationsRef },
        { id: "experiences", ref: experiencesRef },
        { id: "plan", ref: planRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8 && !statsVisible) {
          setStatsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [statsVisible])

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
      home: heroRef,
      about: aboutRef,
      destinations: destinationsRef,
      experiences: experiencesRef,
      plan: planRef,
      contact: contactRef,
    }

    const ref = sectionMap[sectionId]
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const destinations = [
    {
      id: 1,
      name: "Lisbon",
      description: "Explore the historic capital with its colorful streets and vibrant culture.",
      image: "/images/Lisbon.jpg",
      tags: ["City", "Culture", "Food"],
    },
    {
      id: 2,
      name: "Porto",
      description: "Discover the charming riverside city known for its port wine and stunning bridges.",
      image: "/images/Porto.jpg",
      tags: ["City", "Wine", "Architecture"],
    },
    {
      id: 3,
      name: "Algarve",
      description: "Relax on golden beaches surrounded by dramatic cliffs and crystal-clear waters.",
      image: "/images/Algarve.jpg",
      tags: ["Beach", "Nature", "Relaxation"],
    },
    {
      id: 4,
      name: "Madeira",
      description: "Experience the lush 'floating garden' island with its unique landscapes and adventures.",
      image: "/images/Madeira.jpg",
      tags: ["Island", "Hiking", "Nature"],
    },
  ]

  const experiences = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Culinary Tours",
      description: "Taste authentic Portuguese cuisine and wines",
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Surfing Lessons",
      description: "Ride the Atlantic waves with professional instructors",
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Historic Walks",
      description: "Guided tours through Portugal's rich history",
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Beach Getaways",
      description: "Relax at the most beautiful beaches in Europe",
    },
    {
      icon: <Wine className="h-8 w-8" />,
      title: "Wine Tasting",
      description: "Sample Portugal's finest wines in historic vineyards",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Tours",
      description: "Capture Portugal's most photogenic locations",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Café Culture",
      description: "Experience the unique café culture of Portugal",
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Island Hopping",
      description: "Explore the beautiful Azores archipelago",
    },
  ]

  const testimonials = [
    {
      name: "Maria S.",
      location: "United States",
      text: "Our trip to Portugal was absolutely magical! The tour guides were knowledgeable and the accommodations were perfect.",
      avatar: "/images/human.jpg",
    },
    {
      name: "James L.",
      location: "United Kingdom",
      text: "The food, the people, the scenery - everything about Portugal exceeded our expectations. We'll definitely be back!",
      avatar: "/images/human.jpg",
    },
    {
      name: "Sophie T.",
      location: "Canada",
      text: "The customized itinerary perfectly matched our interests. We discovered hidden gems we would have never found on our own.",
      avatar: "/images/human.jpg",
    },
  ]

  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <div id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground />
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-800/30 to-pink-800/40 z-10" />

        <div
          className="container relative z-20 text-center px-4"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY * 0.002,
          }}
        >
          <AnimatedText
            text="Discover Portugal"
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            highlightColor="text-yellow-400"
          />
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Experience the magic of ancient cities, golden beaches, and unforgettable adventures
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-none"
            >
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
              Plan Your Trip
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 hidden md:block backdrop-blur-md bg-black/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white text-2xl font-bold">
                <span className="text-yellow-400">Portugal</span> Explorer
              </div>
              <ul className="flex space-x-8">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Destinations", id: "destinations" },
                  { name: "Experiences", id: "experiences" },
                  { name: "Plan", id: "plan" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white hover:text-yellow-400 transition-colors relative ${
                        activeSection === item.id ? "text-yellow-400" : ""
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-400 rounded-full" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} onNavigate={scrollToSection} />}
      </div>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              About Portugal
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">A Land of Discovery</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Portugal, a country where tradition and modernity blend seamlessly, offers travelers an authentic
                European experience with its rich history, stunning landscapes, and warm hospitality.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                From the historic streets of Lisbon to the sun-drenched beaches of the Algarve, Portugal captivates
                visitors with its diverse attractions and cultural treasures.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Rich History</h4>
                  <p>Over 900 years of fascinating history and cultural heritage</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Stunning Coastline</h4>
                  <p>850km of beautiful Atlantic coastline with diverse beaches</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Delicious Cuisine</h4>
                  <p>World-renowned seafood, pastries, and wine traditions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Warm Climate</h4>
                  <p>Over 300 days of sunshine per year in many regions</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 z-10 mix-blend-overlay"></div>
                <img
                  src="/images/portugal-landscape.jpg"
                  alt="Portugal Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-[200px] w-[200px] rounded-xl overflow-hidden shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/portugal-culture.jpg"
                  alt="Portugal Culture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-pink-900 to-purple-900 text-white"
        speed={0.5}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter
                end={300}
                suffix="+"
                duration={2000}
                isVisible={statsVisible}
                className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400"
              />
              <p className="text-lg opacity-80">Sunny Days Per Year</p>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter
                end={850}
                suffix="km"
                duration={2000}
                isVisible={statsVisible}
                className="text-4xl md:text-5xl font-bold mb-2 text-pink-400"
              />
              <p className="text-lg opacity-80">Coastline</p>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter
                end={15}
                suffix=""
                duration={2000}
                isVisible={statsVisible}
                className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400"
              />
              <p className="text-lg opacity-80">UNESCO Sites</p>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-transform duration-300">
              <AnimatedCounter
                end={1000}
                suffix="+"
                duration={2000}
                isVisible={statsVisible}
                className="text-4xl md:text-5xl font-bold mb-2 text-orange-400"
              />
              <p className="text-lg opacity-80">Years of History</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Destinations Section */}
      <section id="destinations" ref={destinationsRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900 relative inline-block">
              Unforgettable Destinations
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From historic cities to pristine beaches, Portugal offers diverse experiences for every traveler
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cities">Cities</TabsTrigger>
              <TabsTrigger value="beaches">Beaches</TabsTrigger>
              <TabsTrigger value="nature">Nature</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations
                  .filter((d) => d.tags.includes("City"))
                  .map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="beaches" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations
                  .filter((d) => d.tags.includes("Beach"))
                  .map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="nature" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations
                  .filter((d) => d.tags.includes("Nature"))
                  .map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none"
            >
              View All Destinations <Map className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        ref={experiencesRef}
        className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Unique Experiences
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Create unforgettable memories with our curated Portuguese experiences
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {experiences.map((experience, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 border-none text-white">
                    <div className="mb-4 text-yellow-400">{experience.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-white/80">{experience.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-orange-900 relative inline-block">
              What Our Travelers Say
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from travelers who have experienced the magic of Portugal with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white shadow-xl border-none relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-orange-400">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Trip Section */}
      <section id="plan" ref={planRef} className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Plan Your Perfect Portuguese Adventure</h2>
              <p className="text-xl mb-8 opacity-90">
                Our travel experts will help you create a customized itinerary based on your interests, budget, and
                travel style. From luxury retreats to backpacking adventures, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white border-none"
                >
                  Start Planning <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Contact an Expert <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Hotel className="h-8 w-8 mb-4 text-yellow-400" />
                <h3 className="text-xl font-bold mb-2">Accommodations</h3>
                <p>From luxury hotels to charming guesthouses</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Compass className="h-8 w-8 mb-4 text-pink-400" />
                <div className="text-xl font-bold mb-2">Guided Tours</div>
                <p>Expert local guides to show you the best spots</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Utensils className="h-8 w-8 mb-4 text-cyan-400" />
                <div className="text-xl font-bold mb-2">Culinary Experiences</div>
                <p>Taste the authentic flavors of Portugal</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Map className="h-8 w-8 mb-4 text-orange-400" />
                <div className="text-xl font-bold mb-2">Custom Itineraries</div>
                <p>Personalized travel plans just for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to start your Portuguese adventure? Get in touch with our travel experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    placeholder="Trip Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white border-none">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Our Office</h4>
                  <p className="text-white/80 flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-yellow-400" />
                    <span>
                      Avenida da Liberdade 123
                      <br />
                      Lisbon, 1250-096
                      <br />
                      Portugal
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-white/80 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                    <span>info@portugalexplorer.com</span>
                  </p>
                  <p className="text-white/80 flex items-center mt-2">
                    <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                    <span>bookings@portugalexplorer.com</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-white/80 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                    <span>+351 123 456 789</span>
                  </p>
                  <p className="text-white/80 flex items-center mt-2">
                    <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                    <span>+351 987 654 321</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-yellow-400 transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-pink-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Travel Tips & Offers</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter and get exclusive travel tips, destination guides, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white border-none px-6">
                Subscribe <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-yellow-400">Portugal</span> Explorer
              </h3>
              <p className="text-gray-400">Your ultimate guide to exploring the beauty and culture of Portugal.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Destinations", "Experiences", "About Us", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                {["Lisbon", "Porto", "Algarve", "Madeira", "Azores"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400">
                Email: info@portugalexplorer.com
                <br />
                Phone: +351 123 456 789
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Portugal Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
