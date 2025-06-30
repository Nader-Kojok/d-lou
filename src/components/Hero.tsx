import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 z-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'}}>
      
      <Card className="bg-[#04692F] text-white p-12 max-w-4xl mx-auto relative z-20 rounded-2xl shadow-2xl border-0">
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
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#04692F] px-8 py-3 text-lg font-cabin font-semibold"
            >
              En savoir plus
            </Button>
            <Button 
              className="bg-white text-[#04692F] hover:bg-[#CCCCCC] px-8 py-3 text-lg font-semibold font-cabin"
            >
              Contactez-nous
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