import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1707721690626-10e5f0366bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBmaWVsZCUyMG5hdHVyZXxlbnwxfHx8fDE3Njg2NTQ5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Indian farmer in natural field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-primary mb-4">Swadeshi • Natural • Pure</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Rooted in Tradition,<br />
            Grown with Care
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover eco-friendly products crafted with ancient Indian wisdom, 
            natural ingredients, and deep respect for Mother Earth and our farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-6 py-3 border border-border bg-card text-foreground rounded-lg hover:bg-muted transition-colors">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
