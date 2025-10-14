import { Coffee, Users, Home } from 'lucide-react';

export default function Reitstube() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Reiterstüberl</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Unser gemütliches Reiterstüberl ist der zentrale Treffpunkt für alle Reiter
            und Pferdefreunde. Hier können Sie sich vor oder nach dem Reiten entspannen,
            austauschen und die besondere Atmosphäre genießen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Das Reiterstüberl steht allen Einstellern und Reitschülern offen und lädt
            zum Verweilen ein.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Coffee size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Gemütlichkeit</h3>
            <p className="text-gray-600">
              Entspannte Atmosphäre zum Ausruhen und Genießen
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Treffpunkt</h3>
            <p className="text-gray-600">
              Der ideale Ort zum Austausch mit anderen Reitern
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Home size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Aufenthaltsraum</h3>
            <p className="text-gray-600">
              Sitzgelegenheiten und Aufenthaltsmöglichkeiten für Einsteller
            </p>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Veranstaltungen</h2>
          <p className="text-gray-700 leading-relaxed">
            Im Reiterstüberl finden auch regelmäßig gesellige Zusammenkünfte und
            Veranstaltungen statt. Hier pflegen wir das Miteinander und die
            Gemeinschaft unter den Reitern.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Willkommen!</h2>
          <p className="text-gray-700 leading-relaxed">
            Schauen Sie vorbei und überzeugen Sie sich selbst von der familiären
            Atmosphäre in unserem Reiterstüberl. Wir freuen uns auf Ihren Besuch!
          </p>
        </div>
      </div>
    </div>
  );
}
