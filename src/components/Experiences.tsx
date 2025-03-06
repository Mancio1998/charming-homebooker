
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Camera, Utensils, Map, Users, Star, Wine, Mountain, Bike } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Tour fotografico di Venezia all'alba",
    category: "Fotografia",
    price: 49,
    rating: 4.96,
    reviews: 354,
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Venezia",
    icon: <Camera className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Corso di cucina tradizionale toscana",
    category: "Gastronomia",
    price: 65,
    rating: 4.98,
    reviews: 487,
    image: "https://images.unsplash.com/photo-1605216663480-b5266c18e9c7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Firenze",
    icon: <Utensils className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Degustazione di vini in una cantina storica",
    category: "Enogastronomia",
    price: 55,
    rating: 4.92,
    reviews: 216,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Montalcino",
    icon: <Wine className="w-4 h-4" />
  },
  {
    id: 4,
    title: "Trekking sulle Dolomiti con guida alpina",
    category: "Avventura",
    price: 72,
    rating: 4.95,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Cortina d'Ampezzo",
    icon: <Mountain className="w-4 h-4" />
  },
  {
    id: 5,
    title: "Tour in bicicletta nella campagna umbra",
    category: "Sport",
    price: 45,
    rating: 4.89,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Assisi",
    icon: <Bike className="w-4 h-4" />
  },
  {
    id: 6,
    title: "Visita guidata a Pompei con archeologo",
    category: "Storia",
    price: 39,
    rating: 4.94,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Napoli",
    icon: <Map className="w-4 h-4" />
  }
];

const categories = [
  { name: "Gastronomia", icon: <Utensils className="w-5 h-5" /> },
  { name: "Avventura", icon: <Mountain className="w-5 h-5" /> },
  { name: "Fotografia", icon: <Camera className="w-5 h-5" /> },
  { name: "Vino", icon: <Wine className="w-5 h-5" /> },
  { name: "Sport", icon: <Bike className="w-5 h-5" /> },
  { name: "Cultura", icon: <Map className="w-5 h-5" /> }
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

const Experiences = () => {
  return (
    <section id="experiences" className="py-16 sm:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-italy-terracotta font-medium mb-2">Esperienze</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Esplora l'Italia come un locale</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri esperienze uniche e straordinarie guidate da esperti locali in tutta Italia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <a 
              key={index}
              href="#" 
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg px-6 py-3 hover:shadow-md transition-all duration-300"
            >
              <div className="text-italy-terracotta mb-2">
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </a>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((experience) => (
            <motion.div 
              key={experience.id} 
              variants={item}
              className="group"
            >
              <a href="#" className="block h-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg bg-white">
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-white rounded-full px-3 py-1 text-xs font-medium">
                      {experience.icon}
                      {experience.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <Map size={14} />
                    <span>{experience.location}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{experience.title}</h3>
                  <p className="text-italy-terracotta font-medium mb-2">
                    Da €{experience.price} / persona
                  </p>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-italy-terracotta text-italy-terracotta" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="text-gray-500">({experience.reviews})</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a
            href="/esperienze"
            className={cn(
              "inline-block font-medium text-italy-terracotta hover:text-italy-terracotta/80 transition-colors duration-300 text-[18px]",
              "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-italy-terracotta",
              "after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
            )}
          >
            Visualizza tutte le esperienze
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
