
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
};

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const VillaDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // Normally we would fetch data based on the ID, but for now we'll use our hardcoded data
  const villa = villaData;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
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
              <h2 className="text-2xl font-bold mb-2">Villa ospitata da {villa.host}</h2>
              <div className="text-gray-600">
                {villa.guests} ospiti · {villa.bedrooms} camere · {villa.beds} letti · {villa.baths} bagni
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
              {villa.host.charAt(0)}
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Home size={24} className="text-gray-700" />
                <div>
                  <div className="font-medium">Villa intera</div>
                  <div className="text-gray-600 text-sm">Avrai la struttura a tuo disposizione</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Award size={24} className="text-gray-700" />
                <div>
                  <div className="font-medium">Host esperto</div>
                  <div className="text-gray-600 text-sm">Host dal {villa.hostSince}</div>
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

            <div className="mb-6">
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
                <div className="flex justify-between">
                  <span className="underline">Costi di pulizia</span>
                  <span>€120</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Tassa di soggiorno</span>
                  <span>€45</span>
                </div>
                <div className="flex justify-between font-bold pt-4 border-t">
                  <span>Totale</span>
                  <span>€{villa.price * 7 + 120 + 45}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VillaDetail;
