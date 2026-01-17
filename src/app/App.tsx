import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Values } from "@/app/components/Values";
import { Products } from "@/app/components/Products";
import { FarmerSupport } from "@/app/components/FarmerSupport";
import { Testimonials } from "@/app/components/Testimonials";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Values />
        <Products />
        <FarmerSupport />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
