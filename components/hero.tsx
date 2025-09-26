'use client' 
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star } from "lucide-react"
import constants from '@/constants.json'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const phoneNumber = constants.phoneNumber
  const encodedMessage = encodeURIComponent(constants.whatsappMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  const backgroundRef = useRef<HTMLDivElement>(null)
  const shloks = constants.shloks
  const [currentShlokIndex, setCurrentShlokIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        backgroundRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentShlokIndex((prevIndex) => (prevIndex + 1) % shloks.length)
        setIsVisible(true)
      }, 300) // Half of transition duration
    }, 10000)

    return () => clearInterval(interval)
  }, [shloks.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/banner/banner-1.jpg)`,
          transform: 'translateZ(0)',
          willChange: 'transform',
          height: '120%'
        }}
      />
      
      {/* Parallax overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-white/90">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span>Trusted by {constants.trustedFamiliesCount} families</span>
              </div>

              <div className="text-xl text-white/90 text-pretty max-w-3xl mx-auto min-h-[120px] flex items-center justify-center">
                <p 
                  className={`transition-all duration-600 ease-in-out text-center leading-relaxed ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {shloks[currentShlokIndex]}
                </p>
              </div>

              <h1 className="text-2xl lg:text-2xl font-bold text-white text-balance leading-tight">
                Traditional <span className="text-secondary">Pooja & Paath</span> Services
              </h1>


            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:+${phoneNumber}`}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </a>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-400 bg-transparent backdrop-blur-sm"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{constants.yearsOfExperience}</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{constants.ceremoniesCount}</div>
                <div className="text-sm text-white/80">Ceremonies Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{constants.typesOfPoojaCount}</div>
                <div className="text-sm text-white/80">Types of Pooja</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
