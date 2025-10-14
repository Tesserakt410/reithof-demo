import { Camera, Facebook } from 'lucide-react';

export default function Fotoalbum() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Fotoalbum</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Camera size={32} className="text-primary-600" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Impressionen aus unserem Reitstall</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Werfen Sie einen Blick hinter die Kulissen! In unserem Fotoalbum finden Sie
                Bilder aus dem Stallalltag, von Trainingseinheiten, Turnieren und besonderen
                Veranstaltungen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary-600 p-3 rounded-lg">
              <Facebook size={32} className="text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Besuchen Sie uns auf Facebook</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aktuelle Fotos, Videos und Neuigkeiten aus unserem Reitstall finden Sie
                auf unserer Facebook-Seite. Dort teilen wir regelmäßig Impressionen aus
                dem Stallalltag und von besonderen Ereignissen.
              </p>
              <a
                href="https://www.facebook.com/ReitstallMarienberg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium"
              >
                Zur Facebook-Seite
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-3">Training & Unterricht</h3>
            <p className="text-gray-600">
              Einblicke in unseren professionellen Reitunterricht und Trainingseinheiten
              mit Pferd und Reiter.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-3">Veranstaltungen</h3>
            <p className="text-gray-600">
              Fotos von Turnieren, Festen und besonderen Events in unserem Reitstall.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-3">Unsere Pferde</h3>
            <p className="text-gray-600">
              Lernen Sie unsere Schulpferde und Pensionspferde in Bild und Video kennen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-600 mb-3">Stallgemeinschaft</h3>
            <p className="text-gray-600">
              Eindrücke vom Zusammenleben in unserem familiären Reitstall.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
