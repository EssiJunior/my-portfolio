/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11998e",
        secondary: "#078a65",
        tertiary: "#fbb863",
        "red": "#de3e39",
        "green": "#13a96e",
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

