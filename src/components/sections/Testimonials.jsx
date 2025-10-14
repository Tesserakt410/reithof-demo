import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState } from 'react';
import Card from '../common/Card';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: 'Der Reitstall Marienberg ist für uns wie eine zweite Familie geworden. Die persönliche Betreuung und die Liebe zu den Pferden spürt man in jedem Moment.',
      author: 'Familie Müller',
      role: 'Einsteller seit 2015',
    },
    {
      text: 'Meine Tochter hat hier Reiten gelernt und ist mittlerweile eine begeisterte Turnierreiterin. Die Förderung und professionelle Begleitung waren ausschlaggebend für ihren Erfolg.',
      author: 'Sarah K.',
      role: 'Mutter einer Reitschülerin',
    },
    {
      text: 'Als Anfänger wurde ich hier mit viel Geduld an den Reitsport herangeführt. Die familiäre Atmosphäre und das tolle Team machen jeden Besuch zu einem Erlebnis.',
      author: 'Michael W.',
      role: 'Reitschüler',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-nature-dark mb-4">
              Das sagen unsere Reiter
            </h2>
            <p className="text-lg text-nature-light">
              Echte Erfahrungen von echten Menschen
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div variants={staggerItem}>
            <Card padding="xl" className="relative">
              <Quote size={48} className="absolute top-6 left-6 text-primary-200" />

              <div className="relative z-10 pt-8">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl text-nature-dark leading-loose mb-8 italic font-light"
                >
                  "{testimonials[activeIndex].text}"
                </motion.p>

                <motion.div
                  key={`author-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-nature-dark">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-sm text-nature-light">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === activeIndex
                      ? 'w-8 bg-primary-500'
                      : 'bg-primary-200 hover:bg-primary-300'
                    }
                  `}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
