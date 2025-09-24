"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 bg-[#1E1E1E] text-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300">
            <Image 
              src="/d-lou_logo.png" 
              alt="D-LOU Logo" 
              width={48} 
              height={48} 
              className="object-contain filter drop-shadow-sm transition-all duration-300 group-hover:brightness-125"
              priority
            />
          </div>
          <div className="transition-all duration-300">
            <div className="text-xl sm:text-2xl font-bold font-poppins transition-colors duration-300 group-hover:text-[#04692F]">D-LOU</div>
            <p className="text-xs sm:text-sm text-gray-300 font-cabin transition-colors duration-300 group-hover:text-gray-100">Legal consulting</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex space-x-6 xl:space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={`transition-colors duration-300 font-cabin font-medium cursor-pointer px-3 py-2 rounded-md ${
                  pathname === '/' 
                    ? 'text-[#04692F] bg-[#04692F]/20 border-b-2 border-[#04692F]' 
                    : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
                }`}>
                  Accueil
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={`transition-colors duration-300 font-cabin font-medium cursor-pointer px-3 py-2 rounded-md ${
                  pathname === '/about' 
                    ? 'text-[#04692F] bg-[#04692F]/20 border-b-2 border-[#04692F]' 
                    : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
                }`}>
                  À Propos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className={`transition-colors duration-300 font-cabin font-medium cursor-pointer px-3 py-2 rounded-md ${
                  pathname === '/services' 
                    ? 'text-[#04692F] bg-[#04692F]/20 border-b-2 border-[#04692F]' 
                    : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
                }`}>
                  Nos services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/tarifs" className={`transition-colors duration-300 font-cabin font-medium cursor-pointer px-3 py-2 rounded-md ${
                  pathname === '/tarifs' 
                    ? 'text-[#04692F] bg-[#04692F]/20 border-b-2 border-[#04692F]' 
                    : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
                }`}>
                  Tarifs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Desktop Contact Button */}
        <Button asChild className="hidden lg:block bg-[#04692F] hover:bg-[#04692F]/90 text-white px-4 xl:px-6 py-2 rounded-md font-cabin font-semibold transition-colors duration-300">
          <Link href="/contact">Contactez-nous</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1E1E1E] border-l border-[#04692F]/30 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#04692F]/30">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="px-4 py-6 space-y-2">
          <Link 
            href="/" 
            className={`block transition-colors duration-300 font-cabin font-medium py-3 px-4 rounded-md ${
              pathname === '/' 
                ? 'text-[#04692F] bg-[#04692F]/20 border-l-4 border-[#04692F]' 
                : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            href="/about" 
            className={`block transition-colors duration-300 font-cabin font-medium py-3 px-4 rounded-md ${
              pathname === '/about' 
                ? 'text-[#04692F] bg-[#04692F]/20 border-l-4 border-[#04692F]' 
                : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            À Propos
          </Link>
          <Link 
            href="/services" 
            className={`block transition-colors duration-300 font-cabin font-medium py-3 px-4 rounded-md ${
              pathname === '/services' 
                ? 'text-[#04692F] bg-[#04692F]/20 border-l-4 border-[#04692F]' 
                : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Nos services
          </Link>
          <Link 
            href="/tarifs" 
            className={`block transition-colors duration-300 font-cabin font-medium py-3 px-4 rounded-md ${
              pathname === '/tarifs' 
                ? 'text-[#04692F] bg-[#04692F]/20 border-l-4 border-[#04692F]' 
                : 'text-white hover:text-[#04692F] hover:bg-[#04692F]/10'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Tarifs
          </Link>
          <div className="pt-4 border-t border-[#04692F]/30">
            <Button 
              asChild
              className="w-full bg-[#04692F] hover:bg-[#04692F]/90 text-white py-3 rounded-md font-cabin font-semibold transition-colors duration-300"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contactez-nous
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}