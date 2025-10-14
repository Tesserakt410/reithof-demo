import { Star, Target, Award } from 'lucide-react';

export default function Beritt() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Beritt</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir bieten professionellen Beritt für Pferde an. Ob Jungpferdeausbildung, Korrekturberitt
            oder gezieltes Training - Ihr Pferd ist bei uns in besten Händen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unsere erfahrenen Reiter arbeiten individuell auf die Bedürfnisse jedes Pferdes
            zugeschnitten und fördern eine harmonische Entwicklung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Star size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Jungpferdeausbildung</h3>
            <p className="text-gray-600">
              Schonende und fundierte Grundausbildung für junge Pferde
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Target size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Korrekturberitt</h3>
            <p className="text-gray-600">
              Gezieltes Training zur Korrektur von Problematiken
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Turnierberitt</h3>
            <p className="text-gray-600">
              Vorbereitung und Beritt auf Turnieren verschiedener Klassen
            </p>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Unser Ansatz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir legen großen Wert auf eine pferdegerechte Ausbildung, die das Vertrauen
            des Pferdes gewinnt und erhält. Jedes Pferd wird als Individuum betrachtet
            und entsprechend seiner Fähigkeiten gefördert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Durch regelmäßige Kommunikation halten wir Sie über die Fortschritte
            Ihres Pferdes auf dem Laufenden.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Interesse am Beritt?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kontaktieren Sie uns für ein persönliches Gespräch über die Bedürfnisse
            Ihres Pferdes und unsere Berittmöglichkeiten.
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
