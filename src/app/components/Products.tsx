import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const products = [
  {
    name: "Natural Handmade Soap",
    description: "Made with neem, turmeric, and herbs. Gentle on skin, tough on impurities.",
    image: "https://images.unsplash.com/photo-1726235812628-23558521686f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc29hcCUyMGhhbmRtYWRlJTIwZWNvfGVufDF8fHx8MTc2ODY1NDk2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Bestseller"
  },
  {
    name: "Organic Herbal Powder",
    description: "Traditional blend of Ayurvedic herbs for health and wellness.",
    image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJtZXJpYyUyMHNwaWNlcyUyMGluZGlhbnxlbnwxfHx8fDE3Njg2NTQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: null
  },
  {
    name: "Herbal Tea Blend",
    description: "Carefully selected herbs and spices for natural wellness.",
    image: "https://images.unsplash.com/photo-1758657996602-717fa28bc0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwb3JnYW5pYyUyMGluZ3JlZGllbnRzJTIwaGVyYnN8ZW58MXx8fHwxNzY4NjU0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "New"
  },
  {
    name: "Natural Skincare Oil",
    description: "Cold-pressed oils enriched with traditional botanicals.",
    image: "https://images.unsplash.com/photo-1644585426921-35ecc1ac85f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYXZlcyUyMG5hdHVyZSUyMGZyZXNofGVufDF8fHx8MTc2ODY1NDk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: null
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary mb-3">Pure & Natural</p>
          <h2 className="text-3xl sm:text-4xl mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each product tells a story of tradition, care, and respect for nature
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
