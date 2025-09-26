'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from 'react'

const services = [
  {
    title: "Ganesh Pooja",
    description: "Traditional Ganesh Chaturthi celebrations and regular Ganesh worship ceremonies",
    price: "₹2,500 onwards",
    duration: "2-3 hours",
    image: "/banner/banner-3.jpg",
    popular: true,
  },
  {
    title: "Home Pravesh (Griha Pravesh)",
    description: "Sacred house warming ceremony for new homes with complete Vastu rituals",
    price: "₹5,000 onwards",
    duration: "3-4 hours",
    image: "/banner/banner-4.jpg",
  },
  {
    title: "Satyanarayan Pooja",
    description: "Complete Satyanarayan Katha with traditional rituals and prasad preparation",
    price: "₹3,000 onwards",
    duration: "3-4 hours",
    image: "/banner/banner-5.jpg",
  },
  {
    title: "Durga Pooja",
    description: "Navratri celebrations and Durga Mata worship with complete rituals",
    price: "₹4,000 onwards",
    duration: "2-3 hours",
    image: "/banner/banner-6.jpg",
  },
  {
    title: "Lakshmi Pooja",
    description: "Diwali Lakshmi Pooja and regular wealth blessing ceremonies",
    price: "₹2,000 onwards",
    duration: "2 hours",
    image: "/banner/banner-7.jpg",
  },
  {
    title: "Hanuman Pooja",
    description: "Tuesday Hanuman worship and special Hanuman Jayanti celebrations",
    price: "₹1,500 onwards",
    duration: "1-2 hours",
    image: "/banner/banner-8.jpg",
  },
  {
    title: "Rudrabhishek",
    description: "Sacred Shiva worship with Rudra mantras and abhishek rituals",
    price: "₹3,500 onwards",
    duration: "2-3 hours",
    image: "/banner/banner-9.jpg",
  },
  {
    title: "Kaal Sarp Dosh Pooja",
    description: "Special pooja for Kaal Sarp Dosh nivaran with complete rituals",
    price: "₹4,500 onwards",
    duration: "3-4 hours",
    image: "/banner/banner-10.jpg",
  },
]

export function Services() {
  const backgroundRef = useRef<HTMLDivElement>(null)

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
          backgroundImage: 'url(/banner/banner-3.jpg)',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {service.popular && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Most Popular</Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{service.duration}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
    </section>
  )
}
