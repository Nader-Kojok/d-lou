import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-cabin leading-relaxed">
            Découvrez les témoignages de nos clients qui ont fait confiance à D-LOU Legal Consulting 
            pour leurs projets d&apos;investissement et d&apos;installation au Sénégal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed">
                &ldquo;Grâce à D-LOU Legal Consulting, j&apos;ai pu créer ma société au Sénégal sans aucune difficulté. 
                Leur accompagnement personnalisé et leur expertise du marché local ont été déterminants 
                pour le succès de mon projet.&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#04692F] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins">Amadou Mbaye</h4>
                    <p className="text-sm text-gray-600 font-cabin">Entrepreneur, Dakar</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed">
                &ldquo;L&apos;équipe de D-LOU m&apos;a accompagnée dans l&apos;acquisition de ma résidence secondaire à Saly. 
                Leur connaissance du droit immobilier sénégalais et leur réseau de partenaires ont 
                rendu le processus fluide et sécurisé.&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#04692F] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">FD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins">Fatou Diop</h4>
                    <p className="text-sm text-gray-600 font-cabin">Investisseuse, Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-cabin italic leading-relaxed">
                &ldquo;Excellent service ! D-LOU Legal Consulting m&apos;a aidé à résoudre un litige commercial 
                complexe. Leur approche professionnelle et leur maîtrise du droit des affaires 
                sénégalais ont été remarquables.&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#04692F] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-poppins">IS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] font-poppins">Ibrahima Sarr</h4>
                    <p className="text-sm text-gray-600 font-cabin">Directeur Commercial, Thiès</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">4.9/5</div>
              <p className="text-gray-300 font-cabin">Note moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">200+</div>
              <p className="text-gray-300 font-cabin">Avis clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">98%</div>
              <p className="text-gray-300 font-cabin">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#04692F] font-poppins mb-2">5★</div>
              <p className="text-gray-300 font-cabin">Recommandations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}