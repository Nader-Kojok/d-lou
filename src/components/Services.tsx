import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6 font-poppins">
            Notre expertise à votre service
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto font-cabin leading-relaxed">
            Nous mettons à votre disposition une expertise pointue dans les domaines du 
            droit des affaires, des litiges, et des transactions immobilières. Nous vous 
            accompagnons avec professionnalisme à chaque étape, pour vous offrir des 
            solutions juridiques claires et efficaces, adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#04692F] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] font-poppins">Droit des Affaires</h3>
              <p className="text-gray-600 font-cabin">
                Accompagnement juridique complet pour vos projets d&apos;entreprise, 
                création de sociétés et structuration d&apos;investissements.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#04692F] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] font-poppins">Gestion des Litiges</h3>
              <p className="text-gray-600 font-cabin">
                Résolution efficace de vos conflits juridiques avec une approche 
                stratégique et personnalisée pour protéger vos intérêts.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow border-0 rounded-xl">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#04692F] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] font-poppins">Transactions Immobilières</h3>
              <p className="text-gray-600 font-cabin">
                Sécurisation de vos acquisitions immobilières avec une expertise 
                approfondie du marché sénégalais et des réglementations locales.
              </p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#04692F] hover:bg-[#04692F]/90 text-white px-8 py-3 text-lg font-semibold font-cabin rounded-lg">
            Découvrir tous nos services
          </Button>
        </div>
      </div>
    </section>
  );
}