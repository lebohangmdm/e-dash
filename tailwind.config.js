/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-default": "#116759",
        "green-10": "#0f5d50",
        "green-30": "#0c483e",
        "green-50": "#09342d",
        "brownish-0": "#141312",
        "brownish-10": "#282625",
        "light-brownish": "#f9f9f8",
        "light-brown": "#c6bfb7",
        "lighter-brown": "#d1ccc5",
      },
      fontFamily: {
        roboto: ["Roboto"],
        mono: ["Roboto Mono"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
