import { GraduationCap, Users, Trophy } from 'lucide-react';

export default function Reitunterricht() {
  const courses = [
    {
      icon: Users,
      title: "Gruppenunterricht",
      description: "Lernen Sie in kleinen Gruppen mit gleichem Leistungsstand. Ideal für den Einstieg und regelmäßiges Training."
    },
    {
      icon: GraduationCap,
      title: "Einzelunterricht",
      description: "Individuelle Förderung durch persönlichen Einzelunterricht. Perfekt für gezielte Verbesserung."
    },
    {
      icon: Trophy,
      title: "Turniervorbereitung",
      description: "Spezielle Vorbereitung auf Turniere und Reitabzeichen mit erfahrenen Trainern."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">Reitunterricht</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Unser professioneller Reitunterricht richtet sich an Anfänger und Fortgeschrittene jeden Alters.
            Unter der Leitung erfahrener Reitlehrer bieten wir qualifizierten Unterricht in verschiedenen
            Disziplinen an.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wir legen großen Wert auf eine fundierte reiterliche Ausbildung mit dem Ziel, eine harmonische
            Beziehung zwischen Reiter und Pferd zu entwickeln.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mb-6">Unser Angebot</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-accent-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-4">Reitabzeichen</h2>
          <p className="text-gray-700 leading-relaxed">
            Wir bereiten Sie auf verschiedene Reitabzeichen vor und begleiten Sie auf Ihrem Weg
            zum erfolgreichen Abschluss. Von den ersten Grundlagen bis zu fortgeschrittenen Prüfungen.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Kontakt & Anmeldung</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interessiert? Kontaktieren Sie uns für eine Probestunde oder weitere Informationen!
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
