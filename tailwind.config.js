module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#EA421A",
        landingBgColor: "#FDECE8",
        footerBgColor: "#1F1F1F",
      },
    },
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
};
