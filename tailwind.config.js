/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rebel: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        nofex: ['Nofex', 'system-ui', 'sans-serif'],
        impact: ['Impact', 'system-ui', 'sans-serif'],
        blackops: ['"Black Ops One"', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};