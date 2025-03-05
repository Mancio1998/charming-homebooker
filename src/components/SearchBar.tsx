
import React, { useState } from 'react';
import { Search, MapPin, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SearchBar = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState('stays');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <div className={cn(
      "glass-effect rounded-full p-2 sm:p-4 max-w-4xl w-full mx-auto",
      className
    )}>
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-4">
        <button 
          onClick={() => setActiveTab('stays')}
          className={cn(
            "font-medium transition-colors duration-300 relative pb-2",
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
            "font-medium transition-colors duration-300 relative pb-2",
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

      {/* Search fields */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:divide-x divide-gray-200">
        <div className="relative flex-1 p-2 sm:p-4">
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

        <div className="relative flex-1 p-2 sm:p-4">
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

        <div className="relative flex-1 p-2 sm:p-4">
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

        <div className="p-2 sm:p-4">
          <Button className="w-full sm:w-auto bg-italy-terracotta hover:bg-italy-terracotta/90 btn-effect rounded-full">
            <Search size={18} />
            <span className="ml-2 hidden sm:inline">Cerca</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
