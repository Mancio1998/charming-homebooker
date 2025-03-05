
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import FeaturedListings from '@/components/FeaturedListings';
import TravelAgents from '@/components/TravelAgents';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <Hero />
      
      <motion.section
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: 50 }
        }}
        className="py-12 sm:py-20"
      >
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <span className="inline-block text-italy-terracotta font-medium mb-2">L'Italia come non l'hai mai vista</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Esperienze autentiche in luoghi straordinari</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            CharmingItaly ti offre una selezione esclusiva di alloggi e esperienze che raccontano l'autentica essenza italiana:
            dalla costa alle montagne, dalle città d'arte ai borghi nascosti.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-italy-cream rounded-full flex items-center justify-center text-italy-terracotta mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Alloggi Unici</h3>
              <p className="text-gray-600">
                Dalle ville con vista sul mare ai casali in campagna, scopri sistemazioni autentiche e di carattere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-italy-cream rounded-full flex items-center justify-center text-italy-terracotta mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Destinazioni Esclusive</h3>
              <p className="text-gray-600">
                Esplora città d'arte, villaggi costieri e campagne idilliache selezionate dai nostri esperti locali.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-italy-cream rounded-full flex items-center justify-center text-italy-terracotta mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.38a48.474 48.474 0 0 0-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Esperienze Autentiche</h3>
              <p className="text-gray-600">
                Lezioni di cucina, degustazioni di vino e tour guidati per vivere l'Italia come un vero locale.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <Destinations />
      
      {/* Add Travel Agents section before experiences */}
      <TravelAgents />
      
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1605216663480-b5266c18e9c7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')", 
          }}
        />
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-xl shadow-sm">
            <span className="inline-block text-italy-terracotta font-medium mb-2">Esperienze</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vivi l'Italia autentica</h2>
            <p className="text-gray-600 mb-8">
              Scopri attività uniche guidate da esperti locali, dai corsi di cucina tradizionale alle escursioni in barca lungo la costa.
            </p>
            <a 
              href="#" 
              className="inline-block bg-italy-terracotta text-white px-6 py-3 rounded-full font-medium hover:bg-italy-terracotta/90 transition-all duration-300 btn-effect"
            >
              Esplora le esperienze
            </a>
          </div>
        </div>
      </section>
      
      <FeaturedListings />
      
      {/* Add Testimonials */}
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Index;
