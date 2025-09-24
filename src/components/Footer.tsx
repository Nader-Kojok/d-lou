"use client";

import Image from "next/image";
import Link from "next/link";

// Extend Window interface for Google Translate
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: {
          new (options: GoogleTranslateOptions, elementId: string): GoogleTranslateElement;
          InlineLayout: {
            SIMPLE: GoogleTranslateLayout;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout: GoogleTranslateLayout;
}

interface GoogleTranslateElement {
  // Google Translate element instance
  [key: string]: unknown;
}

interface GoogleTranslateLayout {
  // Google Translate layout configuration
  [key: string]: unknown;
}

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {/* Logo Section */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animate-delay-200 text-center sm:text-left">
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer justify-center sm:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <Image 
                  src="/d-lou_logo.png" 
                  alt="D-LOU Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
              <div className="transition-all duration-300 group-hover:translate-x-2">
                <h3 className="text-lg sm:text-xl font-bold font-poppins transition-colors duration-300 group-hover:text-[#04692F]">D-LOU</h3>
                <p className="text-xs sm:text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">Legal Consulting</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 font-cabin leading-relaxed">
              Votre partenaire pour investir et s&apos;installer au Sénégal
            </p>
          </div>

          {/* Liens Utiles */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animate-delay-300 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-poppins mb-3 sm:mb-4">Liens Utiles</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Nos tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                  Contactez-Nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animate-delay-400 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-poppins mb-3 sm:mb-4">Horaires</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300">
              <p className="text-xs sm:text-sm">
                <span className="font-medium">Du Lundi au Vendredi:</span><br />
                de 08h30 à 17h00
              </p>
              <p className="text-xs sm:text-sm">
                <span className="font-medium">Samedi:</span><br />
                de 09h00 à 12h30
              </p>
            </div>
          </div>

          {/* Suivez-Nous */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up animate-delay-500 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-poppins mb-3 sm:mb-4">Suivez-Nous</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="https://www.facebook.com/people/D-Lou-Consulting/100092473785720/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm sm:text-base">Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/dlou.sn/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm sm:text-base">Instagram</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span className="text-sm sm:text-base">TikTok</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/d-lou-consulting/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 justify-center sm:justify-start"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
            </div>
            
            {/* Language Selector */}
            <div className="pt-3 sm:pt-4 flex justify-center sm:justify-start">
              <button 
                onClick={() => {
                  // Simple Google Translate redirect approach
                  const currentUrl = window.location.href;
                  const translateUrl = `https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(currentUrl)}`;
                  window.open(translateUrl, '_blank');
                }}
                className="flex items-center space-x-2 bg-[#FFFFFF]/50 px-3 py-2 rounded-lg text-xs sm:text-sm hover:bg-[#05692F] transition-colors cursor-pointer"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>Translate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#FFFFFF]/60 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 D-LOU Legal Consulting. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Conditions d&apos;Utilisation
              </a>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400">
              Developed with 💚 by Agence Arcane
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}