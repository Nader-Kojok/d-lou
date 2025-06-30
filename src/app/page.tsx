import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import LegalHero from "@/components/LegalHero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      <Header />

      <Hero />

      <Services />
      <About />
      <Testimonials />
      <Process />
      <LegalHero />
      <Footer />
    </div>
  );
}
