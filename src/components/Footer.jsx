import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Über uns', href: '/wir-ueber-uns' },
    { name: 'Aktuelles', href: '/aktuelles' },
    { name: 'Reiterstüberl', href: '/reitstube' },
    { name: 'Empfehlungen', href: '/empfehlungen' },
  ];

  const legalLinks = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ];

  return (
    <footer className="bg-nature-dark text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Reitstall <span className="text-accent-400">Marienberg</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Reiten lernen im Einklang mit der Natur. Seit über 20 Jahren Ihr Partner für
              Reitunterricht und Pferdehaltung in Nürnberg.
            </p>
            <a
              href="https://www.facebook.com/ReitstallMarienberg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <Facebook size={20} />
              <span>Folge uns auf Facebook</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Kontakt</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent-400" />
                <div>
                  <p className="font-medium text-white">Reitstall Marienberg</p>
                  <p>Marienbergstraße 136</p>
                  <p>90411 Nürnberg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-accent-400" />
                <a href="tel:091152985179" className="hover:text-white transition-colors">
                  0911 / 52 98 517
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-accent-400" />
                <a href="mailto:info@reitstall-marienberg.de" className="hover:text-white transition-colors">
                  info@reitstall-marienberg.de
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Mehr Infos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inhaber & Banking */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Inhaber</h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-medium text-white">Alfred Schmitt</p>
              <p className="text-sm">Pferdewirtschaftsmeister</p>
              <div className="pt-4 mt-4 border-t border-gray-700">
                <p className="text-sm">
                  <span className="text-gray-400">IBAN:</span>
                  <br />
                  <span className="font-mono text-xs">DE82 7605 0101 0014 9195 83</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <p>&copy; {new Date().getFullYear()} Reitstall Marienberg. Alle Rechte vorbehalten.</p>
            </div>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-accent-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <span>Made with</span>
              <Heart size={14} className="text-accent-400 fill-accent-400" />
              <span>for horses</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
