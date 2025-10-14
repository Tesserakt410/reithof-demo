import { Check } from 'lucide-react';

export default function Boxen() {
  const features = [
    "Großzügige, helle Boxen",
    "Tägliches Ausmisten",
    "Qualitativ hochwertiges Futter",
    "Täglicher Weidegang (witterungsabhängig)",
    "Individuelle Betreuung jedes Pferdes",
    "Nutzung aller Reitanlagen",
    "Fachkundige Versorgung und Pflege",
    "Familiäre Atmosphäre"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Boxenvermietung</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Wir bieten Boxenvermietung mit optimaler Versorgung und Betreuung Ihres Pferdes.
            Bei uns steht das Wohl der Pferde an erster Stelle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unser erfahrenes Team kümmert sich täglich um die Bedürfnisse Ihres Pferdes und
            sorgt für artgerechte Haltung in familiärer Atmosphäre.
          </p>
        </div>

        <div className="bg-primary-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-6">Unsere Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary-600 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Stallhaltung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unsere Boxen sind geräumig, hell und luftig. Wir achten auf optimale Hygiene
            und ein angenehmes Stallklima. Die Boxen werden täglich professionell gemistet
            und mit frischem Stroh eingestreut.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Für ausreichend Bewegung sorgen unsere Paddocks und - je nach Witterung -
            täglicher Weidegang auf unseren gepflegten Weiden.
          </p>
        </div>

        <div className="bg-accent-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Interesse?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kontaktieren Sie uns für weitere Informationen zu freien Boxen und Preisen.
            Gerne können Sie sich auch vor Ort ein Bild von unseren Anlagen machen.
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
