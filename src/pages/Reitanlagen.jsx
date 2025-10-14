import { Home, Sun, Trees } from 'lucide-react';

export default function Reitanlagen() {
  const facilities = [
    {
      icon: Home,
      title: "Reithalle",
      description: "Moderne Reithalle mit optimalen Bodenverhältnissen für Training bei jedem Wetter."
    },
    {
      icon: Sun,
      title: "Außenplatz",
      description: "Großzügiger Außenreitplatz mit hervorragendem Boden für sommerliches Training."
    },
    {
      icon: Trees,
      title: "Ausreitmöglichkeiten",
      description: "Direkter Zugang zu schönen Reitwegen in der Umgebung für entspannte Ausritte."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Reitanlagen</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Unsere modernen Reitanlagen bieten optimale Bedingungen für Reitunterricht, Training
            und entspannte Ausritte. Wir legen großen Wert auf beste Bodenverhältnisse und
            gepflegte Anlagen.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mb-6">Unsere Anlagen</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-accent-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Stallungen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unsere Stallungen sind hell, luftig und bieten den Pferden optimale Bedingungen.
            Jedes Pferd wird individuell betreut und versorgt.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Die Boxen sind geräumig und werden täglich gemistet. Für Bewegung ist durch
            täglichen Weidegang (witterungsabhängig) und Paddocks gesorgt.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Ausstattung</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Moderne Sattelkammer mit ausreichend Platz</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Aufenthaltsraum für Reiter (Reiterstüberl)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Waschplatz für Pferde</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Ausreichend Parkplätze</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
