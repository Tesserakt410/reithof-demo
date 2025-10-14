import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Verladetraining 2025',
    description: 'Mit kompetenter Anleitung von Janina Lederer',
    image: '/Archiv Bilder/verladetraining-2025.jpg',
    year: '2025',
  },
  {
    id: 2,
    title: 'Dreikönigs-Turnier 2025',
    description: 'Mit tollen Fotos von Volker Liebig',
    image: '/Archiv Bilder/dreikoenig-2025.jpg',
    year: '2025',
  },
  {
    id: 3,
    title: 'Fasching 2023',
    description: 'Faschingsreiten super organisiert von Conny',
    image: '/Archiv Bilder/fasching-2023.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'Dreikönigs-Turnier 2023',
    description: 'Mit Bildern von Luca Weith',
    image: '/Archiv Bilder/dreikoenig-2023.jpg',
    year: '2023',
  },
  {
    id: 5,
    title: 'Weihnachtsreiten 2022',
    description: 'Mit Bildern von Doris Frank-Schneider',
    image: '/Archiv Bilder/weihnachten2022.jpg',
    year: '2022',
  },
  {
    id: 6,
    title: 'Reitabzeichen 2022',
    description: 'Nach zwei Jahren Corona-Pause endlich wieder!',
    image: '/Archiv Bilder/raz2022.jpg',
    year: '2022',
  },
  {
    id: 7,
    title: 'Reitwegpflege 2021/2022',
    description: 'Die Pandemie-Zeit haben wir für die Reitwegpflege genutzt',
    image: '/Archiv Bilder/reitweg-pflege-2021.jpg',
    year: '2021',
  },
  {
    id: 8,
    title: 'Fasching 2020',
    description: '',
    image: '/Archiv Bilder/fasching-2020.jpg',
    year: '2020',
  },
  {
    id: 9,
    title: 'Weihnachtsreiten 2019',
    description: 'Tolle Bilder von Doris Frank-Schneider',
    image: '/Archiv Bilder/weihnachten-2019.jpg',
    year: '2019',
  },
  {
    id: 10,
    title: 'Musikreiten Februar 2019',
    description: 'Tolle Bilder von Sanya Schreiner',
    image: '/Archiv Bilder/musikreiten2019.jpg',
    year: '2019',
  },
  {
    id: 11,
    title: 'Fasching 2018',
    description: 'Mit wunderbar knusprigen Schäufele vom Partyservice Feinkostmetzgerei Mai',
    image: '/Archiv Bilder/fasching2018.jpg',
    year: '2018',
  },
  {
    id: 12,
    title: 'Weihnachtsreiten 2017',
    description: 'Mit großer Quadrille, beeindruckendem Freispringen, herrlichem Ponyfreilauf und springenden Weihnachtsmännern!',
    image: '/Archiv Bilder/weihnachten-2017.jpg',
    year: '2017',
  },
  {
    id: 13,
    title: 'Orientierungsritt Juli 2017',
    description: 'Einmal rund um den Flughafen Nürnberg. Erster Preis war eine Ballonfahrt gesponsort vom Flughafen!',
    image: '/Archiv Bilder/orientierungsritt2017.jpg',
    year: '2017',
  },
  {
    id: 14,
    title: 'Arbeitsdienst April 2017',
    description: 'Mit Nicols tollem Kärcher!!!',
    image: '/Archiv Bilder/arbeitsdienst2017.jpg',
    year: '2017',
  },
  {
    id: 15,
    title: 'Erste-Hilfe-Kurs März 2017',
    description: 'Erstmals fand ein solcher Kurs beim RCM statt. Nun wissen wir was im Notfall zu tun ist! Vielen Dank an Anja von den Johannitern!',
    image: '/Archiv Bilder/erste-hilfe.jpg',
    year: '2017',
  },
  {
    id: 16,
    title: 'Fasching 2017',
    description: 'Lustig wie immer! Faschingsreiten mit Evelyn und Kerstin, Faschingsfeier mit Jil und Michèle',
    image: '/Archiv Bilder/fasching2017.jpg',
    year: '2017',
  },
  {
    id: 17,
    title: 'Frühjahrsjagd Mai 2016',
    description: 'Bei sonnigem Wetter und großem Jagdfeld mit der Vogelsbergmeute und Jagdherrin Marion Knoche',
    image: '/Archiv Bilder/jagd2016.jpg',
    year: '2016',
  },
  {
    id: 18,
    title: '60. Geburtstag von Alfred Schmitt',
    description: 'Vierspännig gefahren von Willi Schuh',
    image: '/Archiv Bilder/freddy60.jpg',
    year: '2016',
  },
  {
    id: 19,
    title: 'Fasching 2016',
    description: 'Tolle Faschingsfeier mit Siggi und Faschingsreiten mit Mareike, Kerstin und Evelyn',
    image: '/Archiv Bilder/fasching-2016.jpg',
    year: '2016',
  },
  {
    id: 20,
    title: 'Neujahrsquadrille 2016',
    description: 'Mit ganz kleinen bis ganz großen Sprüngen!',
    image: '/Archiv Bilder/neujahrsquadrille-2016.jpg',
    year: '2016',
  },
  {
    id: 21,
    title: 'Weihnachtsreiten 2015',
    description: 'Mit Gästen vom Voltigierverein Büchenbach',
    image: '/Archiv Bilder/weihnachtsreiten2015.jpg',
    year: '2015',
  },
  {
    id: 22,
    title: 'Turnier 2015',
    description: 'Im September gab es das große RCM-Turnier',
    image: '/Archiv Bilder/turnier-2105.jpg',
    year: '2015',
  },
  {
    id: 23,
    title: 'Fasching 2015',
    description: 'Party und Faschingsreiten!',
    image: '/Archiv Bilder/fasching-2015.jpg',
    year: '2015',
  },
  {
    id: 24,
    title: 'Turnier Oktober 2014',
    description: 'Tolle Springbilder',
    image: '/Archiv Bilder/turnier-okt-2014.jpg',
    year: '2014',
  },
  {
    id: 25,
    title: 'Tag der offenen Tür Mai 2014',
    description: 'Abwechslungsreiches Programm und viele Besucher',
    image: '/Archiv Bilder/offenen-tuer-2014.jpg',
    year: '2014',
  },
  {
    id: 26,
    title: 'Reitabzeichen Mai 2013',
    description: 'Kleines - Bronze - Silber und alle haben bestanden!',
    image: '/Archiv Bilder/raz-2013.jpg',
    year: '2013',
  },
  {
    id: 27,
    title: 'Faschingsreiten 2013',
    description: 'Dank Anne zum ersten Mal mit Faschingsreit-Schleife!!',
    image: '/Archiv Bilder/fasching-2013.jpg',
    year: '2013',
  },
  {
    id: 28,
    title: 'Weihnachtsreiten 2012',
    description: 'Mit Dressurquadrille, Jugendquadrille und Springen',
    image: '/Archiv Bilder/weihnachtsreiten-2012.jpg',
    year: '2012',
  },
  {
    id: 29,
    title: 'Geländespringen Oktober 2012',
    description: 'Unsere Springreiter waren in der Sandgrube bei Heroldsbach zum Üben',
    image: '/Archiv Bilder/gelaendespringen-2012.jpg',
    year: '2012',
  },
  {
    id: 30,
    title: 'Faschingsreiten 2012',
    description: 'Mit Anne und Katja',
    image: '/Archiv Bilder/faschingsreiten-2012.jpg',
    year: '2012',
  },
  {
    id: 31,
    title: 'Fasching 2012',
    description: 'Lebt denn der alte Holzmichel noch?',
    image: '/Archiv Bilder/fasching-2012.jpg',
    year: '2012',
  },
  {
    id: 32,
    title: 'Tag der offenen Stalltür 2010',
    description: 'Bei unseren kleinen Gästen kam besonders das Ponyreiten sehr gut an!',
    image: '/Archiv Bilder/offene-tuer-2010.jpg',
    year: '2010',
  },
  {
    id: 33,
    title: 'Herbstjagd 2009',
    description: 'Unsere Jagd fand wieder mit dem traditionellen Fuchsschwanz-Greifen im Marienbergpark statt',
    image: '/Archiv Bilder/jagd2009.jpg',
    year: '2009',
  },
  {
    id: 34,
    title: 'Jugendzeltlager 2009',
    description: 'Zum letzten Mal fand das Zeltlager mit unserer Jugendwartin Regina statt, die uns leider verlässt',
    image: '/Archiv Bilder/jugendzeltlager-2009.jpg',
    year: '2009',
  },
  {
    id: 35,
    title: 'Mairitt 2009',
    description: 'Der Maiausritt führte uns heuer bei herrlichem Wetter zur Sooser Wiese',
    image: '/Archiv Bilder/mairitt-2009.jpg',
    year: '2009',
  },
  {
    id: 36,
    title: 'WBO-Turnier 2009',
    description: 'Erstmals nach der neuen Turnier-Ordnung wurde unser Hallenturnier durchgeführt und fand regen Zuspruch',
    image: '/Archiv Bilder/wbo-tunier-feb2009.jpg',
    year: '2009',
  },
  {
    id: 37,
    title: 'Zweitagesritt August 2008',
    description: 'Der Zweitagesritt führte uns wieder einmal nach Rückenhof, wo wir auf Siggis schöner Koppel übernachteten',
    image: '/Archiv Bilder/2-Tages-Ritt-2008.jpg',
    year: '2008',
  },
  {
    id: 38,
    title: 'Jugendausritt September 2008',
    description: 'Bei einem Ritt durch den Reichswald sammelten unsere Jugendlichen erste Erfahrungen im Gelände',
    image: '/Archiv Bilder/jugendausrtitt2008.jpg',
    year: '2008',
  },
];

export default function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState('Alle');

  // Get unique years for filter
  const years = ['Alle', ...Array.from(new Set(galleryItems.map(item => item.year))).sort((a, b) => b - a)];

  // Filter items based on selected year
  const filteredItems = selectedYear === 'Alle'
    ? galleryItems
    : galleryItems.filter(item => item.year === selectedYear);

  return (
    <div className="pt-[120px] min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Galerie
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Eindrücke von unseren Events, Turnieren und dem täglichen Leben am Reitstall Marienberg
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedYear === year
                    ? 'bg-primary-600 text-white shadow-soft'
                    : 'bg-gray-100 text-nature-dark hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                          {item.year}
                        </span>
                        <h3 className="font-heading font-bold text-xl mb-2">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-white/90 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Info below image - always visible on mobile */}
                  <div className="mt-4 md:hidden">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-nature-dark mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-nature-light">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-white text-center">
                <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-3">
                  {selectedImage.year}
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  {selectedImage.title}
                </h2>
                {selectedImage.description && (
                  <p className="text-white/80 max-w-2xl mx-auto">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
