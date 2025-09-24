import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      <Header />

      <Hero />

      <About />
      <Testimonials />
      <Process />
      <Footer />
    </div>
  );
}
