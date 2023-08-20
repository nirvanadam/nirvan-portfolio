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
        moveIcon: {
          "0%": {
            transform: "translate(0, 0)",
          },
          " 100%": {
            transform: "translate(100px, -100px)" /* Bergerak ke arah atas kanan */,
          },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        exit: "exit 1s ease-in-out forwards",
        moveIcon: "moveIcon 0.5s ease-in-out forwards alternate",
        marque: "marquee 10s ease-in-out forwards alternate",
      },
    },
  },
  plugins: [],
};
