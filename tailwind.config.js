/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax: ["Chillax-Variable"],
      },
      colors: {
        primary: "#161717",
        secondary: "#1d1e1f",
      },
      keyframes: {
        exit: {
          "0%": { transform: "translateY(0) translateZ(0)", opacity: "1", display: "flex" },
          "50%": { transform: "translateY(50px) translateZ(0)", opacity: "0.5" },
          "100%": { transform: "translateY(100px) translateZ(0)", opacity: "0", display: "none" },
        },
      },
      animation: {
        exit: "exit 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
