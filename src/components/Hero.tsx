import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 bg-cover bg-center bg-no-repeat parallax-container" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/hero-image.webp")'}}>
      
      <Card className="bg-[#04692F] text-white p-6 sm:p-8 md:p-10 lg:p-12 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-20 rounded-xl sm:rounded-2xl shadow-2xl border-0 animate-fade-in-up hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative z-10">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-poppins">
            Votre Partenaire pour Investir et S&apos;installer au Sénégal
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-cabin">
            Chez D-LOU Legal Consulting, nous accompagnons les investisseurs étrangers, en particulier les Sénégalais 
            de la diaspora, dans leurs projets d&apos;investissement et d&apos;installation au Sénégal. Grâce à notre expertise et 
            notre réseau, nous vous offrons un suivi personnalisé et multidimensionnel pour sécuriser et faciliter chaque 
            étape de votre projet, avec des solutions claires, efficaces et sur mesure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <Link href="/services">
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#04692F] px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-cabin font-semibold transition-all duration-200 hover:scale-[1.02] group w-full sm:w-auto"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">Nos services</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                className="bg-white text-[#04692F] hover:bg-[#CCCCCC] px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold font-cabin transition-all duration-200 hover:scale-[1.02] group w-full sm:w-auto"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">Contactez-nous</span>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
      
      {/* Scroll Down Animation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-xs sm:text-sm mb-2 font-cabin">Scroll Down</span>
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}