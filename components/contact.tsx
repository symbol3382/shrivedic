import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Get in Touch</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Ready to book your ceremony? Contact us for consultation and booking
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">Call us for immediate consultation</p>
                      <div className="space-y-1">
                        <Button variant="outline" size="sm" className="justify-start h-auto p-2 bg-transparent">
                          <Phone className="w-4 h-4 mr-2" />
                          +91 98765 43210
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">Quick messaging and booking</p>
                      <Button className="bg-green-600 hover:bg-green-700 h-auto p-2">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">Send us your requirements</p>
                      <p className="text-sm font-medium">shrivedic.pandit@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50 bg-muted/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Service Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="font-medium">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergency Services</span>
                      <span className="font-medium text-primary">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Book Your Ceremony</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 2 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Type of Ceremony *</Label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option value="">Select ceremony type</option>
                  <option value="ganesh-pooja">Ganesh Pooja</option>
                  <option value="home-pravesh">Home Pravesh</option>
                  <option value="satyanarayan">Satyanarayan Pooja</option>
                  <option value="durga-pooja">Durga Pooja</option>
                  <option value="lakshmi-pooja">Lakshmi Pooja</option>
                  <option value="hanuman-pooja">Hanuman Pooja</option>
                  <option value="rudrabhishek">Rudrabhishek</option>
                  <option value="kaal-sarp">Kaal Sarp Dosh Pooja</option>
                  <option value="custom">Custom Ceremony</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Complete address where ceremony will be conducted" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea id="message" placeholder="Any special requirements or questions..." />
              </div>

              <Button className="w-full" size="lg">
                Submit Booking Request
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Required fields. We'll contact you within 2 hours to confirm your booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
