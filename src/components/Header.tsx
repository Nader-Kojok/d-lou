import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-10 bg-[#1E1E1E] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg">
            <Image 
              src="/DLOU_logo_transparent.png" 
              alt="D-LOU Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
          </div>
          <div className="transition-transform duration-300 hover:translate-x-1">
            <h1 className="text-2xl font-bold font-poppins transition-colors duration-300 hover:text-[#04692F]">D-LOU</h1>
            <p className="text-sm text-gray-300 font-cabin transition-colors duration-300 hover:text-white">Legal consulting</p>
          </div>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-white hover:text-[#04692F] transition-all duration-300 font-cabin font-medium cursor-pointer relative group">
                  <span className="relative z-10">Accueil</span>
                  <span className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-white hover:text-[#04692F] transition-all duration-300 font-cabin font-medium cursor-pointer relative group">
                  <span className="relative z-10">À Propos</span>
                  <span className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className="text-white hover:text-[#04692F] transition-all duration-300 font-cabin font-medium cursor-pointer relative group">
                  <span className="relative z-10">Nos services</span>
                  <span className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/tarifs" className="text-white hover:text-[#04692F] transition-all duration-300 font-cabin font-medium cursor-pointer relative group">
                  <span className="relative z-10">Tarifs</span>
                  <span className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button className="bg-[#04692F] hover:bg-[#04692F]/90 text-white px-6 py-2 rounded-md font-cabin font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
          Contactez-nous
        </Button>
      </div>
    </header>
  );
}