import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    text: "The natural soap has transformed my skin. It feels like going back to my grandmother's remedies—pure, honest, and effective.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    text: "Finally, products that align with my values. Knowing I'm supporting farmers while caring for my family brings me peace.",
    rating: 5
  },
  {
    name: "Anjali Patel",
    location: "Ahmedabad, Gujarat",
    text: "The herbal tea blend reminds me of home. It's comforting to find products rooted in our traditions and made with such care.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary mb-3">Trusted by Families</p>
          <h2 className="text-3xl sm:text-4xl mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from real people who trust Eco-Sanskriti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <div>
                <div className="text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
