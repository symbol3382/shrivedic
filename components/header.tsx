import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import constants from '@/constants.json'

export function Header() {

  const phoneNumber = constants.phoneNumber
  const message = constants.whatsappMessage
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">श्री</span>
          </div>
          <h1 className="text-2xl font-bold text-primary">Shrivedic</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <a href={`tel:+${phoneNumber}`}>
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
