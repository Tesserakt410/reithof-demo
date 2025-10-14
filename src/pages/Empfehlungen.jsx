import { ExternalLink, Star } from 'lucide-react';

export default function Empfehlungen() {
  const links = [
    {
      title: "Deutsche Reiterliche Vereinigung (FN)",
      url: "https://www.pferd-aktuell.de",
      description: "Offizielle Website der Deutschen Reiterlichen Vereinigung mit Informationen zu Turnieren, Ausbildung und Regelwerken"
    },
    {
      title: "Landeskommission Bayern",
      url: "https://www.pferd-aktuell.de/fn-service/landeskommissionen/bayern",
      description: "Ansprechpartner für alle Fragen rund um den Pferdesport in Bayern"
    },
    {
      title: "Pferdesportverband Mittelfranken",
      url: "https://www.psvmfr.de",
      description: "Informationen zu regionalen Turnieren und Veranstaltungen"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Empfehlungen</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Star size={32} className="text-primary-600" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">Nützliche Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Hier finden Sie eine Auswahl hilfreicher Websites rund um den Pferdesport,
                Ausbildung und Veranstaltungen.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-600 mb-2">{link.title}</h3>
                  <p className="text-gray-600 mb-3">{link.description}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Website besuchen
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Weitere Informationen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sie haben einen interessanten Link oder eine Empfehlung für andere Reiter?
            Lassen Sie es uns wissen!
          </p>
          <a
            href="mailto:info@reitstall-marienberg.de"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition font-medium"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
}
