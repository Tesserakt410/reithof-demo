import { motion } from 'framer-motion';
import { Award, Users, Heart, TreePine } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function TrustSection() {
  const stats = [
    {
      icon: <Award size={32} className="text-primary-500" />,
      number: '20+',
      label: 'Jahre Erfahrung',
      description: 'Tradition und Kompetenz seit über zwei Jahrzehnten',
    },
    {
      icon: <Users size={32} className="text-accent-500" />,
      number: '100+',
      label: 'Zufriedene Reiter',
      description: 'Vom Anfänger bis zum Turnierreiter',
    },
    {
      icon: <Heart size={32} className="text-wood-500" />,
      number: '100%',
      label: 'Mit Herz',
      description: 'Familiäre Atmosphäre und persönliche Betreuung',
    },
    {
      icon: <TreePine size={32} className="text-primary-600" />,
      number: 'Natur',
      label: 'Im Einklang',
      description: 'Naturnahe Ausritte in wunderschöner Umgebung',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-nature-dark mb-4">
              Warum Reitstall Marienberg?
            </h2>
            <p className="text-lg text-nature-light max-w-2xl mx-auto">
              Seit über 20 Jahren Ihr verlässlicher Partner für Reitsport und Pferdehaltung in Nürnberg
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-soft group-hover:shadow-soft-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-nature-dark mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-nature-light">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
