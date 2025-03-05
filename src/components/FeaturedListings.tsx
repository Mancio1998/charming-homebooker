
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const listings = [
  {
    id: 1,
    title: 'Villa con Vista sul Mare',
    location: 'Positano, Campania',
    image: 'https://images.unsplash.com/photo-1615529328331-f0b8c57a7e30?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    price: 320,
    rating: 4.92,
    reviews: 86
  },
  {
    id: 2,
    title: 'Casale Toscano con Piscina',
    location: 'Siena, Toscana',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    price: 220,
    rating: 4.85,
    reviews: 124
  },
  {
    id: 3,
    title: 'Loft Storico nel Centro',
    location: 'Firenze, Toscana',
    image: 'https://images.unsplash.com/photo-1594734415578-00fc9540929b?auto=format&fit=crop&q=80&w=2050&ixlib=rb-4.0.3',
    price: 185,
    rating: 4.78,
    reviews: 94
  },
  {
    id: 4,
    title: 'Appartamento Vista Duomo',
    location: 'Milano, Lombardia',
    image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    price: 240,
    rating: 4.9,
    reviews: 76
  },
  {
    id: 5,
    title: 'Casa Tipica nei Trulli',
    location: 'Alberobello, Puglia',
    image: 'https://images.unsplash.com/photo-1620661664526-67b96354d7fd?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3',
    price: 150,
    rating: 4.95,
    reviews: 58
  },
  {
    id: 6,
    title: 'Chalet Alpino con Spa',
    location: 'Cortina d\'Ampezzo, Veneto',
    image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3',
    price: 380,
    rating: 4.88,
    reviews: 42
  },
  {
    id: 7,
    title: 'Tenuta in Campagna',
    location: 'Montalcino, Toscana',
    image: 'https://images.unsplash.com/photo-1542928658-22251e208ac1?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3',
    price: 195,
    rating: 4.8,
    reviews: 62
  },
  {
    id: 8,
    title: 'Attico Vista Basilica',
    location: 'Roma, Lazio',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    price: 270,
    rating: 4.93,
    reviews: 103
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FeaturedListings = () => {
  return (
    <section id="accommodations" className="py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-italy-terracotta font-medium mb-2">Alloggi</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Soggiorna in luoghi straordinari</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Le migliori sistemazioni in tutta Italia, selezionate per offrire un'esperienza autentica e indimenticabile.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {listings.map((listing) => (
            <motion.div key={listing.id} variants={item}>
              <div className="group h-full rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button 
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300 z-10"
                    aria-label="Save to favorites"
                  >
                    <Heart size={18} className="text-gray-700" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg line-clamp-1">{listing.title}</h3>
                    <div className="flex items-center">
                      <Star size={16} className="text-italy-terracotta fill-italy-terracotta mr-1" />
                      <span className="font-medium">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-3">{listing.location}</p>
                  <p className="font-medium">
                    <span className="text-lg">€{listing.price}</span> <span className="text-gray-500">/ notte</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a 
            href="#" 
            className={cn(
              "inline-block font-medium text-italy-terracotta hover:text-italy-terracotta/80 transition-colors duration-300",
              "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-italy-terracotta",
              "after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            )}
          >
            Visualizza tutti gli alloggi
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
