/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b3c49",
        secondary: "#2fa3b0",
        tertiary: "#13d3f3",
        barre: "#b33951",
        background: "#f2f8f0",
        gradient1: "#1b9aaa",
        gradient2: "#f2f8f0",
        gradient3: "#210124",
        gradient4: "rgba(33, 1, 36, 0.47)",
        gradient5: "rgba(33, 1, 36, 0)",
        gradient6: "rgba(1, 36, 7, 0.47)",
        gradient7: "rgba(10, 36, 1, 0)",
        gradient8: "#01241c",
      },
      fontFamily: {
        first: ["Exo"],
        second: ["Yantramanav"],
        third: ["Ubuntu"],
      },
      maxWidth: {
        maxwidth: "366px",
      },
      screens: {
        wd: "1300px",
      },
      textShadow: {
        custom: "-3px 3px 2px rgba(0,0,0,0.38)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
