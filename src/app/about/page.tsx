import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Qui sommes-nous Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#04692F] to-[#05A03A]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#04692F] rounded-2xl p-12 shadow-2xl hover-lift animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-8">
              Qui sommes-nous ?
            </h1>
            <p className="text-lg text-white font-cabin leading-relaxed">
              D-LOU Consulting est un cabinet multidimensionnel spécialisé dans l&apos;accompagnement des ressortissants étrangers, notamment des 
              Sénégalais de la diaspora, souhaitant investir ou s&apos;installer au Sénégal. Grâce à notre connaissance approfondie du terrain et à notre réseau 
              local, nous offrons des solutions sur mesure pour résoudre les défis liés à l&apos;investissement, l&apos;installation et la gestion des affaires au Sénégal.
            </p>
          </div>
        </div>
      </section>

      {/* Notre mission Section */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl font-bold text-white font-poppins">
                Notre mission
              </h2>
              <p className="text-lg text-white font-cabin leading-relaxed">
                Nous nous engageons à fournir un accompagnement complet, de 
                l&apos;assistance administrative à la gestion juridique, tout en facilitant la 
                mise en relation avec les parties prenantes locales. Notre objectif 
                est de simplifier le parcours de nos clients, en leur offrant une 
                expertise de qualité et un réseau solide pour garantir la réussite de 
                leurs projets au Sénégal.
              </p>
            </div>
            
            {/* Right Content - Team Image */}
            <div className="relative animate-fade-in-right">
              <div className="bg-gray-400 rounded-2xl overflow-hidden shadow-2xl hover-lift transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/dlou photo 1.webp" 
                  alt="Équipe D-LOU Consulting" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs Section */}
      <section className="py-20 px-6 bg-[#04692F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Values */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl font-bold text-white font-poppins mb-8">
                Chez D-LOU, nous croyons en des valeurs fortes :
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins mb-2">
                      Transparence
                    </h3>
                    <p className="text-white/90 font-cabin">
                      dans toutes nos démarches.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins mb-2">
                      Professionnalisme
                    </h3>
                    <p className="text-white/90 font-cabin">
                      à chaque étape de votre projet.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins mb-2">
                      Impact durable
                    </h3>
                    <p className="text-white/90 font-cabin">
                      en alignant nos actions avec des objectifs de développement équitable et durable au Sénégal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Title */}
            <div className="flex items-center justify-center animate-fade-in-right">
              <h2 className="text-6xl md:text-7xl font-bold text-white font-poppins text-right animate-float">
                Nos valeurs
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe Section */}
      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white font-poppins mb-6">
              Notre équipe
            </h2>
            <p className="text-lg text-white font-cabin leading-relaxed max-w-4xl">
              Notre cabinet est dirigé par une équipe d&apos;experts multidisciplinaires avec des décennies d&apos;expérience 
              combinée dans leurs secteurs respectifs :
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Amadou Moustapha Kane */}
            <div className="text-center animate-scale-in animate-delay-100 group">
              <div className="bg-gray-400 rounded-2xl overflow-hidden mb-6 aspect-square hover-lift transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-lg font-poppins">Photo Amadou</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-poppins mb-2">
                Amadou Moustapha Kane
              </h3>
              <p className="text-[#04692F] font-semibold font-cabin mb-3">
                Président du Cabinet et Responsable du Pôle Juridique
              </p>
              <p className="text-white/90 font-cabin text-sm leading-relaxed">
                Fort d&apos;une expérience en entreprise et ONG, il co-dirige également le pôle juridique.
              </p>
            </div>
            
            {/* Khady Touré */}
            <div className="text-center animate-scale-in animate-delay-200 group">
              <div className="bg-gray-400 rounded-2xl overflow-hidden mb-6 aspect-square hover-lift transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-lg font-poppins">Photo Khady</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-poppins mb-2">
                Khady Touré
              </h3>
              <p className="text-[#04692F] font-semibold font-cabin mb-3">
                Conseillère en Communication, Spécialiste en Intermédiation et Relations Publiques
              </p>
              <p className="text-white/90 font-cabin text-sm leading-relaxed">
                Plus de 30 ans d&apos;expertise en Europe et en Afrique, notamment au Sénégal.
              </p>
            </div>
            
            {/* Serigne Fallou Kane */}
            <div className="text-center animate-scale-in animate-delay-300 group">
              <div className="bg-gray-400 rounded-2xl overflow-hidden mb-6 aspect-square hover-lift transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-gray-500 flex items-center justify-center">
                  <span className="text-white text-lg font-poppins">Photo Serigne</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-poppins mb-2">
                Serigne Fallou Kane
              </h3>
              <p className="text-[#04692F] font-semibold font-cabin mb-3">
                Expert en Administration Sénégalaise
              </p>
              <p className="text-white/90 font-cabin text-sm leading-relaxed">
                Plus de 30 ans d&apos;expérience dans le secteur public, à la tête du pôle administratif.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="w-8 h-8 bg-[#04692F] rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-[#04692F] rounded flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir D-LOU Section */}
      <section className="relative py-20 px-6 bg-cover bg-center bg-no-repeat parallax-container" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
               }}>
        
        {/* Parallax decorative elements */}
        <div className="parallax-element top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-parallax-slow animate-delay-100"></div>
        <div className="parallax-element top-40 right-20 w-20 h-20 bg-white/5 rounded-full animate-parallax-medium animate-delay-300"></div>
        <div className="parallax-element bottom-32 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animate-delay-500"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Main Content */}
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight font-poppins animate-slide-in-bottom">
              Pourquoi choisir D-LOU ?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-cabin animate-fade-in-up animate-delay-200">
              Chez D-LOU, nous faisons bien plus que du conseil, nous devenons vos partenaires dans la réussite de vos projets. Grâce à notre connaissance des problématiques africaines et notre expertise juridique et administrative, nous vous accompagnons à chaque étape avec un suivi humain et personnalisé.
            </p>
          </div>
          
          {/* Video Section */}
          <div className="mt-16 animate-fade-in-up animate-delay-600">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 hover-lift transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 font-poppins">
                Découvrez notre approche
              </h3>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example" 
                  title="Pourquoi choisir D-LOU Legal Consulting"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-white/80 mt-4 font-cabin">
                Éviter les escrocs au pays ! On peut investir tranquille
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Nos partenaires Section */}
      <section className="py-20 px-6 bg-[#04692F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-4xl font-bold text-white font-poppins mb-6">
                Nos partenaires
              </h2>
              <p className="text-lg text-white font-cabin leading-relaxed">
                Nous travaillons en étroite collaboration avec des sociétés immobilières, des 
                banques et des assurances locales pour offrir des solutions fiables et rentables. 
                Ces partenariats, triés sur le volet, nous permettent d&apos;assurer la sécurité et la 
                réussite de vos investissements à travers tout le Sénégal.
              </p>
            </div>
            
            {/* Right Content - Partner Logos */}
            <div className="flex justify-center items-center space-x-8 animate-fade-in-right">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-lg hover-lift hover-glow transition-all duration-300 hover:scale-110 animate-scale-in animate-delay-100">
                <span className="text-2xl font-bold text-[#04692F] font-poppins">A</span>
              </div>
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-lg hover-lift hover-glow transition-all duration-300 hover:scale-110 animate-scale-in animate-delay-200">
                <span className="text-2xl font-bold text-[#04692F] font-poppins">B</span>
              </div>
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow-lg hover-lift hover-glow transition-all duration-300 hover:scale-110 animate-scale-in animate-delay-300">
                <span className="text-2xl font-bold text-[#04692F] font-poppins">C</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/">
              <button className="bg-white hover:bg-gray-100 text-[#04692F] px-8 py-3 rounded-lg font-semibold font-cabin transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 group">
                <span className="transition-transform duration-300 group-hover:translate-x-1">Retour à l&apos;accueil</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}