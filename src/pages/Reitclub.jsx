import { Users, Calendar, Trophy, Heart } from 'lucide-react';

export default function Reitclub() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Reitclub</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Unser Reitclub verbindet Pferdefreunde jeden Alters. Hier finden Sie
            Gleichgesinnte, mit denen Sie Ihre Leidenschaft für Pferde und den Reitsport
            teilen können.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wir organisieren regelmäßig Veranstaltungen, Ausritte und gesellige
            Zusammenkünfte für unsere Mitglieder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Users size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Gemeinschaft</h3>
            <p className="text-gray-600">
              Werden Sie Teil unserer Stallgemeinschaft und lernen Sie andere
              Pferdebegeisterte kennen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Calendar size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Veranstaltungen</h3>
            <p className="text-gray-600">
              Regelmäßige Events, Ausritte und gesellige Treffen für alle Mitglieder.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Trophy size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Turniere</h3>
            <p className="text-gray-600">
              Gemeinsame Teilnahme an Turnieren und Unterstützung bei
              Wettkampfvorbereitungen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Heart size={32} className="text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-3">Familiäre Atmosphäre</h3>
            <p className="text-gray-600">
              Bei uns steht das Miteinander im Vordergrund - jung und alt,
              Anfänger und Profis.
            </p>
          </div>
        </div>

        <div className="bg-accent-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Aktivitäten</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Gemeinsame Ausritte in die Umgebung</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Stallgemeinschaftliche Veranstaltungen und Feste</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Informationsabende zu verschiedenen Themen rund ums Pferd</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Turnierbegleitung und gemeinsame Turnierteilnahme</span>
            </div>
            <div className="flex items-start">
              <span className="text-primary-600 mr-2 mt-1">•</span>
              <span>Austausch und gegenseitige Unterstützung</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Mitglied werden</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie möchten Teil unserer Reitclub-Gemeinschaft werden? Kontaktieren Sie uns
            für weitere Informationen!
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
