import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E] parallax-container">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-poppins animate-slide-in-bottom">
            Ce que disent nos clients
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto font-cabin leading-relaxed animate-fade-in-up animate-delay-200">
            Découvrez les témoignages de nos clients qui ont fait confiance à D-LOU Legal Consulting 
            pour leurs projets d&apos;investissement et d&apos;installation au Sénégal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-lg sm:rounded-xl hover-lift animate-scale-in animate-delay-300">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed text-sm sm:text-base">
                &ldquo;Grâce à D-LOU Legal Consulting, j&apos;ai pu créer ma société au Sénégal sans aucune difficulté. 
                Leur accompagnement personnalisé et leur expertise du marché local ont été déterminants 
                pour le succès de mon projet.&rdquo;
              </p>
              <div className="pt-3 sm:pt-4 border-t border-[#04692F]/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-poppins text-sm sm:text-base">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins text-sm sm:text-base">Amadou Mbaye</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-cabin">Entrepreneur, Dakar</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-lg sm:rounded-xl hover-lift animate-scale-in animate-delay-400">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed text-sm sm:text-base">
                &ldquo;L&apos;équipe de D-LOU m&apos;a accompagnée dans l&apos;acquisition de ma résidence secondaire à Saly. 
                Leur connaissance du droit immobilier sénégalais et leur réseau de partenaires ont 
                rendu le processus fluide et sécurisé.&rdquo;
              </p>
              <div className="pt-3 sm:pt-4 border-t border-[#04692F]/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-poppins text-sm sm:text-base">FD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins text-sm sm:text-base">Fatou Diop</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-cabin">Investisseuse, Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 md:p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-lg sm:rounded-xl hover-lift animate-scale-in animate-delay-500 md:col-span-2 lg:col-span-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed text-sm sm:text-base">
                &ldquo;Excellent service ! D-LOU Legal Consulting m&apos;a aidé à résoudre un litige commercial 
                complexe. Leur approche professionnelle et leur maîtrise du droit des affaires 
                sénégalais ont été remarquables.&rdquo;
              </p>
              <div className="pt-3 sm:pt-4 border-t border-[#04692F]/20">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#04692F] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold font-poppins text-sm sm:text-base">IS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins text-sm sm:text-base">Ibrahima Sarr</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-cabin">Directeur Commercial, Thiès</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2">4.9/5</div>
              <p className="text-gray-300 font-cabin text-xs sm:text-sm md:text-base">Note moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2">200+</div>
              <p className="text-gray-300 font-cabin text-xs sm:text-sm md:text-base">Avis clients</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2">98%</div>
              <p className="text-gray-300 font-cabin text-xs sm:text-sm md:text-base">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04692F] font-poppins mb-1 sm:mb-2">5★</div>
              <p className="text-gray-300 font-cabin text-xs sm:text-sm md:text-base">Recommandations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}