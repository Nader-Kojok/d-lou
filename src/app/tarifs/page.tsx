import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TarifsPage = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#04692F] text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Grille de tarification</h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90">Découvrez nos tarifs transparents et adaptés à vos besoins</p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main Services Table */}
          <div className="bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden mb-8 sm:mb-12 border border-[#04692F]/30">
            <div className="bg-[#04692F] text-white p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center">Grille de tarification¹</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-[#04692F] text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Prestation / Prix²</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Prix local</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Prix expat (français, américaine)</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Prix société</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Prix association</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Simple réponse à une question</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">50 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">25 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">100 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">50 000</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Consultation (25-30min) téléphonique</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">100 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">75 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">300 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Rendez-vous en personne (1 - 2 heures)</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">250 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">175 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">500 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Consultation + Rédaction d&apos;écrit</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">400 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">750 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">1 000 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Consultation + rédaction d&apos;écrits + documentation officielle</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">500 000 - 1 000 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">1 500 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">1 750 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Consultation + rédaction d&apos;écrits + documentation officielle + Suivi</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">750 000 - 1 500 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">3 000 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">2 500 000</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">550 000</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Négociation</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">1 500 000 ou une commission au pro rata de 5% du gain total de la transaction</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">Idem</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">10 % du gain total</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">5 % du gain total</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Règlement des différends</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">3 000 000 ou commission 5% sur le montant des dommages et intérêts</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">2 500 euro</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">5 000 000 ou 15% des dommages et intérêts obtenus</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Suivie mensuelle</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Suivie annuelle</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">À négocier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Administrative Procedures Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-[#04692F] text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Procédure administrative</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Prix journalier (24 heures de travail)</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-xs sm:text-sm">Frais de rapidité (expéditée)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Prix expat</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">100 000 F CFA</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">60 000 F CFA</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Prix local</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">65 000 F CFA</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">45 000 F CFA</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Prix société</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">350 000 F CFA</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">100 000 F CFA</td>
                  </tr>
                  <tr className="border-b border-[#04692F]/20 hover:bg-gray-50 bg-white text-black">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm">Prix association</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">250 000 F CFA</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">50 000 F CFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnotes */}
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#04692F] space-y-2">
            <p><strong>1.</strong> Les prix sont basés sur les nomenclatures juridiques françaises et sénégalaises des avocats et des sociétés de conseil (Arrêté ministériel n°1502 en vigueur du 30 décembre 2008, fixant le barème de référence des honoraires d&apos;avocats à partir du 1er novembre 2009*)</p>
            <p><strong>2.</strong> Les prix sont annoncés en XOF (francs CFA) par défaut, toute autre devise sera spécifiée</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TarifsPage;