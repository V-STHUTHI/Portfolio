/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          blue: '#3b82f6',
          violet: '#8b5cf6',
          coral: '#f97316',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px rgba(59,130,246,0.2)',
      },
    },
  },
  plugins: [],
};
