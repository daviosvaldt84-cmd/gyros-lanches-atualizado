/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#1C1712',
          soft: '#241D16',
          card: '#2A2118',
          line: '#3A2E22',
        },
        flame: {
          DEFAULT: '#E8491D',
          dark: '#C23A14',
          light: '#FF6B3D',
        },
        headlight: {
          DEFAULT: '#FFB627',
          soft: '#FFD37A',
        },
        cream: '#FAF3E8',
        smoke: '#C9B8A3',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255, 182, 39, 0.35)',
        flame: '0 8px 24px -6px rgba(232, 73, 29, 0.55)',
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(250,243,232,0.06) 1px, transparent 0)",
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        rollIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        flicker: 'flicker 5s infinite',
        rollIn: 'rollIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
