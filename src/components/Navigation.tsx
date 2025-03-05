
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Search, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        {
          "bg-white shadow-md py-3": isScrolled,
          "bg-transparent": !isScrolled
        }
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className={cn(
                "text-2xl font-bold font-playfair transition-colors duration-300",
                {"text-black": isScrolled, "text-white": !isScrolled}
              )}>
                Charming<span className="text-italy-terracotta">Italy</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#destinations" 
              className={cn(
                "font-medium transition-colors duration-300 hover:text-italy-terracotta",
                {"text-black": isScrolled, "text-white": !isScrolled}
              )}
            >
              Destinazioni
            </a>
            <a 
              href="#experiences" 
              className={cn(
                "font-medium transition-colors duration-300 hover:text-italy-terracotta",
                {"text-black": isScrolled, "text-white": !isScrolled}
              )}
            >
              Esperienze
            </a>
            <a 
              href="#accommodations" 
              className={cn(
                "font-medium transition-colors duration-300 hover:text-italy-terracotta",
                {"text-black": isScrolled, "text-white": !isScrolled}
              )}
            >
              Alloggi
            </a>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "rounded-full transition-colors duration-300 hover:bg-opacity-10",
                {
                  "text-black hover:bg-gray-200": isScrolled, 
                  "text-white hover:bg-white": !isScrolled
                }
              )}
            >
              <Globe size={18} className="mr-1" />
              <span>IT</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className={cn(
                "rounded-full border transition-colors duration-300",
                {
                  "text-black border-gray-300 hover:bg-gray-100": isScrolled, 
                  "text-white border-white hover:bg-white hover:bg-opacity-10": !isScrolled
                }
              )}
            >
              <User size={18} className="mr-2" />
              <span>Accedi</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-full transition-colors duration-300",
              {
                "text-black": isScrolled, 
                "text-white": !isScrolled
              }
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
