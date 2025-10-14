import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import Hero from '../components/sections/Hero';
import OfferCards from '../components/sections/OfferCards';
import TrustSection from '../components/sections/TrustSection';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import dressurImg from '../assets/images/dressur.jpg';

export default function Home() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="pt-[100px] md:pt-[120px]"> {/* Offset for fixed header */}
      {/* Hero Section */}
      <Hero
        title="Reiten lernen im Einklang mit der Natur"
        subtitle="Seit über 20 Jahren Ihre Adresse für Reitsport in Nürnberg"
        description="Entdecken Sie die Freude am Reiten in familiärer Atmosphäre. Von der ersten Reitstunde bis zum Turniererfolg begleiten wir Sie auf Ihrem Weg."
        primaryCTA={{
          text: 'Probestunde vereinbaren',
          onClick: () => showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.'),
        }}
        secondaryCTA={{
          text: 'Mehr erfahren',
          onClick: () => {
            document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        image={dressurImg}
      />

      {/* Offer Cards Section */}
      <div id="offers">
        <OfferCards />
      </div>

      {/* Trust Section */}
      <TrustSection />

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg">
                  <img
                    src={dressurImg}
                    alt="Reitunterricht am Reitstall Marienberg"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-200 rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-nature-dark mb-6">
                  Willkommen beim Reitstall Marienberg
                </h2>
                <p className="text-lg text-nature-light leading-relaxed mb-6">
                  Der Reitstall Marienberg liegt im Norden Nürnbergs und bietet seit vielen Jahren
                  professionellen Reitunterricht, Boxenvermietung und Pferdeverkauf an.
                </p>
                <p className="text-lg text-nature-light leading-relaxed mb-6">
                  Unter der Leitung von <strong>Alfred Schmitt</strong>, Pferdewirtschaftsmeister,
                  erwartet Sie eine familiäre Atmosphäre und fachkundige Betreuung für Reiter und Pferd.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    </div>
                    <span className="text-nature-dark">Qualifizierte und erfahrene Reitlehrer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    </div>
                    <span className="text-nature-dark">Moderne Anlagen und gepflegte Stallungen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    </div>
                    <span className="text-nature-dark">Individuelle Förderung für jeden Reiter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    </div>
                    <span className="text-nature-dark">Gemütliches Reiterstüberl für geselliges Miteinander</span>
                  </li>
                </ul>
                <button
                  onClick={() => showToast('Dies ist eine Demo-Website. Bis zur Ausarbeitung steht diese Funktion nicht zur Verfügung.')}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  Mehr über uns erfahren
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
