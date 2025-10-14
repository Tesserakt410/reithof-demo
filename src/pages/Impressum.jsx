import { Building, User, Mail, Phone } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Impressum</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Building size={32} className="text-primary-600" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-lg">Reitstall Marienberg</p>
                <p>Marienbergstraße 136</p>
                <p>90411 Nürnberg</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <User size={32} className="text-primary-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-600 mb-3">Vertreten durch</h3>
                <p className="text-gray-700">Alfred Schmitt</p>
                <p className="text-gray-600 text-sm">Pferdewirtschaftsmeister</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-primary-600 mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <a href="tel:091152985179" className="text-gray-700 hover:text-primary-600">
                    0911 / 52 98 517
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500">Fax</p>
                  <p className="text-gray-700">0911 / 59 75 129</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-600" />
                <div>
                  <p className="text-sm text-gray-500">E-Mail</p>
                  <a href="mailto:info@reitstall-marienberg.de" className="text-gray-700 hover:text-primary-600">
                    info@reitstall-marienberg.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-bold text-primary-600 mb-3">Bankverbindung</h3>
            <p className="text-gray-700">IBAN: DE82 7605 0101 0014 9195 83</p>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Haftungsausschluss</h2>

          <h3 className="text-lg font-bold text-gray-800 mb-2">Haftung für Inhalte</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-2">Haftung für Links</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-2">Urheberrecht</h3>
          <p className="text-gray-700 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Datenschutz</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
            möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt
            dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
        </div>
      </div>
    </div>
  );
}
