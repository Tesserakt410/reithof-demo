import { motion } from 'framer-motion';
import { GraduationCap, Home, Camera, ArrowRight } from 'lucide-react';
import Card, { CardTitle, CardDescription, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function OfferCards() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const offers = [
    {
      icon: <GraduationCap size={40} className="text-primary-500" />,
      title: 'Reitunterricht',
      description: 'Professioneller Unterricht für Anfänger und Fortgeschrittene. Von der ersten Reitstunde bis zum Turniererfolg begleiten wir Sie.',
      href: '/reitunterricht',
      color: 'from-primary-50 to-primary-100/50',
      implemented: false,
    },
    {
      icon: <Home size={40} className="text-accent-500" />,
      title: 'Pferde & Stall',
      description: 'Boxenvermietung, professioneller Beritt und Verkaufspferde. Ihr Pferd ist bei uns in den besten Händen.',
      href: '/pferde-stall',
      color: 'from-accent-50 to-accent-100/50',
      implemented: false,
    },
    {
      icon: <Camera size={40} className="text-wood-500" />,
      title: 'Stalleben',
      description: 'Erleben Sie unseren Hof hautnah. Familiäre Atmosphäre, gemütliches Reiterstüberl und eine lebendige Gemeinschaft.',
      href: '/galerie',
      color: 'from-wood-400/10 to-wood-500/20',
      implemented: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-50">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-nature-dark mb-4">
              Unser Angebot
            </h2>
            <p className="text-lg text-nature-light max-w-2xl mx-auto">
              Entdecken Sie unsere vielfältigen Angebote rund um Pferd und Reiter
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`h-full bg-gradient-to-br ${offer.color} border-2 border-white/50 relative overflow-hidden group`}
                  hover={false}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                  {/* Content */}
                  <div className="relative">
                    <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-soft">
                      {offer.icon}
                    </div>
                    <CardTitle className="mb-3">{offer.title}</CardTitle>
                    <CardDescription className="mb-6">{offer.description}</CardDescription>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        icon={<ArrowRight size={18} />}
                        iconPosition="right"
                        onClick={() => {
                          if (offer.implemented) {
                            navigate(offer.href);
                          } else {
                            showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.');
                          }
                        }}
                        className="w-full justify-center group-hover:bg-white/50"
                      >
                        Mehr erfahren
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
