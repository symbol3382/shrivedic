import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users, Clock } from "lucide-react"
import constants from '@/constants.json'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary text-primary">
                About Pandit Shubham
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                Preserving Sacred Traditions with <span className="text-primary">Authentic Knowledge</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                With over 15 years of dedicated service in performing Hindu religious ceremonies, Pandit Ji brings deep
                Vedic knowledge and authentic traditions to every ritual. Trained in traditional Sanskrit and Vedic
                scriptures, he ensures each ceremony is conducted with proper mantras, rituals, and spiritual
                significance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">{constants.yearsOfExperience}</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">{constants.vedicScholar}</div>
                  <div className="text-sm text-muted-foreground">Vedic Scholar</div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">{constants.trustedFamiliesCount}</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Commitment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Authentic Vedic rituals performed according to traditional scriptures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All necessary pooja materials and items provided</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Flexible timing to accommodate your schedule</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Guidance on ceremony significance and proper participation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/avatar.png"
                alt="Pandit Ji performing ceremonies"
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="absolute -bottom-6 -right-6 bg-card border border-border shadow-lg">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">🕉️</div>
                  <div className="font-semibold">Certified Vedic Scholar</div>
                  <div className="text-sm text-muted-foreground">Traditional Training</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
