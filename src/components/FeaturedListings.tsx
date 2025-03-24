
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const listings = [
  {
    id: 1,
    title: 'Villa con Vista sul Mare',
    location: 'Positano, Campania',
    image: 'https://www.amorerentals.com/it/affitti/fotos/2/160958411985622ebfa96b1047ad733624f12a8170/1609584121904f5bd9f4647dfc23b33fea6cbc6c69.jpg',
    price: 320,
    rating: 4.92,
    reviews: 86
  },
  {
    id: 2,
    title: 'Casale Toscano con Piscina',
    location: 'Siena, Toscana',
    image: 'https://wips.plug.it/cips/paginegialle.it/magazine/cms/2019/07/migliori-agriturismi-toscana.jpg',
    price: 220,
    rating: 4.85,
    reviews: 124
  },
  {
    id: 3,
    title: 'Loft Storico nel Centro',
    location: 'Firenze, Toscana',
    image: 'https://images.trvl-media.com/lodging/24000000/23080000/23079500/23079426/47a43258.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    price: 185,
    rating: 4.78,
    reviews: 94
  },
  {
    id: 4,
    title: 'Appartamento Vista Duomo',
    location: 'Milano, Lombardia',
    image: 'https://x3jh6o6w.cdn.imgeng.in/assets/uploads/Starhotels-Collezione/Rosa_Grand/duomo-luxury-apartments/duomo-luxury-apartments-milano-duomo-terrace-penthouse-691-27.jpg?imgeng=/w_1440',
    price: 240,
    rating: 4.9,
    reviews: 76
  },
  {
    id: 5,
    title: 'Casa Tipica nei Trulli',
    location: 'Alberobello, Puglia',
    image: 'https://tourismmedia.italia.it/is/image/mitur/20210526141657-enit-alberobello-puglia-4?wid=800&hei=500&fit=constrain,1&fmt=webp',
    price: 150,
    rating: 4.95,
    reviews: 58
  },
  {
    id: 6,
    title: 'Chalet Alpino con Spa',
    location: 'Cortina d\'Ampezzo, Veneto',
    image: 'https://www.foodandwineitalia.com/wp-content/uploads/2023/01/Hotel-de-Len-ph.-Ben-Schott-.jpg',
    price: 380,
    rating: 4.88,
    reviews: 42
  },
  {
    id: 7,
    title: 'Tenuta in Campagna',
    location: 'Montalcino, Toscana',
    image: 'https://cdn0.matrimonio.com/vendor/8084/3_2/640/jpg/179_2_158084.jpeg',
    price: 195,
    rating: 4.8,
    reviews: 62
  },
  {
    id: 8,
    title: 'Attico Vista Basilica',
    location: 'Roma, Lazio',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/512911988.jpg?k=8681fb4445fcb2aa01b3cf5339d9e5e27ae11f5fceb89d30282639ffdde84ca0&o=&hp=1',
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
              {listing.id === 1 ? (
                <Link to={`/villa/${listing.id}`} className="block h-full">
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
                </Link>
              ) : (
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
              )}
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
