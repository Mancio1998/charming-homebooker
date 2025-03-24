
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, MapPin, Award, Users, Calendar, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import Navigation from '@/components/Navigation';

const villaData = {
  id: 1,
  title: 'Villa con Vista sul Mare',
  location: 'Positano, Campania',
  host: 'Marco',
  hostSince: '2018',
  description: 'Goditi una vista mozzafiato sul mare da questa splendida villa situata sulla costiera amalfitana. Questa proprietà di lusso offre un\'esperienza unica con terrazze panoramiche, piscina privata e interni eleganti che combinano il design tradizionale italiano con comfort moderni.',
  price: 320,
  rating: 4.92,
  reviews: 86,
  guests: 6,
  bedrooms: 3,
  beds: 4,
  baths: 2,
  amenities: [
    'Vista mare',
    'Piscina privata',
    'Wi-Fi gratuito',
    'Cucina completa',
    'Aria condizionata',
    'Terrazza panoramica',
    'Parcheggio gratuito',
    'Colazione inclusa'
  ],
  images: [
    'https://www.amorerentals.com/it/affitti/fotos/2/160958411985622ebfa96b1047ad733624f12a8170/1609584121904f5bd9f4647dfc23b33fea6cbc6c69.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/281913910.jpg?k=de7c7a26aab5121ced62a2b58955fd296f02e6c3cfe6b9382a789aab36a213d5&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/281913927.jpg?k=c450cda25eebd44040e782091c4b106c34fb54fca73de4e8d03da6c14b2e98a6&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/281913913.jpg?k=26d67b73ced273dedefc9a143e5982038f1371e94595653f7483e6817b95219f&o=&hp=1'
  ],
  nearbyAttractions: [
    {
      title: 'Spiaggia di Positano',
      description: 'Una delle spiagge più iconiche d\'Italia, con acque cristalline e vista sulla città colorata.',
      distance: '5 minuti a piedi'
    },
    {
      title: 'Sentiero degli Dei',
      description: 'Un sentiero escursionistico che offre panorami mozzafiato sulla costiera amalfitana.',
      distance: '15 minuti in auto'
    },
    {
      title: 'Grotta dello Smeraldo',
      description: 'Una grotta marina con acqua verde smeraldo creata da riflessi di luce naturale.',
      distance: '25 minuti in auto'
    },
    {
      title: 'Ravello',
      description: 'Elegante cittadina collinare famosa per i suoi giardini panoramici e concerti estivi.',
      distance: '40 minuti in auto'
    }
  ],
  unavailableDates: [
    new Date(2025, 5, 15),
    new Date(2025, 5, 16),
    new Date(2025, 5, 17),
    new Date(2025, 5, 25),
    new Date(2025, 5, 26),
    new Date(2025, 5, 27),
    new Date(2025, 6, 4),
    new Date(2025, 6, 5),
    new Date(2025, 6, 6),
    new Date(2025, 6, 7),
    new Date(2025, 6, 8),
    new Date(2025, 6, 20),
    new Date(2025, 6, 21),
    new Date(2025, 7, 1),
    new Date(2025, 7, 2),
    new Date(2025, 7, 3),
    new Date(2025, 7, 10),
    new Date(2025, 7, 11),
    new Date(2025, 7, 12),
  ]
};

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const VillaDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date | undefined>(new Date(2025, 5, 23));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(2025, 5, 30));

  // Normally we would fetch data based on the ID, but for now we'll use our hardcoded data
  const villa = villaData;

  // Function to determine if a date is unavailable
  const isDateUnavailable = (date: Date) => {
    return villa.unavailableDates.some(unavailableDate => 
      date.getDate() === unavailableDate.getDate() && 
      date.getMonth() === unavailableDate.getMonth() && 
      date.getFullYear() === unavailableDate.getFullYear()
    );
  };

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-7xl mt-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold mb-2">{villa.title}</h1>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star size={18} className="text-italy-terracotta fill-italy-terracotta mr-1" />
                <span className="font-medium">{villa.rating}</span>
                <span className="mx-1">·</span>
                <span className="text-gray-600 underline">{villa.reviews} recensioni</span>
              </div>
              <span className="mx-1">·</span>
              <div className="flex items-center">
                <MapPin size={18} className="text-gray-600 mr-1" />
                <span className="text-gray-600 underline">{villa.location}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center gap-1 text-gray-600 hover:text-italy-terracotta transition-colors duration-300"
            >
              <Heart size={18} className={isFavorite ? "fill-italy-terracotta text-italy-terracotta" : ""} />
              <span className="underline">Salva</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {villa.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl aspect-[4/3]">
                      <img
                        src={image}
                        alt={`Villa image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="col-span-2"
          >
            <div className="flex justify-between items-start border-b pb-6 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Villa con {villa.bedrooms} camere</h2>
                <div className="text-gray-600">
                  {villa.guests} ospiti · {villa.bedrooms} camere · {villa.beds} letti · {villa.baths} bagni
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <Home size={24} className="text-gray-700" />
                  <div>
                    <div className="font-medium">Villa intera</div>
                    <div className="text-gray-600 text-sm">Avrai la struttura a tua disposizione</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award size={24} className="text-gray-700" />
                  <div>
                    <div className="font-medium">Selected by Charming</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={24} className="text-gray-700" />
                  <div>
                    <div className="font-medium">Ottima posizione</div>
                    <div className="text-gray-600 text-sm">Vista mare spettacolare</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{villa.description}</p>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Cosa troverai</h3>
                <div className="grid grid-cols-2 gap-3">
                  {villa.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-italy-terracotta rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Da vedere nei dintorni</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {villa.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-1">{attraction.title}</h4>
                      <p className="text-gray-600 mb-2 text-sm">{attraction.description}</p>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className="text-italy-terracotta mr-1" />
                        <span>{attraction.distance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-xl">€{villa.price} <span className="text-gray-500 font-normal">notte</span></span>
                  <div className="flex items-center text-sm">
                    <Star size={16} className="text-italy-terracotta fill-italy-terracotta mr-1" />
                    <span>{villa.rating}</span>
                    <span className="mx-1">·</span>
                    <span className="text-gray-600 underline">{villa.reviews} recensioni</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="dates" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="dates">Date</TabsTrigger>
                    <TabsTrigger value="guests">Ospiti</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dates" className="space-y-4">
                    <div className="grid grid-cols-2 border rounded-lg overflow-hidden">
                      <div className="p-3 border-r">
                        <div className="text-xs font-medium">CHECK-IN</div>
                        <div>23/06/2025</div>
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-medium">CHECK-OUT</div>
                        <div>30/06/2025</div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-3">
                      <CalendarComponent
                        mode="range"
                        selected={{ from: selectedDates, to: endDate }}
                        onSelect={(range) => {
                          if (range) {
                            setSelectedDates(range.from);
                            setEndDate(range.to);
                          }
                        }}
                        defaultMonth={new Date(2025, 5)}
                        className="p-3 pointer-events-auto"
                        modifiers={{
                          unavailable: villa.unavailableDates,
                        }}
                        modifiersStyles={{
                          unavailable: { backgroundColor: "rgba(255, 0, 0, 0.1)" }
                        }}
                        disabled={isDateUnavailable}
                      />
                      <div className="flex items-center mt-3 text-xs">
                        <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
                        <span className="text-gray-600">Date non disponibili</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="guests" className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Ospiti</div>
                          <div className="text-gray-600 text-sm">Aggiungi ospiti</div>
                        </div>
                        <Users size={20} className="text-gray-600" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <button className="w-full bg-italy-terracotta hover:bg-italy-terracotta/90 text-white py-3 rounded-lg font-medium mt-4 transition-colors duration-300">
                  Prenota
                </button>

                <div className="mt-4 text-center text-gray-500 text-sm">
                  Non ti verrà addebitato nulla in questa fase
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">€{villa.price} x 7 notti</span>
                    <span>€{villa.price * 7}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t">
                    <span>Totale</span>
                    <span>€{villa.price * 7}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VillaDetail;
