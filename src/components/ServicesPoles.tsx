import { Card } from "@/components/ui/card";

export default function ServicesPoles() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#04692F] overflow-hidden parallax-container">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins">
              Accompagnement multidimensionnel pour réussir votre investissement et installation au Sénégal
            </h2>
            <p className="text-base sm:text-lg text-white font-cabin leading-relaxed">
              Notre approche intégrée combine trois pôles d&apos;expertise pour vous offrir un accompagnement complet et personnalisé dans tous vos projets au Sénégal.
            </p>
          </div>
          
          {/* Right Content - Three Poles Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 animate-fade-in-right mt-8 lg:mt-0">
            {/* Pôle Administratif */}
            <Card className="p-4 sm:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#04692F] font-poppins mb-2 transition-colors duration-300 group-hover:text-[#04692F]">
                    Pôle Administratif
                  </h3>
                  <p className="text-gray-600 font-cabin text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-[#04692F]">
                    Création de sociétés, immatriculation, ouverture de comptes bancaires et gestion des démarches administratives y compris les litiges fonciers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pôle Relations Publiques */}
            <Card className="p-4 sm:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#04692F] font-poppins mb-2 transition-colors duration-300 group-hover:text-[#04692F]">
                    Pôle Relations Publiques
                  </h3>
                  <p className="text-gray-600 font-cabin text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-[#04692F]">
                    Mise en relation avec les autorités (ministères, mairies) et assistance dans l&apos;organisation d&apos;événements pour booster vos projets.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pôle Juridique */}
            <Card className="p-4 sm:p-6 bg-white shadow-lg border-0 rounded-lg sm:rounded-xl hover-lift hover-glow group cursor-pointer animate-scale-in animate-delay-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" 
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#04692F] font-poppins mb-2 transition-colors duration-300 group-hover:text-[#04692F]">
                    Pôle Juridique
                  </h3>
                  <p className="text-gray-600 font-cabin text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-[#04692F]">
                    Conseils juridiques personnalisés, suivi des litiges, rédaction de contrats et représentation devant les instances judiciaires.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}