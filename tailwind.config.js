/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-light": "#5C16C5",
        "purple-dark": "#2D0C5E",
        "gray-light": "#646464",
        "gray-medium": "#323232",
        "orange-dark": "#D18000",
      },
      dropShadow: {
        "movie-poster": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        profile: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
