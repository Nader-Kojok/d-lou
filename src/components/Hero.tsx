import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 z-10 bg-cover bg-center bg-no-repeat parallax-container" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'}}>
      
      {/* Parallax decorative elements */}
      <div className="parallax-element top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-parallax-slow animate-delay-100"></div>
      <div className="parallax-element top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-parallax-medium animate-delay-300"></div>
      <div className="parallax-element bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-parallax-slow animate-delay-500"></div>
      <div className="parallax-element top-1/3 right-1/3 w-8 h-8 bg-white/15 rounded-full animate-float animate-delay-200"></div>
      
      <Card className="bg-[#04692F] text-white p-12 max-w-4xl mx-auto relative z-20 rounded-2xl shadow-2xl border-0 animate-fade-in-up hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-poppins">
            Votre Partenaire pour Investir et S&apos;installer au Sénégal
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-cabin">
            Chez D-LOU Legal Consulting, nous accompagnons les investisseurs étrangers, en particulier les Sénégalais 
            de la diaspora, dans leurs projets d&apos;investissement et d&apos;installation au Sénégal. Grâce à notre expertise et 
            notre réseau, nous vous offrons un suivi personnalisé et multidimensionnel pour sécuriser et faciliter chaque 
            étape de votre projet, avec des solutions claires, efficaces et sur mesure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#04692F] px-8 py-3 text-lg font-cabin font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">En savoir plus</span>
            </Button>
            <Button 
              className="bg-white text-[#04692F] hover:bg-[#CCCCCC] px-8 py-3 text-lg font-semibold font-cabin transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 group"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">Contactez-nous</span>
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Scroll Down Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 font-cabin">Scroll Down</span>
          <svg 
            className="w-6 h-6 animate-pulse" 
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