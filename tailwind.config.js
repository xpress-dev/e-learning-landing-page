/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Plus Jakarta Sans', sans-serif",
      },
    },
    screens: {
      sm: '847px',
      lg: '1240px',
    },
  },
  plugins: [],
};
