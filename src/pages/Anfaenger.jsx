import { Heart, Users, Star, Award } from 'lucide-react';

export default function Anfaenger() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Reitunterricht für Anfänger</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie möchten das Reiten lernen? Bei uns sind Sie richtig! Wir bieten speziellen
            Anfängerunterricht für Kinder und Erwachsene an.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unsere erfahrenen Reitlehrer führen Sie Schritt für Schritt in die faszinierende
            Welt des Pferdesports ein - von den ersten Grundlagen bis zum sicheren Reiten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Heart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Einfühlsamer Unterricht</h3>
            <p className="text-gray-600">
              Wir nehmen uns Zeit für jeden Reitschüler und gehen individuell auf
              Bedürfnisse und Ängste ein.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Kleine Gruppen</h3>
            <p className="text-gray-600">
              In kleinen Gruppen lernen Sie gemeinsam mit anderen Anfängern die
              Grundlagen des Reitens.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Star size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Zuverlässige Schulpferde</h3>
            <p className="text-gray-600">
              Unsere gut ausgebildeten Schulpferde sind geduldig und für Anfänger
              bestens geeignet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Award size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Erfahrene Lehrer</h3>
            <p className="text-gray-600">
              Unsere qualifizierten Reitlehrer verfügen über langjährige Erfahrung
              in der Anfängerausbildung.
            </p>
          </div>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Was Sie lernen</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Richtiger Umgang mit dem Pferd</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Putzen und Satteln</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Grundlagen von Sitz und Hilfengebung</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Reiten in allen Gangarten</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Theoretisches Wissen über Pferdehaltung und -pflege</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Probestunde vereinbaren</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Überzeugen Sie sich selbst! Vereinbaren Sie eine unverbindliche Probestunde
            und lernen Sie unseren Reitstall kennen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:091152985179"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium text-center"
            >
              Jetzt anrufen
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
