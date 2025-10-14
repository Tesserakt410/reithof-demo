import { MapPin, Car, Bus, Navigation } from 'lucide-react';

export default function Anfahrt() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Anfahrt</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-100 p-3 rounded-lg">
              <MapPin size={32} className="text-primary-600" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Adresse</h2>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Reitstall Marienberg</strong>
              </p>
              <p className="text-gray-700">Marienbergstraße 136</p>
              <p className="text-gray-700 mb-4">90411 Nürnberg</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Marienbergstraße+136+90411+Nürnberg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Navigation size={18} />
                In Google Maps öffnen
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Car size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-600 mt-2">Mit dem Auto</h3>
            </div>
            <div className="text-gray-700 space-y-2">
              <p><strong>Von der A3:</strong></p>
              <p className="ml-4">Ausfahrt Nürnberg-Nord nehmen und Richtung Marienberg fahren</p>
              <p className="mt-3"><strong>Von der A73:</strong></p>
              <p className="ml-4">Ausfahrt Nürnberg-Hafen nehmen und Richtung Marienberg fahren</p>
              <p className="mt-4 text-sm">
                Parkplätze stehen vor Ort zur Verfügung.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Bus size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-600 mt-2">Öffentliche Verkehrsmittel</h3>
            </div>
            <div className="text-gray-700 space-y-2">
              <p>Der Reitstall ist mit öffentlichen Verkehrsmitteln erreichbar.</p>
              <p className="mt-3">
                Informationen zu Busverbindungen finden Sie auf der Website der
                VAG Nürnberg.
              </p>
              <a
                href="https://www.vag.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                VAG Fahrplanauskunft →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Besichtigung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie möchten unseren Reitstall besichtigen? Wir freuen uns auf Ihren Besuch!
            Bitte vereinbaren Sie vorab einen Termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:091152985179"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium text-center"
            >
              Termin vereinbaren
            </a>
            <a
              href="mailto:info@reitstall-marienberg.de"
              className="inline-block bg-accent-400 text-white px-6 py-3 rounded-md hover:bg-accent-500 transition font-medium text-center"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
