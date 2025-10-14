import { Menu, X, Phone, Mail, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Vereinfachte Hauptnavigation - nur 5 Items
  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Reitunterricht', href: '/reitunterricht' },
    { name: 'Pferde & Stall', href: '/pferde-stall' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Scroll-Detection für Header-Stil
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile-Menü schließen bei Route-Wechsel
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white'}
      `}
    >
      {/* Top Contact Bar */}
      <div className="bg-primary-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-sm">
            <a
              href="tel:091152985179"
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">0911 / 52 98 517</span>
            </a>
            <a
              href="mailto:info@reitstall-marienberg.de"
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">info@reitstall-marienberg.de</span>
            </a>
            <a
              href="https://www.facebook.com/ReitstallMarienberg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <Facebook size={14} />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
              Reitstall <span className="text-accent-500">Marienberg</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`
                        relative px-4 py-2 text-base font-medium rounded-lg transition-all
                        ${isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-nature-dark hover:text-primary-600 hover:bg-primary-50/50'
                        }
                      `}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-nature-dark hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`
                          block px-4 py-3 rounded-lg font-medium transition-all
                          ${isActive
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-nature-dark hover:bg-primary-50/50 hover:text-primary-600'
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a
                  href="tel:091152985179"
                  className="flex items-center gap-3 text-nature-light hover:text-primary-600 transition-colors"
                >
                  <Phone size={18} />
                  <span>0911 / 52 98 517</span>
                </a>
                <a
                  href="mailto:info@reitstall-marienberg.de"
                  className="flex items-center gap-3 text-nature-light hover:text-primary-600 transition-colors"
                >
                  <Mail size={18} />
                  <span>info@reitstall-marienberg.de</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
