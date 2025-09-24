export default function Process() {
  return (
    <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#04692F] parallax-container">

      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins leading-tight animate-slide-in-bottom">
              Comprendre notre processus de conseil juridique
            </h2>
          </div>
          
          {/* Right Content - Process Steps */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-right">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 sm:space-x-6 animate-scale-in animate-delay-300 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-white/30 ml-6 sm:ml-7 md:ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-2 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-bold text-white font-poppins mb-2 sm:mb-3">
                  Consultation Initiale
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed text-sm sm:text-base">
                  Nous commençons par une consultation approfondie pour comprendre vos besoins et objectifs juridiques spécifiques.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 sm:space-x-6 animate-scale-in animate-delay-400 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-white/30 ml-6 sm:ml-7 md:ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-2 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-bold text-white font-poppins mb-2 sm:mb-3">
                  Solutions Sur Mesure
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed text-sm sm:text-base">
                  Notre équipe élabore des stratégies juridiques personnalisées, conçues pour répondre efficacement à vos défis particuliers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 sm:space-x-6 animate-scale-in animate-delay-500 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-white/30 ml-6 sm:ml-7 md:ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-2 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-bold text-white font-poppins mb-2 sm:mb-3">
                  Accompagnement Expert
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed text-sm sm:text-base">
                  Nous vous offrons un soutien continu et des conseils d&apos;experts tout au long du processus juridique.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 sm:space-x-6 animate-scale-in animate-delay-600 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-2 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-bold text-white font-poppins mb-2 sm:mb-3">
                  Résultats Concrets
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed text-sm sm:text-base">
                  Notre engagement est de vous aider à obtenir les meilleurs résultats possibles dans vos affaires juridiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}