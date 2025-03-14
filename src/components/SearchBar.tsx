
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SearchBar = ({ className, isSticky = false }: { className?: string; isSticky?: boolean }) => {
  const [activeTab, setActiveTab] = useState('stays');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  const [showTravelAgent, setShowTravelAgent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > (heroHeight * 0.7) && !scrolled) {
        setScrolled(true);
      } else if (scrollPosition <= (heroHeight * 0.7) && scrolled) {
        setScrolled(false);
      }
    };

    if (isSticky) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (isSticky) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isSticky, scrolled]);

  return (
    <div className={cn(
      "bg-terracotta rounded-xl p-2 sm:p-3 max-w-4xl w-full mx-auto transition-all duration-300",
      scrolled ? "fixed top-4 left-0 right-0 z-40 shadow-lg" : "",
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        {/* Tabs and Travel Agent button in same row */}
        <div className="flex space-x-6">
          <button 
            onClick={() => setActiveTab('stays')}
            className={cn(
              "font-medium transition-colors duration-300 relative pb-1",
              activeTab === 'stays' 
                ? "text-italy-terracotta" 
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            Alloggi
            {activeTab === 'stays' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-italy-terracotta rounded-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('experiences')}
            className={cn(
              "font-medium transition-colors duration-300 relative pb-1",
              activeTab === 'experiences' 
                ? "text-italy-terracotta" 
                : "text-gray-500 hover:text-gray-800"
            )}
          >
            Esperienze
            {activeTab === 'experiences' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-italy-terracotta rounded-full" />
            )}
          </button>
        </div>
        
        <button
          onClick={() => setShowTravelAgent(!showTravelAgent)}
          className={cn(
            "text-sm flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors",
            showTravelAgent 
              ? "bg-italy-terracotta/10 text-italy-terracotta"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          <Users size={16} />
          {showTravelAgent ? 'Ricerca standard' : 'Consulta un agente locale'}
        </button>
      </div>

      {!showTravelAgent ? (
        /* Standard search fields */
        <div className="flex flex-col sm:flex-row sm:items-center sm:divide-x divide-gray-200">
          <div className="relative flex-1 p-2">
            <label htmlFor="destination" className="block text-xs text-gray-500 font-medium mb-1">Destinazione</label>
            <div className="flex items-center">
              <MapPin size={18} className="text-gray-400 mr-2" />
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Dove vuoi andare?"
                className="bg-transparent w-full outline-none text-gray-800"
              />
            </div>
          </div>

          <div className="relative flex-1 p-2">
            <label htmlFor="dates" className="block text-xs text-gray-500 font-medium mb-1">Date</label>
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-400 mr-2" />
              <input
                id="dates"
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="Aggiungi date"
                className="bg-transparent w-full outline-none text-gray-800"
              />
            </div>
          </div>

          <div className="relative flex-1 p-2">
            <label htmlFor="guests" className="block text-xs text-gray-500 font-medium mb-1">Ospiti</label>
            <div className="flex items-center">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                id="guests"
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Aggiungi ospiti"
                className="bg-transparent w-full outline-none text-gray-800"
              />
            </div>
          </div>

          <div className="p-2">
            <Button className="w-full sm:w-auto bg-italy-terracotta hover:bg-italy-terracotta/90 btn-effect rounded-full">
              <Search size={18} />
              <span className="ml-2 hidden sm:inline">Cerca</span>
            </Button>
          </div>
        </div>
      ) : (
        /* Travel agent consultation */
        <div className="bg-white/80 rounded-lg p-3 sm:p-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Consulta un esperto locale</h3>
          <p className="text-gray-600 text-sm">
            Raccontaci il viaggio che sogni, e un agente locale ti contatterà per crearlo su misura per te.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="region" className="block text-xs text-gray-500 font-medium mb-1">Regione d'Italia</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  id="region"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white"
                >
                  <option value="">Seleziona una regione</option>
                  <option value="toscana">Toscana</option>
                  <option value="campania">Campania</option>
                  <option value="sicilia">Sicilia</option>
                  <option value="veneto">Veneto</option>
                  <option value="lombardia">Lombardia</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="travelType" className="block text-xs text-gray-500 font-medium mb-1">Tipo di viaggio</label>
              <div className="relative">
                <Users size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select 
                  id="travelType"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white"
                >
                  <option value="">Seleziona un tipo</option>
                  <option value="coppia">Viaggio di coppia</option>
                  <option value="famiglia">Viaggio in famiglia</option>
                  <option value="amici">Viaggio con amici</option>
                  <option value="solo">Viaggio in solitaria</option>
                </select>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-italy-terracotta hover:bg-italy-terracotta/90 btn-effect mt-2">
            Trova il tuo agente locale
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
