import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#04692F] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#04692F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-poppins">
              Expertise multidimensionnelle. Résultats concrets.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 font-cabin leading-relaxed max-w-4xl">
              Chez D-LOU Consulting, nous voyons chaque défi comme une opportunité d&apos;accélérer votre installation et vos investissements au Sénégal. En collaborant avec vous, nous combinons notre réseau étendu et notre expertise en administration, relations publiques, et droit pour lever les obstacles les plus complexes. Grâce à notre connaissance du marché local et à notre suivi personnalisé, nos services garantissent des résultats tangibles, sécurisés et adaptés à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/about">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#04692F] px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold font-cabin rounded-lg transition-all duration-300">
                  En savoir plus
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-[#04692F] hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold font-cabin rounded-lg transition-all duration-300">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-[#1E1E1E] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins">
            Trouvez le service qui vous correspond
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-cabin mb-6 sm:mb-8 max-w-4xl mx-auto">
            Que vous soyez un investisseur débutant ou un entrepreneur aguerri, profitez de notre large gamme de services pour réussir votre projet au Sénégal. D-LOU vous accompagne pour faire une différence concrète dans vos initiatives.
          </p>
          <div className="flex justify-center">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* D-LOU CIE Section */}
      <section className="bg-[#04692F] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins">
            D-Lou cie (destiné aux entreprises et associations)
          </h2>
          
          <div className="mb-12 sm:mb-16">
            <Image 
              src="/D-loucieimage.avif" 
              alt="D-LOU CIE - Services aux entreprises" 
              width={1200}
              height={320}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                1. Rédaction des statuts et mise en relation avec un notaire
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                Nous assurons la rédaction complète des statuts de votre société, en vous mettant en relation avec un notaire pour officialiser rapidement et efficacement votre structure.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                2. Procédure administrative accélérée
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                Bénéficiez de notre expertise en pôle juridique et administratif pour accélérer vos démarches administratives, avec des délais réduits grâce à notre réseau et notre connaissance approfondie des procédures.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                3. Recherche de parties prenantes
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                Notre pôle d&apos;intermédiation vous accompagne dans la recherche de partenaires stratégiques (fournisseurs, partenaires financiers, etc.) pour faciliter et optimiser le lancement de vos activités.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                4. Conseil juridique sur mesure
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                Nous vous offrons des conseils juridiques adaptés à votre secteur d&apos;activité, incluant la rédaction de contrats, la négociation et l&apos;arbitrage, ainsi que la création de clauses spécifiques telles que celles d&apos;arbitrage et de compétence.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                5. Externalisation des tâches juridiques et gestion des différends
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                D-LOU prend en charge l&apos;externalisation de vos tâches juridiques, notamment la gestion des litiges, avec des solutions adaptées pour le règlement rapide des différends, que ce soit par la négociation ou l&apos;arbitrage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D-LOU SI Section */}
      <section className="bg-[#1E1E1E] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins">
            D-Lou si (destiné aux individus)
          </h2>
          
          <div className="mb-12 sm:mb-16">
            <Image 
              src="/Dlousi.avif" 
              alt="D-LOU SI - Services aux particuliers" 
              width={1200}
              height={320}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 1. Investissement rentable selon vos envies et budget
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous vous aidons à identifier des opportunités d&apos;investissement rentables, adaptées à votre budget et à vos aspirations, tout en vous mettant en relation avec des partenaires idéaux pour concrétiser vos projets.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 2. Création de réseau professionnel
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Bénéficiez de notre réseau pour établir des contacts stratégiques et créer des opportunités professionnelles. Nous vous présentons des parties prenantes ciblées selon vos besoins spécifiques.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 3. Mise en relation pour des opportunités d&apos;emploi
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Si vous recherchez un emploi, nous vous connectons à notre réseau local, vous facilitant l&apos;accès à des opportunités professionnelles adaptées à votre profil.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 4. Recherche de logements et terrains
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous vous mettons en relation avec nos partenaires pour trouver des habitations, terrains ou autres biens immobiliers, selon vos besoins et vos critères.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 5. Financement avec banques et assurances partenaires
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous facilitons votre accès au financement de projets personnels en vous connectant à des banques et assurances partenaires pour des solutions de financement adaptées.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 6. Activités touristiques immersives
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Profitez de nos partenariats pour découvrir des activités touristiques immersives qui vous permettront de mieux comprendre la culture locale tout en vous divertissant.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 7. Gestion des documents juridiques en cas de décès
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous vous assistons dans la gestion des démarches juridiques en cas de décès, incluant la mise en relation avec notre partenaire pour le rapatriement de corps via une assurance dédiée.
               </p>
             </div>
           </div>
        </div>
       </section>

       {/* DD-Lou Section */}
       <section className="bg-[#04692F] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins">
             DD-Lou
           </h2>
           
           <div className="mb-12 sm:mb-16">
             <Image 
               src="/DDlou1.avif" 
               alt="DD-Lou - Services spécialisés" 
               width={1200}
               height={500}
               className="w-full h-64 sm:h-80 lg:h-[500px] object-cover object-top rounded-xl sm:rounded-2xl shadow-2xl"
             />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 1. Conseil dans tous les domaines d&apos;expertise
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 DD-Lou offre des conseils spécialisés dans l&apos;ensemble des domaines d&apos;expertise de notre cabinet, afin de vous fournir des solutions complètes et adaptées à vos besoins.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 2. Notes et avis juridiques et administratifs
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Recevez des notes détaillées et des avis juridiques et administratifs pour vous guider dans vos décisions stratégiques et garantir la conformité de vos démarches.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 3. Informations sectorielles avec des experts locaux
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Accédez à des informations spécifiques sur les secteurs ou domaines visés grâce à notre réseau d&apos;experts basés au Sénégal, pour vous assurer des décisions éclairées.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 4. Récupération de créances à distance
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous facilitons la récupération de vos créances à distance, en vous offrant un suivi complet et en optimisant le processus de recouvrement.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 5. Résolution de conflits liés aux titres immobiliers
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 D-D-Lou intervient pour résoudre les conflits concernant les titres de propriété immobilière, en garantissant des solutions rapides et efficaces.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 6. Mise en œuvre de plaintes à distance
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous vous accompagnons dans la mise en œuvre de plaintes à distance pour escroquerie ou autres poursuites judiciaires, vous permettant de protéger vos intérêts même à distance.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* D-Lo Section */}
       <section className="bg-[#1E1E1E] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins">
             D-Lo
           </h2>
           
           <div className="mb-12 sm:mb-16">
             <Image 
               src="/dlo.avif" 
               alt="D-Lo - Services ONG et associations" 
               width={1200}
               height={384}
               className="w-full h-48 sm:h-64 lg:h-96 object-cover object-top rounded-xl sm:rounded-2xl shadow-2xl"
             />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 1. Sélection rigoureuse d&apos;ONG et d&apos;associations
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 D-Lo propose un carnet d&apos;ONG et d&apos;associations minutieusement sélectionnées pour leur impact réel et durable dans leurs domaines respectifs.
               </p>
             </div>

             <div>
               <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 font-poppins">
                 2. Valeurs durables et équitables
               </h3>
               <p className="text-sm sm:text-base lg:text-lg font-cabin leading-relaxed">
                 Nous privilégions les organisations qui partagent des valeurs durables, équitables et qui s&apos;engagent activement à promouvoir les valeurs du Sénégal.
               </p>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 }