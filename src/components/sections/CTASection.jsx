import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../common/Button';
import { slideUp } from '../../utils/animations';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function CTASection() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={slideUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Bereit für Ihr Reiterabenteuer?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute eine unverbindliche Probestunde und lernen Sie
            unseren Hof und unsere Pferde kennen.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:091152985179"
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-white/80 mb-1">Rufen Sie an</div>
                <div className="font-semibold">0911 / 52 98 517</div>
              </div>
            </a>

            <a
              href="mailto:info@reitstall-marienberg.de"
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-white/80 mb-1">Schreiben Sie uns</div>
                <div className="font-semibold text-sm">info@reitstall-marienberg.de</div>
              </div>
            </a>

            <button
              onClick={() => showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.')}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-sm text-white/80 mb-1">Besuchen Sie uns</div>
                <div className="font-semibold">Anfahrt ansehen</div>
              </div>
            </button>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="light"
              size="lg"
              onClick={() => showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.')}
              className="min-w-[200px]"
            >
              Probestunde vereinbaren
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.')}
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
            >
              Mehr erfahren
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
