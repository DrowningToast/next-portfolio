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
      backgroundImage: {
        "custom-radical-gradient":
          "radial-gradient(145.88% 145.88% at 50% -14.69%, #00D4FF 0%, #3B82F6 29.63%, #000000 100%);",
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
