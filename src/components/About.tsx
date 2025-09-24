import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#04692F] overflow-hidden parallax-container">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins">
              Pourquoi choisir D-LOU Legal Consulting ?
            </h2>
            <p className="text-base sm:text-lg text-white font-cabin leading-relaxed">
              Avec une expertise approfondie du marché sénégalais et une compréhension 
              unique des défis rencontrés par la diaspora, nous vous offrons un 
              accompagnement personnalisé et des solutions juridiques adaptées à vos besoins.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins text-sm sm:text-base">Expertise Locale</h3>
                  <p className="text-white/90 font-cabin text-sm sm:text-base">Connaissance approfondie du système juridique et du marché sénégalais</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins text-sm sm:text-base">Accompagnement Personnalisé</h3>
                  <p className="text-white/90 font-cabin text-sm sm:text-base">Suivi individualisé adapté à votre situation et vos objectifs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins text-sm sm:text-base">Réseau Étendu</h3>
                  <p className="text-white/90 font-cabin text-sm sm:text-base">Partenariats stratégiques pour faciliter vos démarches</p>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <Button className="bg-white hover:bg-white/90 text-[#04692F] px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold font-cabin rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 group w-full sm:w-auto">
                <span className="transition-transform duration-300 group-hover:translate-x-1">En savoir plus sur nous</span>
              </Button>
            </Link>
          </div>
          
          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 animate-fade-in-right mt-8 lg:mt-0">
            <Card className="p-3 sm:p-4 md:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl text-center hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-100">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">150+</div>
              <p className="text-gray-600 font-cabin transition-colors duration-300 group-hover:text-[#04692F] text-xs sm:text-sm md:text-base">Projets accompagnés</p>
            </Card>
            
            <Card className="p-3 sm:p-4 md:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl text-center hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-200">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">95%</div>
              <p className="text-gray-600 font-cabin transition-colors duration-300 group-hover:text-[#04692F] text-xs sm:text-sm md:text-base">Taux de réussite</p>
            </Card>
            
            <Card className="p-3 sm:p-4 md:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl text-center hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">10+</div>
              <p className="text-gray-600 font-cabin transition-colors duration-300 group-hover:text-[#04692F] text-xs sm:text-sm md:text-base">Années d&apos;expérience</p>
            </Card>
            
            <Card className="p-3 sm:p-4 md:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl text-center hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-400">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-110">24/7</div>
              <p className="text-gray-600 font-cabin transition-colors duration-300 group-hover:text-[#04692F] text-xs sm:text-sm md:text-base">Support disponible</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}