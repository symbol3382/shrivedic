import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import constants from '@/constants.json'
export function Contact() {
  return (
    <section id="contact" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/banner/banner-4.jpg)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-white">Get in Touch</h2>
          <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto">
            Ready to book your ceremony? Contact us for consultation and booking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {/* Phone Card */}
              <Card className="border-0 bg-gradient-to-br bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group aspect-square">
                <CardContent className="p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-4">
                    <Phone className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">Phone Call</h3>
                  <p className="text-white/80 mb-2 md:mb-4 text-xs md:text-sm">Immediate consultation</p>
                  <a href={`tel:+${constants.phoneNumber}`}>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="border-0 bg-gradient-to-br bg-green-900/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group aspect-square">
                <CardContent className="p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-4">
                    <MessageCircle className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">WhatsApp</h3>
                  <p className="text-white/80 mb-2 md:mb-4 text-xs md:text-sm">Quick messaging</p>
                  <a href={`https://wa.me/${constants.phoneNumber}?text=${encodeURIComponent(constants.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs md:text-sm px-2 py-1 md:px-4 md:py-2">
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      Message Now
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-0 bg-gradient-to-br bg-blue-900/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group aspect-square">
                <CardContent className="p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-4">
                    <Mail className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">Email</h3>
                  <p className="text-white/80 mb-2 md:mb-4 text-xs md:text-sm">Send requirements</p>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-1 md:p-2 border border-white/40 w-full">
                  <a href={`mailto:${constants.email}?subject=${encodeURIComponent(constants.emailContent.subject)}&body=${encodeURIComponent(constants.emailContent.content)}`}>
                    <p className="text-xs md:text-xs font-medium text-white break-all leading-tight">{constants.email}</p>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Service Hours Card */}
              <Card className="border-0 bg-gradient-to-br bg-purple-900/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group aspect-square">
                <CardContent className="p-2 md:p-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-4">
                    <Clock className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">Service Hours</h3>
                  <p className="text-white/80 mb-2 md:mb-4 text-xs md:text-sm">Always available</p>
                  <div className="space-y-1 md:space-y-2 w-full">
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-1 md:p-2 border border-white/40">
                      <span className="text-xs font-medium text-white">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary/40 to-secondary/40 backdrop-blur-sm rounded-lg p-1 md:p-2 border border-primary/50">
                      <span className="text-xs font-bold text-white">24/7 Emergency</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-black/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Book Your Ceremony</CardTitle>
              <CardDescription className="text-white/80">Fill out the form below and we'll get back to you within 2 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input id="name" placeholder="Your full name" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input id="phone" placeholder={`+${constants.phoneNumber}`} className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-white">Type of Ceremony *</Label>
                <select className="w-full p-3 border border-white/30 rounded-md bg-white/20 text-white">
                  <option value="" className="bg-gray-800 text-white">Select ceremony type</option>
                  <option value="ganesh-pooja" className="bg-gray-800 text-white">Ganesh Pooja</option>
                  <option value="home-pravesh" className="bg-gray-800 text-white">Home Pravesh</option>
                  <option value="satyanarayan" className="bg-gray-800 text-white">Satyanarayan Pooja</option>
                  <option value="durga-pooja" className="bg-gray-800 text-white">Durga Pooja</option>
                  <option value="lakshmi-pooja" className="bg-gray-800 text-white">Lakshmi Pooja</option>
                  <option value="hanuman-pooja" className="bg-gray-800 text-white">Hanuman Pooja</option>
                  <option value="rudrabhishek" className="bg-gray-800 text-white">Rudrabhishek</option>
                  <option value="kaal-sarp" className="bg-gray-800 text-white">Kaal Sarp Dosh Pooja</option>
                  <option value="custom" className="bg-gray-800 text-white">Custom Ceremony</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white">Preferred Date</Label>
                  <Input id="date" type="date" className="bg-white/20 border-white/30 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-white">Preferred Time</Label>
                  <Input id="time" type="time" className="bg-white/20 border-white/30 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white">Address</Label>
                <Textarea id="address" placeholder="Complete address where ceremony will be conducted" className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Additional Requirements</Label>
                <Textarea id="message" placeholder="Any special requirements or questions..." className="bg-white/20 border-white/30 text-white placeholder:text-white/60" />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg" size="lg">
                Submit Booking Request
              </Button>

              <p className="text-xs text-white/70 text-center">
                * Required fields. We'll contact you within 2 hours to confirm your booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
