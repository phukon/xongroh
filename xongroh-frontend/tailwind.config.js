/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        button: 'inset 0px 3px 4px 0px rgba(0, 0, 0, 0.25) ',
        card: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) ',
      },
    },
  },
  plugins: [],
}
