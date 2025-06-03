/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Azul principal
        secondary: '#10b981',  // Verde secundÃ¡rio
        accent: '#f59e0b',     // Laranja/Amarelo para destaque
        dark: '#1f2937',       // Cinza escuro para texto/backgrounds
        light: '#f9fafb',      // Cinza claro para backgrounds/elementos
        'blue-custom': {       // Paleta de azuis customizada
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Primary
          600: '#2563eb', // Primary Darker
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      },
      fontFamily: { // Adicionando a fonte Inter aqui tambÃ©m
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
