import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TarifsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-[#04692F] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Grille de tarification</h1>
          <p className="text-xl opacity-90">Découvrez nos tarifs transparents et adaptés à vos besoins</p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Main Services Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-[#04692F] text-white p-6">
              <h2 className="text-2xl font-bold text-center">Grille de tarification¹</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Prestation / Prix²</th>
                    <th className="px-4 py-3 text-center font-semibold">Prix local</th>
                    <th className="px-4 py-3 text-center font-semibold">Prix expat (français, américaine)</th>
                    <th className="px-4 py-3 text-center font-semibold">Prix société</th>
                    <th className="px-4 py-3 text-center font-semibold">Prix association</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Simple réponse à une question</td>
                    <td className="px-4 py-3 text-center">50 000</td>
                    <td className="px-4 py-3 text-center">25 euro</td>
                    <td className="px-4 py-3 text-center">100 000</td>
                    <td className="px-4 py-3 text-center">50 000</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Consultation (25-30min) téléphonique</td>
                    <td className="px-4 py-3 text-center">100 000</td>
                    <td className="px-4 py-3 text-center">75 euro</td>
                    <td className="px-4 py-3 text-center">300 000</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Rendez-vous en personne (1 - 2 heures)</td>
                    <td className="px-4 py-3 text-center">250 000</td>
                    <td className="px-4 py-3 text-center">175 euro</td>
                    <td className="px-4 py-3 text-center">500 000</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Consultation + Rédaction d&apos;écrit</td>
                    <td className="px-4 py-3 text-center">400 000</td>
                    <td className="px-4 py-3 text-center">750 euro</td>
                    <td className="px-4 py-3 text-center">1 000 000</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Consultation + rédaction d&apos;écrits + documentation officielle</td>
                    <td className="px-4 py-3 text-center">500 000 - 1 000 000</td>
                    <td className="px-4 py-3 text-center">1 500 euro</td>
                    <td className="px-4 py-3 text-center">1 750 000</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Consultation + rédaction d&apos;écrits + documentation officielle + Suivi</td>
                    <td className="px-4 py-3 text-center">750 000 - 1 500 000</td>
                    <td className="px-4 py-3 text-center">3 000 euro</td>
                    <td className="px-4 py-3 text-center">2 500 000</td>
                    <td className="px-4 py-3 text-center">550 000</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Négociation</td>
                    <td className="px-4 py-3 text-center text-sm">1 500 000 ou une commission au pro rata de 5% du gain total de la transaction</td>
                    <td className="px-4 py-3 text-center">Idem</td>
                    <td className="px-4 py-3 text-center">10 % du gain total</td>
                    <td className="px-4 py-3 text-center">5 % du gain total</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Règlement des différends</td>
                    <td className="px-4 py-3 text-center text-sm">3 000 000 ou commission 5% sur le montant des dommages et intérêts</td>
                    <td className="px-4 py-3 text-center">2 500 euro</td>
                    <td className="px-4 py-3 text-center text-sm">5 000 000 ou 15% des dommages et intérêts obtenus</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Suivie mensuelle</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Suivie annuelle</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                    <td className="px-4 py-3 text-center">À négocier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Administrative Procedures Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Procédure administrative</th>
                    <th className="px-4 py-3 text-center font-semibold">Prix journalier (24 heures de travail)</th>
                    <th className="px-4 py-3 text-center font-semibold">Frais de rapidité (expéditée)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Prix expat</td>
                    <td className="px-4 py-3 text-center">100 000 F CFA</td>
                    <td className="px-4 py-3 text-center">60 000 F CFA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Prix local</td>
                    <td className="px-4 py-3 text-center">65 000 F CFA</td>
                    <td className="px-4 py-3 text-center">45 000 F CFA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Prix société</td>
                    <td className="px-4 py-3 text-center">350 000 F CFA</td>
                    <td className="px-4 py-3 text-center">100 000 F CFA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 bg-gray-25">
                    <td className="px-4 py-3 font-medium">Prix association</td>
                    <td className="px-4 py-3 text-center">250 000 F CFA</td>
                    <td className="px-4 py-3 text-center">50 000 F CFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnotes */}
          <div className="mt-8 text-sm text-gray-600 space-y-2">
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