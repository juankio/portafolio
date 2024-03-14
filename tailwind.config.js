/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'app':"url('../assets/fondo.avif') ",
        'app2':"url('../assets/yo5.png')"
      }
    },
  },
  plugins: [],
}

