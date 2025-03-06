
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, MessageSquare, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const agentProfiles = [
  {
    id: 1,
    name: 'Giulia Rossi',
    region: 'Toscana',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3',
    rating: 4.9,
    reviews: 132,
    specialty: 'Turismo enogastronomico & Percorsi artistici'
  },
  {
    id: 2,
    name: 'Marco Bianchi',
    region: 'Costiera Amalfitana',
    image: 'https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg',
    rating: 4.8,
    reviews: 98,
    specialty: 'Viaggi costieri & Escursioni in barca'
  },
  {
    id: 3,
    name: 'Sofia Marino',
    region: 'Sicilia',
    image: 'https://media.istockphoto.com/id/1425797951/photo/portrait-of-beautiful-smiling-woman.jpg?s=612x612&w=0&k=20&c=0sidrZq-l5JdwBL1KWib4dbaNkg6wS3Juaa0FYUhg9E=',
    rating: 4.9,
    reviews: 156,
    specialty: 'Storia locale & Tradizioni culturali'
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

const TravelAgents = () => {
  return (
    <section id="agents" className="py-16 sm:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div className="md:max-w-2xl">
            <span className="inline-flex items-center gap-2 text-italy-terracotta font-medium mb-2">
              <Users size={18} className="text-italy-terracotta" />
              Agenzie di Viaggio Locali
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Il tuo viaggio curato da esperti italiani</h2>
            <p className="text-gray-600">
              Con CharmingItaly, il tuo viaggio è progettato da chi conosce ogni angolo dell'Italia. 
              I nostri agenti locali creano itinerari personalizzati, accesso a luoghi esclusivi e consigli autentici.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="#" 
              className="inline-block bg-transparent border-2 border-italy-terracotta text-italy-terracotta px-6 py-3 rounded-full font-medium hover:bg-italy-terracotta hover:text-white transition-all duration-300 btn-effect"
            >
              Tutti gli agenti
            </a>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {agentProfiles.map((agent) => (
            <motion.div key={agent.id} variants={item}>
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="relative">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-1 text-white">
                      <MapPin size={16} className="text-italy-terracotta" />
                      <span className="text-sm font-medium">{agent.region}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-italy-terracotta fill-italy-terracotta" />
                      <span className="font-medium">{agent.rating}</span>
                      <span className="text-gray-500 text-sm">({agent.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{agent.specialty}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      Itinerari personalizzati
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      Supporto locale
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      Parla italiano/inglese
                    </span>
                  </div>
                  
                  <a 
                    href="#" 
                    className={cn(
                      "flex items-center justify-center w-full gap-2 py-2.5 mt-2 border-2 border-italy-terracotta text-italy-terracotta rounded-lg font-medium transition-all duration-300",
                      "hover:bg-italy-terracotta hover:text-white"
                    )}
                  >
                    <MessageSquare size={18} />
                    Contatta {agent.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 p-8 bg-italy-cream rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Users size={32} className="text-italy-terracotta" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Diventa un agente locale CharmingItaly</h3>
              <p className="text-gray-600 mb-4">
                Sei un esperto locale o un'agenzia di viaggi specializzata in una regione italiana? 
                Unisciti alla nostra rete di agenti e condividi la tua conoscenza con viaggiatori da tutto il mondo.
              </p>
              <a 
                href="#" 
                className="inline-block text-italy-terracotta font-medium hover:underline"
              >
                Scopri di più sulla partnership →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAgents;
