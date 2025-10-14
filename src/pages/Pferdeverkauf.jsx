import { Sparkles, Heart, HandHeart } from 'lucide-react';

export default function Pferdeverkauf() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Pferdeverkauf</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir vermitteln und verkaufen ausgewählte Pferde für verschiedene Ansprüche
            und Reitweisen. Von gut ausgebildeten Freizeitpferden bis zu ambitionierten
            Turnierpferden.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Alle Pferde werden sorgfältig auf ihre Eignung geprüft und ehrlich beschrieben.
            Uns liegt eine faire und transparente Vermittlung am Herzen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Sparkles size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Vielfältiges Angebot</h3>
            <p className="text-gray-600">
              Von Freizeitpferden bis zu Turnierpferden in verschiedenen Disziplinen
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Heart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Ehrliche Beratung</h3>
            <p className="text-gray-600">
              Wir beraten Sie ehrlich und kompetent bei der Auswahl des passenden Pferdes
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <HandHeart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Probereiten</h3>
            <p className="text-gray-600">
              Selbstverständlich können Sie jedes Pferd vor dem Kauf ausgiebig probereiten
            </p>
          </div>
        </div>

        <div className="bg-accent-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Aktuelle Verkaufspferde</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Informieren Sie sich telefonisch oder per E-Mail über unsere aktuellen
            Verkaufspferde. Das Angebot ändert sich regelmäßig.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gerne besprechen wir mit Ihnen Ihre Vorstellungen und Wünsche und suchen
            gemeinsam nach dem passenden Pferd für Sie.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Pferdevermittlung</h2>
          <p className="text-gray-700 leading-relaxed">
            Sie möchten Ihr Pferd verkaufen? Sprechen Sie uns an - wir unterstützen Sie
            gerne bei der Vermittlung und beraten Sie in allen Fragen rund um den Verkauf.
          </p>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Kontakt</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rufen Sie uns an oder schreiben Sie uns - wir freuen uns auf Ihre Anfrage!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:091152985179"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium text-center"
            >
              Anrufen
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
