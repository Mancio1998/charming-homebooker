
import React from 'react';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter-grayscale"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2066&ixlib=rb-4.0.3')", 
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Scopri la Bellezza Autentica dell'Italia
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-white font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Alloggi unici, esperienze straordinarie e luoghi indimenticabili
          </motion.p>
        </div>

        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
