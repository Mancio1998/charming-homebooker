import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Search, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        "bg-white shadow-md py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://prod-cdn.charmingitaly.com/_nuxt/img/logo.97170d3.svg" 
              alt="Charming Italy"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#destinations" 
            className="text-black font-medium transition-colors duration-300 hover:text-italy-terracotta"
          >
            Destinazioni
          </a>
          <a 
            href="#experiences" 
            className="text-black font-medium transition-colors duration-300 hover:text-italy-terracotta"
          >
            Esperienze
          </a>
          <a 
            href="#accommodations" 
            className="text-black font-medium transition-colors duration-300 hover:text-italy-terracotta"
          >
            Alloggi
          </a>
          <a 
            href="#blog" 
            className="text-black font-medium transition-colors duration-300 hover:text-italy-terracotta"
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="text-black font-medium transition-colors duration-300 hover:text-italy-terracotta"
          >
            Contatta i nostri esperti
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-black hover:bg-gray-200 rounded-full transition-colors duration-300"
          >
            <Globe size={18} className="mr-1" />
            <span>IT</span>
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-black border-gray-300 hover:bg-gray-100 rounded-full border transition-colors duration-300"
          >
            <User size={18} className="mr-2" />
            <span>Accedi</span>
          </Button>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full transition-colors duration-300 text-black"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-slide-down">
          <div className="px-6 py-4 space-y-3">
            <a 
              href="#destinations" 
              className="block py-2 font-medium text-gray-800 hover:text-italy-terracotta"
            >
              Destinazioni
            </a>
            <a 
              href="#experiences" 
              className="block py-2 font-medium text-gray-800 hover:text-italy-terracotta"
            >
              Esperienze
            </a>
            <a 
              href="#accommodations" 
              className="block py-2 font-medium text-gray-800 hover:text-italy-terracotta"
            >
              Alloggi
            </a>
            <a 
              href="#blog" 
              className="block py-2 font-medium text-gray-800 hover:text-italy-terracotta"
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="block py-2 font-medium text-gray-800 hover:text-italy-terracotta"
            >
              Contatta i nostri esperti
            </a>
            <Separator />
            <div className="flex items-center justify-between py-2">
              <span className="font-medium text-gray-800">Lingua</span>
              <Button variant="ghost" size="sm" className="text-gray-800">
                <Globe size={18} className="mr-1" />
                <span>IT</span>
              </Button>
            </div>
            <Button className="w-full bg-italy-terracotta hover:bg-italy-terracotta/90">
              <User size={18} className="mr-2" />
              <span>Accedi</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
