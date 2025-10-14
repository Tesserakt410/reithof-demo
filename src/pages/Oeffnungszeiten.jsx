import { Clock, Calendar, Phone } from 'lucide-react';

export default function Oeffnungszeiten() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Öffnungszeiten</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Clock size={32} className="text-primary-600" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Allgemeine Öffnungszeiten</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unser Reitstall ist täglich geöffnet. Einsteller haben rund um die Uhr
                Zugang zu ihren Pferden und den Stallungen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-600 p-3 rounded-lg">
              <Calendar size={32} className="text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Bürozeiten</h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Für Anfragen und Besichtigungen erreichen Sie uns am besten:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Täglich:</strong> Nach telefonischer Vereinbarung</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Reitunterricht</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Zeiten für den Reitunterricht werden individuell vereinbart und richten sich
            nach den Bedürfnissen der Reitschüler.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Kontaktieren Sie uns für die Vereinbarung von Unterrichtszeiten oder einer Probestunde.
          </p>
        </div>

        <div className="bg-accent-50 p-8 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-accent-400 p-3 rounded-lg">
              <Phone size={32} className="text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Terminvereinbarung</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Für Besichtigungen, Probestunden oder weitere Informationen vereinbaren Sie
                bitte telefonisch einen Termin:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:091152985179"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium text-center"
                >
                  0911 / 52 98 517
                </a>
                <a
                  href="mailto:info@reitstall-marienberg.de"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium text-center"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
