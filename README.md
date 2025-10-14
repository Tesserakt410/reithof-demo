# Reitstall Marienberg - Moderne Website

Eine moderne, responsive Website für den Reitstall Marienberg in Nürnberg, entwickelt mit React, Vite und Tailwind CSS.

## Features

- ✨ Modernes, responsives Design
- 📱 Mobile-first Ansatz
- 🎨 Tailwind CSS für professionelles Styling
- ⚡ Schnelle Performance mit Vite
- 🧭 React Router für Navigation
- 🎯 Alle Inhalte der originalen Website übernommen
- 🔍 SEO-freundliche Struktur

## Seiten

Die Website umfasst folgende Seiten:

- **Willkommen** - Homepage mit Überblick
- **Wir über uns** - Informationen über den Reitstall
- **Aktuelles** - Neuigkeiten und Veranstaltungen
- **Reitunterricht** - Details zum Unterrichtsangebot
- **Reitanlagen** - Beschreibung der Anlagen
- **Boxen** - Boxenvermietung
- **Beritt** - Berittmöglichkeiten
- **Pferdeverkauf** - Verkaufspferde
- **Reiterstüberl** - Gemütlicher Treffpunkt
- **Öffnungszeiten** - Besuchszeiten
- **Anfahrt** - Wegbeschreibung
- **Anfänger** - Informationen für Reitanfänger
- **Reitclub** - Clubinformationen
- **Fotoalbum** - Bildergalerie
- **Empfehlungen** - Nützliche Links
- **Impressum** - Rechtliche Informationen

## Entwicklung

### Voraussetzungen

- Node.js (v20.19+ oder v22.12+)
- npm oder yarn

### Installation

\`\`\`bash
npm install
\`\`\`

### Development Server starten

\`\`\`bash
npm run dev
\`\`\`

Die Website ist dann unter `http://localhost:5173` erreichbar.

### Produktion Build

\`\`\`bash
npm run build
\`\`\`

Der Build wird im `dist/` Ordner erstellt.

### Vorschau des Production Builds

\`\`\`bash
npm run preview
\`\`\`

## Technologie-Stack

- **React 18** - UI Framework
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling
- **React Router v6** - Routing
- **Lucide React** - Icons

## Farbschema

- **Primary (Blau)**: Hauptfarbe für Navigation und Buttons
- **Accent (Gelb/Gold)**: Akzentfarbe für Highlights
- **Grau-Töne**: Für Text und Hintergründe

## Projektstruktur

\`\`\`
src/
├── components/      # Wiederverwendbare Komponenten
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/          # Seitenkomponenten
│   ├── Home.jsx
│   ├── WirUeberUns.jsx
│   ├── Aktuelles.jsx
│   └── ...
├── assets/         # Bilder und statische Assets
│   └── images/
├── App.jsx         # Haupt-App mit Routing
├── main.jsx        # Entry Point
└── index.css       # Globale Styles (Tailwind)
\`\`\`

## Anpassungen

### Farben ändern

Bearbeiten Sie `tailwind.config.js` um das Farbschema anzupassen:

\`\`\`javascript
colors: {
  primary: { ... },
  accent: { ... }
}
\`\`\`

### Kontaktdaten aktualisieren

Die Kontaktdaten befinden sich in:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- Verschiedene Seiten-Komponenten

## Deployment

Die Website kann auf verschiedenen Hosting-Plattformen deployed werden:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & Drop des `dist/` Ordners
- **GitHub Pages**: Mit GitHub Actions
- **Eigener Server**: Upload des `dist/` Ordners

## Lizenz

© 2025 Reitstall Marienberg. Alle Rechte vorbehalten.

## Kontakt

**Reitstall Marienberg**
Marienbergstraße 136
90411 Nürnberg

Tel: 0911 / 52 98 517
E-Mail: info@reitstall-marienberg.de
Facebook: [ReitstallMarienberg](https://www.facebook.com/ReitstallMarienberg)
