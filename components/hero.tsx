import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star } from "lucide-react"
import constants from '@/constants.json'

export function Hero() {
  const phoneNumber = constants.phoneNumber
  const encodedMessage = encodeURIComponent(constants.whatsappMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>Trusted by 500+ families</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Traditional <span className="text-primary">Pooja & Paath</span> Services
              </h1>

              <p className="text-xl text-muted-foreground text-pretty">
                Experience authentic Hindu religious ceremonies conducted by experienced Pandit Ji. From Ganesh Pooja to
                Home Pravesh, we bring sacred traditions to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
          <a href={`tel:+${phoneNumber}`}>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              </a>
              
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">

              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-600 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Ceremonies Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Types of Pooja</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/placeholder-vlqrh.png"
                alt="Pandit performing traditional pooja ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">🕉️</span>
                </div>
                <div>
                  <div className="font-semibold">Certified Pandit</div>
                  <div className="text-sm text-muted-foreground">Vedic Scholar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
