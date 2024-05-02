/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0183b4",
        secondary: "#0fcde7",
        tertiary: "#fbb863",
        "red": "#de3e39",
        "green": "#078a65",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/utilities/hero.svg')",
      },
    },
  },
  plugins: [],
}

