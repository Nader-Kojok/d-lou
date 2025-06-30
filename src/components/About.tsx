import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#04692F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white font-poppins">
              Pourquoi choisir D-LOU Legal Consulting ?
            </h2>
            <p className="text-lg text-white font-cabin leading-relaxed">
              Avec une expertise approfondie du marché sénégalais et une compréhension 
              unique des défis rencontrés par la diaspora, nous vous offrons un 
              accompagnement personnalisé et des solutions juridiques adaptées à vos besoins.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins">Expertise Locale</h3>
                  <p className="text-white/90 font-cabin">Connaissance approfondie du système juridique et du marché sénégalais</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins">Accompagnement Personnalisé</h3>
                  <p className="text-white/90 font-cabin">Suivi individualisé adapté à votre situation et vos objectifs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-[#04692F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white font-poppins">Réseau Étendu</h3>
                  <p className="text-white/90 font-cabin">Partenariats stratégiques pour faciliter vos démarches</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-white hover:bg-white/90 text-[#04692F] px-8 py-3 text-lg font-semibold font-cabin rounded-lg">
              Planifier une consultation
            </Button>
          </div>
          
          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg border-0 rounded-xl text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">150+</div>
              <p className="text-gray-600 font-cabin">Projets accompagnés</p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-0 rounded-xl text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">95%</div>
              <p className="text-gray-600 font-cabin">Taux de réussite</p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-0 rounded-xl text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">10+</div>
              <p className="text-gray-600 font-cabin">Années d&apos;expérience</p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-0 rounded-xl text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">24/7</div>
              <p className="text-gray-600 font-cabin">Support disponible</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}