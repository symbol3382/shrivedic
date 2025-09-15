import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/placeholder-431py.png",
    alt: "Ganesh Pooja Ceremony",
    title: "Ganesh Pooja",
  },
  {
    src: "/placeholder-75pax.png",
    alt: "Home Pravesh Ceremony",
    title: "Home Pravesh",
  },
  {
    src: "/placeholder-ihiqg.png",
    alt: "Satyanarayan Pooja",
    title: "Satyanarayan Pooja",
  },
  {
    src: "/placeholder-ktzif.png",
    alt: "Durga Pooja Ceremony",
    title: "Durga Pooja",
  },
  {
    src: "/placeholder-tgdtv.png",
    alt: "Lakshmi Pooja",
    title: "Lakshmi Pooja",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Rudrabhishek Ceremony",
    title: "Rudrabhishek",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sacred Moments Gallery</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Witness the beauty and devotion of our traditional ceremonies through these captured moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-foreground">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Each ceremony is unique and personalized to your family's traditions and preferences
          </p>
        </div>
      </div>
    </section>
  )
}
