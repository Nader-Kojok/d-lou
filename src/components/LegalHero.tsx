import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LegalHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-cover bg-center bg-no-repeat parallax-container" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
             }}>
      

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight font-poppins animate-slide-in-bottom">
          Pourquoi choisir D-LOU ?
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-cabin animate-fade-in-up animate-delay-200">
          Chez D-LOU, nous faisons bien plus que du conseil, nous devenons vos partenaires dans la réussite de vos projets. Grâce à notre connaissance des problématiques africaines et notre expertise juridique et administrative, nous vous accompagnons à chaque étape avec un suivi humain et personnalisé.
        </p>
        
        <div className="pt-6 animate-fade-in-up animate-delay-400">
          <Link href="/contact">
            <Button 
              className="bg-white text-[#04692F] hover:bg-gray-100 px-8 py-4 text-lg font-semibold font-cabin rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">Contactez-nous</span>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="mt-16 max-w-4xl mx-auto relative z-10 animate-fade-in-up animate-delay-600">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 hover-lift transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 font-poppins">
            Découvrez notre approche
          </h2>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" 
              title="Pourquoi choisir D-LOU Legal Consulting"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-white/80 mt-4 font-cabin">
            Éviter les escrocs au pays ! On peut investir tranquille
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
}