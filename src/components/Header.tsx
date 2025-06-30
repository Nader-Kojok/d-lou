import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="relative z-10 bg-[#1E1E1E] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#04692F] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-poppins">DL</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold font-poppins">D-LOU</h1>
            <p className="text-sm text-gray-300 font-cabin">Legal consulting</p>
          </div>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-[#04692F] transition-colors font-cabin font-medium">
                Accueil
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-[#04692F] transition-colors font-cabin font-medium">
                À Propos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-[#04692F] transition-colors font-cabin font-medium">
                Nos services
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button className="bg-[#04692F] hover:bg-[#04692F]/90 text-white px-6 py-2 rounded-md font-cabin font-semibold">
          Contactez-nous
        </Button>
      </div>
    </header>
  );
}