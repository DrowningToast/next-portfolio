module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050505",
        primary: "#487CE2",
        secondary: "#95B3EE",
        tertiary: "#DCF9EF",
        intern: "#7246D1",
        alttertiary: "#DCF9EF",
      },
      fontSize: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      width: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      height: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      screens: {
        por: {
          raw: "(orientation: portrait)",
        },
        lan: {
          raw: "(orientation: landscape)",
        },
      },
    },
  },
  plugins: [],
};
