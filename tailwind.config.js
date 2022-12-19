/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      successor: "#B0EBB5",
      predecessor: "#96CBEB",
      "neutral-hover": "#D1D1D1",
      "card-hover": "#FBFBFB",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#23415b",
        },
      },
    ],
  },
};
