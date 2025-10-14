/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natürliche, warme Farbpalette
        primary: {
          50: '#f0f5f1',
          100: '#d9e7dc',
          200: '#b3cfc0',
          300: '#8cb7a3',
          400: '#669f87',
          500: '#4A7C59',  // Salbeigrün - Hauptfarbe
          600: '#3d6648',
          700: '#2f4f37',
          800: '#223826',
          900: '#1a2b1d',
        },
        accent: {
          50: '#fdf9f3',
          100: '#f8efd9',
          200: '#f1dfb3',
          300: '#e9ce8c',
          400: '#e2be66',
          500: '#D4A574',  // Warm-Beige/Sand - Akzentfarbe
          600: '#c18e4f',
          700: '#a0743d',
          800: '#7e5b2e',
          900: '#5c4220',
        },
        wood: {
          400: '#a68a62',
          500: '#8B6F47',  // Holzton für Akzente
          600: '#705939',
        },
        cream: {
          50: '#FAF8F5',   // Off-White Background
          100: '#f5f2ed',
        },
        nature: {
          dark: '#2C3E2E',  // Text Dark (dunkelgrün)
          light: '#6B7C6E', // Text Light (grau-grün)
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Source Sans Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md': ['2rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(74, 124, 89, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
