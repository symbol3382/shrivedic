import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"
import constants from '@/constants.json'
export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">श्री</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Shrivedic</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Preserving sacred Hindu traditions through authentic Vedic ceremonies. Bringing spirituality and blessings
              to your doorstep.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Popular Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ganesh Pooja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home Pravesh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Satyanarayan Pooja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Durga Pooja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lakshmi Pooja
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Pandit Ji
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Booking Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <a className="flex items-center space-x-2 text-muted-foreground" href={`tel:+${constants.phoneNumber}`}>
                <Phone className="w-4 h-4" />
                <span>+{constants.phoneNumber}</span>
              </a>

              <a className="flex items-center space-x-2 text-muted-foreground" href={`https://wa.me/${constants.phoneNumber}?text=${encodeURIComponent(constants.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>{constants.email}</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Serving across Delhi NCR and nearby areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 Shrivedic Pandit Services. All rights reserved. | Bringing sacred traditions to modern homes.
          </p>
        </div>
      </div>
    </footer>
  )
}
