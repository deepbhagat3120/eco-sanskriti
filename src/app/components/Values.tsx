import { Leaf, Heart, Users, Sprout } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No chemicals, no artificial ingredients. Only what nature intended, harvested with care and traditional knowledge."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each product is crafted with the same care and wisdom passed down through generations of Indian families."
  },
  {
    icon: Users,
    title: "Supporting Farmers",
    description: "Direct partnerships with local farmers ensure fair prices and sustainable livelihoods for our rural communities."
  },
  {
    icon: Sprout,
    title: "Earth-Friendly",
    description: "Biodegradable packaging, sustainable sourcing, and deep respect for the soil that nourishes us all."
  }
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary mb-3">Our Promise to You</p>
          <h2 className="text-3xl sm:text-4xl mb-4">
            Values That Guide Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every product we create carries the wisdom of our ancestors and the love for our land
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
