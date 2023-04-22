/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131921",
        third: "#ffffff",
        secondary: "#EB690A",
      },
      
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
