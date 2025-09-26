'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import constants from '@/constants.json'

const services = constants.services;

// Video Overlay Component
function VideoOverlay({ videoSrc, isOpen, onClose }: { videoSrc: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[70vw] h-[70vh] max-w-4xl max-h-[70vh]">
        <Button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white border-white/30 z-10"
          size="sm"
        >
          <X className="w-4 h-4 mr-2" />
          Close
        </Button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export function Services() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: string]: number }>({})
  const [videoOverlay, setVideoOverlay] = useState<{ isOpen: boolean; src: string }>({ isOpen: false, src: '' })

  // Helper functions
  const getCurrentMedia = (service: any) => {
    const index = currentMediaIndex[service.id] || 0
    return service.media[index] || service.media[0]
  }

  const getMediaPath = (service: any, mediaName: string) => {
    return `/services/${service.id}/${mediaName}`
  }

  const isVideo = (mediaName: string) => {
    return mediaName.toLowerCase().endsWith('.mp4')
  }

  const navigateMedia = (serviceId: string, direction: 'next' | 'prev', totalMedia: number) => {
    setCurrentMediaIndex(prev => {
      const currentIndex = prev[serviceId] || 0
      let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
      
      if (newIndex >= totalMedia) newIndex = 0
      if (newIndex < 0) newIndex = totalMedia - 1
      
      return { ...prev, [serviceId]: newIndex }
    })
  }

  const handleMediaClick = (service: any, mediaName: string) => {
    if (isVideo(mediaName)) {
      const videoSrc = getMediaPath(service, mediaName)
      setVideoOverlay({ isOpen: true, src: videoSrc })
    }
  }

  const closeVideoOverlay = () => {
    setVideoOverlay({ isOpen: false, src: '' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset
        // Use the same parallax speed as hero but offset by the hero section height
        const heroHeight = window.innerHeight // Approximate hero height
        const parallax = (scrolled - heroHeight) * 0.5
        backgroundRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="services" className="relative py-20 overflow-hidden -mt-10 pt-20">
      {/* Background Image with Parallax Effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/banner/banner-8.jpg)',
          transform: 'translateZ(0)',
          willChange: 'transform',
          height: '120%',
          top: '-10%'
        }}
      />
      
      {/* Parallax overlay for better text readability */}
      <div className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-foreground">Our Sacred Services</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mt-4">
              Choose from our wide range of traditional Hindu ceremonies, each performed with authentic Vedic rituals
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
          {services.map((service, index) => {
            const currentMedia = getCurrentMedia(service)
            const currentMediaPath = getMediaPath(service, currentMedia)
            const hasMultipleMedia = service.media.length > 1
            
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none border-border/50 h-full flex flex-col p-0 bg-[#ffffffBB]">
                <div className="relative">
                  {isVideo(currentMedia) ? (
                    <div 
                      className="w-full h-48 bg-gray-100 rounded-t-lg flex items-center justify-center cursor-pointer relative overflow-hidden"
                      onClick={() => handleMediaClick(service, currentMedia)}
                    >
                      <video
                        src={currentMediaPath}
                        className="w-full h-full object-cover"
                        muted
                        loop
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={currentMediaPath}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                      onClick={() => handleMediaClick(service, currentMedia)}
                    />
                  )}
                  
                  {service.popular && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Most Popular</Badge>
                  )}
                  
                  {/* Navigation buttons - show on hover if multiple media */}
                  {hasMultipleMedia && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateMedia(service.id, 'prev', service.media.length)
                        }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateMedia(service.id, 'next', service.media.length)
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                  
                  {/* Media indicator dots */}
                  {hasMultipleMedia && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {service.media.map((_, mediaIndex) => (
                        <div
                          key={mediaIndex}
                          className={`w-2 h-2 rounded-full ${
                            mediaIndex === (currentMediaIndex[service.id] || 0) 
                              ? 'bg-white' 
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

              <CardHeader className="pb-3 flex-shrink-0 px-6 pt-6">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>

                <CardContent className="space-y-4 mt-auto px-6 pb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">Need a custom ceremony or have special requirements?</p>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white/50 backdrop-blur-sm"
            >
              Request Custom Pooja
            </Button>
          </div>
        </div>
      </div>
      
      {/* Video Overlay */}
      <VideoOverlay 
        videoSrc={videoOverlay.src} 
        isOpen={videoOverlay.isOpen} 
        onClose={closeVideoOverlay} 
      />
    </section>
  )
}
