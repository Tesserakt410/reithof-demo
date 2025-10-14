import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, X } from 'lucide-react';

export default function AktuellesBanner() {
  const [isOpen, setIsOpen] = useState(false);

  const aktuellesItems = [
    {
      title: "LPO/WBO-Turnier",
      date: "27./28. September 2025",
      description: "Nennungen möglich ab 21. August 2025",
      highlight: true,
    },
    {
      title: "Freie Boxen zu vermieten!",
      date: "Aktuell verfügbar",
      description: "Wir haben derzeit freie Boxen zu vermieten. Kontaktieren Sie uns für weitere Informationen.",
    },
    {
      title: "Gute Seele für Reiterstüberl gesucht!",
      date: "450-€-Basis",
      description: "Bedienung auf 450-€-Basis für Bedienung der Gäste, Zubereitung kleiner Speisen und Vereinbarung von Reitstunden an ca. 2 Tagen pro Woche gesucht. Gerne Rentner(in) mit Bezug zu Pferden.",
    },
    {
      title: "Tierliebe Pferdepfleger gesucht!",
      date: "450-€-Basis",
      description: "Aushilfe auf 450-€-Basis gesucht. Bei Interesse bitte melden!",
    },
  ];

  return (
    <>
      {/* Tab Button - Always visible */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-primary-600 text-white px-3 md:px-4 py-5 md:py-6 rounded-r-xl shadow-soft-lg hover:bg-primary-700 transition-colors active:bg-primary-800"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          x: isOpen ? 0 : 0,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ rotate: isOpen ? 0 : 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Calendar size={24} />
          </motion.div>
          <span className="text-xs font-bold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            AKTUELLES
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <ChevronRight size={20} />
          </motion.div>
        </div>
      </motion.button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <Calendar size={28} />
                    </motion.div>
                    <h2 className="text-2xl font-heading font-bold">Aktuelles</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {aktuellesItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-xl p-5 border-l-4 hover:shadow-soft transition-shadow ${
                      item.highlight
                        ? 'bg-gradient-to-br from-accent-100 to-accent-50 border-accent-500'
                        : 'bg-cream-50 border-primary-500'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        item.highlight ? 'bg-accent-500' : 'bg-primary-500'
                      }`} />
                      <div className="flex-grow">
                        <h3 className="font-heading font-bold text-lg text-nature-dark mb-1">
                          {item.title}
                        </h3>
                        <p className={`text-sm font-medium mb-2 ${
                          item.highlight ? 'text-accent-600' : 'text-primary-600'
                        }`}>
                          {item.date}
                        </p>
                        <p className="text-nature-light leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Facebook CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 mt-6"
                >
                  <h3 className="font-heading font-bold text-lg text-nature-dark mb-3">
                    Bleiben Sie auf dem Laufenden
                  </h3>
                  <p className="text-nature-light text-sm mb-4 leading-relaxed">
                    Folgen Sie uns auf Facebook für aktuelle Neuigkeiten, Fotos und Veranstaltungsankündigungen!
                  </p>
                  <a
                    href="https://www.facebook.com/ReitstallMarienberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-soft"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Zur Facebook-Seite
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
