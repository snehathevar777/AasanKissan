/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          hover: '#43A047'
        },
        secondary: {
          yellow: '#FBC02D',
          brown: '#8D6E63',
          blue: '#29B6F6'
        },
        neutral: {
          beige: '#F5F5DC',
          dark: '#424242'
        }
      }
    },
  },
  plugins: [],
};