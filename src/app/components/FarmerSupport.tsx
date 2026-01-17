import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { HandHeart, TrendingUp, Home } from "lucide-react";

const impacts = [
  {
    icon: HandHeart,
    stat: "500+",
    label: "Farmers Supported"
  },
  {
    icon: TrendingUp,
    stat: "40%",
    label: "Higher Income"
  },
  {
    icon: Home,
    stat: "50+",
    label: "Villages Reached"
  }
];

export function FarmerSupport() {
  return (
    <section id="farmers" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1597868165956-03a6827955b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMHNvaWwlMjBoYW5kcyUyMHBsYW50aW5nfGVufDF8fHx8MTc2ODY1NDk2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hands planting in soil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary mb-3">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl mb-6">
              Empowering Our Farmers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We work directly with farmers across rural India, ensuring they receive fair prices 
              for their organic produce. By eliminating middlemen, we help farming families earn 
              better livelihoods while preserving traditional agricultural practices.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every purchase you make supports sustainable farming, protects our soil, 
              and strengthens the backbone of our nation—our farmers.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <impact.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl text-primary mb-1">{impact.stat}</div>
                  <div className="text-sm text-muted-foreground">{impact.label}</div>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
              Read Their Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
