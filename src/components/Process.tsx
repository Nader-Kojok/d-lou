export default function Process() {
  return (
    <section className="relative z-10 py-20 px-6 bg-[#04692F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white font-poppins leading-tight">
              Comprendre notre processus de conseil juridique
            </h2>
          </div>
          
          {/* Right Content - Process Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-16 bg-white/30 ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-white font-poppins mb-3">
                  Consultation Initiale
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed">
                  Nous commençons par une consultation approfondie pour comprendre vos besoins et objectifs juridiques spécifiques.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-16 bg-white/30 ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-white font-poppins mb-3">
                  Solutions Sur Mesure
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed">
                  Notre équipe élabore des stratégies juridiques personnalisées, conçues pour répondre efficacement à vos défis particuliers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                {/* Connecting line */}
                <div className="w-0.5 h-16 bg-white/30 ml-8 mt-4"></div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-white font-poppins mb-3">
                  Accompagnement Expert
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed">
                  Nous vous offrons un soutien continu et des conseils d&apos;experts tout au long du processus juridique.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#04692F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-white font-poppins mb-3">
                  Résultats Concrets
                </h3>
                <p className="text-white/90 font-cabin leading-relaxed">
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