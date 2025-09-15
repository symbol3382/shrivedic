import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Ganesh Pooja",
    description: "Traditional Ganesh Chaturthi celebrations and regular Ganesh worship ceremonies",
    price: "₹2,500 onwards",
    duration: "2-3 hours",
    image: "/placeholder-tv49q.png",
    popular: true,
  },
  {
    title: "Home Pravesh (Griha Pravesh)",
    description: "Sacred house warming ceremony for new homes with complete Vastu rituals",
    price: "₹5,000 onwards",
    duration: "3-4 hours",
    image: "/placeholder-3d6jj.png",
  },
  {
    title: "Satyanarayan Pooja",
    description: "Complete Satyanarayan Katha with traditional rituals and prasad preparation",
    price: "₹3,000 onwards",
    duration: "3-4 hours",
    image: "/placeholder-9jupj.png",
  },
  {
    title: "Durga Pooja",
    description: "Navratri celebrations and Durga Mata worship with complete rituals",
    price: "₹4,000 onwards",
    duration: "2-3 hours",
    image: "/placeholder-zu2d9.png",
  },
  {
    title: "Lakshmi Pooja",
    description: "Diwali Lakshmi Pooja and regular wealth blessing ceremonies",
    price: "₹2,000 onwards",
    duration: "2 hours",
    image: "/placeholder-onis6.png",
  },
  {
    title: "Hanuman Pooja",
    description: "Tuesday Hanuman worship and special Hanuman Jayanti celebrations",
    price: "₹1,500 onwards",
    duration: "1-2 hours",
    image: "/placeholder-u6tei.png",
  },
  {
    title: "Rudrabhishek",
    description: "Sacred Shiva worship with Rudra mantras and abhishek rituals",
    price: "₹3,500 onwards",
    duration: "2-3 hours",
    image: "/placeholder-ejeyq.png",
  },
  {
    title: "Kaal Sarp Dosh Pooja",
    description: "Special pooja for Kaal Sarp Dosh nivaran with complete rituals",
    price: "₹4,500 onwards",
    duration: "3-4 hours",
    image: "/placeholder-3t45a.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Sacred Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose from our wide range of traditional Hindu ceremonies, each performed with authentic Vedic rituals
          </p>
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
          <p className="text-muted-foreground mb-4">Need a custom ceremony or have special requirements?</p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Request Custom Pooja
          </Button>
        </div>
      </div>
    </section>
  )
}
