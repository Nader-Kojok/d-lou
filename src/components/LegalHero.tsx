import { Button } from "@/components/ui/button";

export default function LegalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
             }}>
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight font-poppins">
          Obtenez dès maintenant des conseils juridiques d&apos;experts
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-cabin">
          Contactez-nous pour des conseils juridiques personnalisés, adaptés à vos besoins et à votre situation spécifiques.
        </p>
        
        <div className="pt-6">
          <Button 
            className="bg-white text-[#04692F] hover:bg-gray-100 px-8 py-4 text-lg font-semibold font-cabin rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
}