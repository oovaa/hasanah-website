/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ensure dark mode is explicitly enabled via class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the typography plugin
  ],
};
