/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        button:['DM Sans', 'sans-serif'],
        title:['PT Serif', 'sans-serif']
      } 
    },
  },
  plugins: [],
};
