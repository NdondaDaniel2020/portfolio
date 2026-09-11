/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00F2B0',
          emerald: '#10B981',
          dark: '#070B0D',
          card: '#0E151A',
          cardHover: '#131D24',
          surface: '#11181F',
          border: '#1E2B35',
          borderLight: '#263744',
          muted: '#7E92A2',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
