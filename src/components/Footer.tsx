
import React from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">CharmingItaly</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Chi siamo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Lavora con noi</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contattaci</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Dicono di noi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Ospiti</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Come funziona</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Centro assistenza</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Cancellazione</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Opzioni di pagamento</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Host</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Diventa host</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Responsabilità</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Strumenti host</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Community host</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Iscriviti alla newsletter</h3>
            <p className="text-gray-600 mb-4">Ricevi offerte esclusive e aggiornamenti sulle destinazioni più belle d'Italia.</p>
            <div className="flex space-x-2 mb-6">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-italy-terracotta focus:border-transparent transition-all duration-300"
              />
              <Button className="bg-italy-terracotta hover:bg-italy-terracotta/90">
                Iscriviti
              </Button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-italy-terracotta transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-italy-terracotta transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-italy-terracotta transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CharmingItaly. Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Termini</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Cookie</a>
            <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
              <Globe size={16} className="mr-1" />
              <span>Italiano (IT)</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
