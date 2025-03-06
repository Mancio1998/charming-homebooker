
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const destinations = [
  {
    id: 1,
    name: 'Toscana',
    image: 'https://www.voglioviverecosi.com/wp-content/uploads/2021/01/andare-a-vivere-in-toscana.jpg',
    properties: 458
  },
  {
    id: 2,
    name: 'Costiera Amalfitana',
    image: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2024/05/costiera-amalfitana.jpg?v=1715186644',
    properties: 267
  },
  {
    id: 3,
    name: 'Venezia',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    properties: 324
  },
  {
    id: 4,
    name: 'Sicilia',
    image: 'https://images.unsplash.com/photo-1523365280197-dbf36f767778?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    properties: 389
  },
  {
    id: 5,
    name: 'Lago di Como',
    image: 'https://images.unsplash.com/photo-1583648870855-1bed8c439a1e?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3',
    properties: 156
  },
  {
    id: 6,
    name: 'Cinque Terre',
    image: 'https://images.unsplash.com/photo-1591804206650-1e83dae3efd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    properties: 113
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Destinations = () => {
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-italy-cream">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-italy-terracotta font-medium mb-2">Destinazioni</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Luoghi iconici in Italia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri le destinazioni più affascinanti d'Italia, dai paesaggi toscani alle coste mediterranee.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination) => (
            <motion.div 
              key={destination.id} 
              variants={item}
              className="group"
            >
              <a href="#" className="block h-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative h-72 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 z-20 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-white/80">{destination.properties} proprietà</p>
                  </div>
                </div>
              </a>
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
            Visualizza tutte le destinazioni
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
