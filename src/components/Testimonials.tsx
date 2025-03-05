
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    author: 'Francesca M.',
    location: 'Milano',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3',
    text: 'Il nostro tour della Toscana è stato perfetto grazie a Giulia. Ha organizzato delle degustazioni in cantine esclusive che non avremmo mai scoperto da soli.',
    rating: 5,
    agent: 'Giulia Rossi',
    trip: 'Tour enogastronomico in Toscana'
  },
  {
    id: 2,
    author: 'Roberto e Carla',
    location: 'Torino',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3',
    text: 'Marco ci ha fatto vivere la costiera amalfitana come veri locali. Ci ha suggerito ristoranti incredibili e organizzato un tour in barca indimenticabile.',
    rating: 5,
    agent: 'Marco Bianchi',
    trip: 'Vacanza in Costiera Amalfitana'
  },
  {
    id: 3,
    author: 'Famiglia Ricci',
    location: 'Roma',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3',
    text: 'Sofia ha reso il nostro viaggio in Sicilia speciale. I bambini hanno adorato i laboratori di ceramica e le storie sui miti locali che ha organizzato per noi.',
    rating: 5,
    agent: 'Sofia Marino',
    trip: 'Itinerario familiare in Sicilia'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-italy-cream/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-italy-terracotta font-medium mb-2">
            <Star size={18} className="fill-italy-terracotta text-italy-terracotta" />
            Esperienze dei Viaggiatori
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Cosa dicono i nostri clienti</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri le esperienze autentiche vissute dai viaggiatori che hanno scelto i nostri agenti locali per organizzare il loro viaggio in Italia.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={item}>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 flex-grow">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-italy-terracotta fill-italy-terracotta" />
                    ))}
                  </div>
                  <Quote size={24} className="text-italy-terracotta/20 mb-2" />
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Viaggio: </span>
                    {testimonial.trip}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Organizzato da: </span>
                    {testimonial.agent}
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block text-italy-terracotta font-medium hover:underline"
          >
            Leggi tutte le recensioni →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
