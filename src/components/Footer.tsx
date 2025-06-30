"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1E1E1E] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-start">
          {/* Logo and Newsletter Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#04692F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins">D-LOU</h3>
                <p className="text-sm text-gray-400">Legal Consulting</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Inscrivez-vous à notre newsletter pour rester informé des nouveautés et des mises à jour.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrer votre adresse E-mail"
                  className="w-full px-4 py-2 bg-[#1E1E1E] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#04692F] transition-colors"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-[#04692F] hover:bg-[#035a26] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  S&apos;abonner
                </Button>
              </form>
              
              <p className="text-xs text-gray-400">
                En vous abonnant, vous acceptez notre Politique de Confidentialité et consentez à recevoir des mises à jour de notre part.
              </p>
            </div>
          </div>

          {/* Liens Utiles */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins mb-4">Liens Utiles</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Nos services
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-gray-300 hover:text-white transition-colors">
                  Nos tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contactez-Nous
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins mb-4">Horaires</h4>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm">
                <span className="font-medium">Du Lundi au Vendredi:</span><br />
                de 08h30 à 17h00
              </p>
              <p className="text-sm">
                <span className="font-medium">Samedi:</span><br />
                de 09h00 à 12h30
              </p>
            </div>
          </div>

          {/* Suivez-Nous */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins mb-4">Suivez-Nous</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span>Facebook</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                <span>Instagram</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-00 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            
            {/* Language Selector */}
            <div className="pt-4">
              <button className="flex items-center space-x-2 bg-[#FFFFFF]/50 px-3 py-2 rounded-lg text-sm hover:bg-[#05692F] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>French</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF]/60 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 D-LOU Legal Consulting. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Conditions d&apos;Utilisation
              </a>
            </div>
            
            <p className="text-sm text-gray-400">
              Developed with 💚 by Agence Arcane
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}