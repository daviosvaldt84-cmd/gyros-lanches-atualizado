/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#090908',
          soft: '#12110E',
          card: '#1A1712',
          line: '#5A4428',
        },
        flame: {
          DEFAULT: '#D58B2B',
          dark: '#A86419',
          light: '#F0AA45',
        },
        headlight: {
          DEFAULT: '#F2C15B',
          soft: '#FFE09B',
        },
        cream: '#FFFDF7',
        smoke: '#D2C7B7',
        gold: {
          DEFAULT: '#C9953D',
          deep: '#76501F',
          pale: '#F1D18A',
        },
      },
      fontFamily: {
        display: ['"Unbounded"', '"Archivo Black"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 48px -12px rgba(242, 193, 91, 0.42)',
        flame: '0 10px 30px -10px rgba(213, 139, 43, 0.65)',
        gold: '0 22px 55px -26px rgba(242, 193, 91, 0.62)',
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(242,193,91,0.08) 1px, transparent 0)",
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.45' },
        },
        rollIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-160%) skewX(-18deg)' },
          '100%': { transform: 'translateX(260%) skewX(-18deg)' },
        },
      },
      animation: {
        flicker: 'flicker 5s infinite',
        rollIn: 'rollIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        shine: 'shine 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
