'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import constants from '@/constants.json'

const services = constants.services;

// Media Gallery Component
function MediaGallery({ 
  service, 
  isOpen, 
  onClose, 
  currentIndex, 
  onIndexChange 
}: { 
  service: any; 
  isOpen: boolean; 
  onClose: () => void; 
  currentIndex: number;
  onIndexChange: (index: number) => void;
}) {
  if (!isOpen) return null

  const currentMedia = service.media[currentIndex]
  const currentMediaPath = `/services/${service.id}/${currentMedia}`
  const isCurrentVideo = currentMedia.toLowerCase().endsWith('.mp4')

  const navigateMedia = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= service.media.length) newIndex = 0
    if (newIndex < 0) newIndex = service.media.length - 1
    onIndexChange(newIndex)
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm">
      {/* Header with close button */}
      <div className="flex justify-between items-center p-4">
        <h3 className="text-white text-lg font-semibold">{service.title}</h3>
        <Button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          size="sm"
        >
          <X className="w-4 h-4 mr-2" />
          Close
        </Button>
      </div>

      {/* Main media display area */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        {/* Navigation buttons */}
        {service.media.length > 1 && (
          <>
            <Button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 z-10"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 z-10"
              size="sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Media display */}
        <div className="w-full h-full max-w-6xl max-h-[70vh] flex items-center justify-center">
          {isCurrentVideo ? (
            <video
              src={currentMediaPath}
              controls
              autoPlay
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={currentMediaPath}
              alt={`${service.title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {service.media.length > 1 && (
        <div className="p-4 border-t border-white/20">
          <div className="flex justify-center space-x-2 overflow-x-auto max-w-4xl mx-auto">
            {service.media.map((media: string, index: number) => {
              const mediaPath = `/services/${service.id}/${media}`
              const isVideo = media.toLowerCase().endsWith('.mp4')
              const isActive = index === currentIndex

              return (
                <div
                  key={index}
                  onClick={() => onIndexChange(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    isActive ? 'border-white shadow-lg' : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  {isVideo ? (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <video
                        src={mediaPath}
                        className="w-full h-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={mediaPath}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 border-2 border-white rounded-lg" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export function Services() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: string]: number }>({})
  const [galleryOverlay, setGalleryOverlay] = useState<{ isOpen: boolean; service: any; currentIndex: number }>({ 
    isOpen: false, 
    service: null, 
    currentIndex: 0 
  })

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

  const handleMediaClick = (service: any) => {
    const currentIndex = currentMediaIndex[service.id] || 0
    setGalleryOverlay({ isOpen: true, service, currentIndex })
  }

  const closeGalleryOverlay = () => {
    setGalleryOverlay({ isOpen: false, service: null, currentIndex: 0 })
  }

  const handleGalleryIndexChange = (newIndex: number) => {
    setGalleryOverlay(prev => ({ ...prev, currentIndex: newIndex }))
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
                      onClick={() => handleMediaClick(service)}
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
                      onClick={() => handleMediaClick(service)}
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

              <CardHeader className="pb-3 flex-shrink-0 px-6 pt-0">
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
      
      {/* Media Gallery Overlay */}
      <MediaGallery 
        service={galleryOverlay.service}
        isOpen={galleryOverlay.isOpen} 
        onClose={closeGalleryOverlay}
        currentIndex={galleryOverlay.currentIndex}
        onIndexChange={handleGalleryIndexChange}
      />
    </section>
  )
}
