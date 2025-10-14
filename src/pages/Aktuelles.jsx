import { Calendar, Award, Users } from 'lucide-react';

export default function Aktuelles() {
  const news = [
    {
      icon: Calendar,
      title: "Aktueller Reitunterricht",
      date: "Laufend",
      content: "Unser Reitunterricht findet regelmäßig statt. Neue Reitschüler sind jederzeit willkommen!"
    },
    {
      icon: Users,
      title: "Vereinsaktivitäten",
      date: "Aktuelle Termine",
      content: "Informieren Sie sich über unsere aktuellen Veranstaltungen und Vereinsaktivitäten."
    },
    {
      icon: Award,
      title: "Turniere & Veranstaltungen",
      date: "Nach Ankündigung",
      content: "Besuchen Sie unsere regelmäßig stattfindenden Turniere und Veranstaltungen."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Aktuelles</h1>

        <div className="space-y-6">
          {news.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-400 p-3 rounded-lg flex-shrink-0">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-primary-600 mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-accent-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Folgen Sie uns auf Facebook für aktuelle Neuigkeiten, Fotos und Veranstaltungsankündigungen!
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
  );
}
