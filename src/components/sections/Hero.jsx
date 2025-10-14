import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { slideUp, staggerContainer, staggerItem } from '../../utils/animations';

export default function Hero({ title, subtitle, description, primaryCTA, secondaryCTA, image, showScrollIndicator = true }) {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-primary-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Subtitle Badge */}
            {subtitle && (
              <motion.div
                variants={staggerItem}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-6"
              >
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary-600">{subtitle}</span>
              </motion.div>
            )}

            {/* Main Title */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-nature-dark mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                variants={staggerItem}
                className="text-lg md:text-xl text-nature-light mb-8 md:mb-12 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              {primaryCTA && (
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={primaryCTA.onClick}
                  className="min-w-[200px]"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryCTA.onClick}
                  className="min-w-[200px]"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          {image && (
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative">
                {/* Decorative Background Elements */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-48 h-48 md:w-72 md:h-72 bg-primary-200/30 rounded-3xl -z-10" />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-40 h-40 md:w-64 md:h-64 bg-accent-200/30 rounded-3xl -z-10" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-soft-lg p-4 md:p-6 max-w-[160px] md:max-w-[200px]">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-500 rounded-full" />
                    <span className="text-xs md:text-sm font-bold text-nature-dark">20+ Jahre</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-nature-light">Erfahrung im Reitsport</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-white shadow-soft hover:shadow-soft-lg transition-all"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0]
          }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: {
              delay: 1.5,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <ChevronDown size={24} className="text-primary-600" />
        </motion.button>
      )}
    </section>
  );
}
