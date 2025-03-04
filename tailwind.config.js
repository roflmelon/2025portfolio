/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
          primary: "#0C0C0C",
          secondary: "#171717",
        },
        light: {
          50: "#ffffff",
          100: "#f7f7f7",
          200: "#e1e1e1",
          300: "#cfcfcf",
          400: "#b1b1b1",
          500: "#9e9e9e",
          600: "#7e7e7e",
          700: "#626262",
          800: "#515151",
          900: "#3b3b3b",
          primary: "#f0f0f0",
          secondary: "#d9d9d9",
        },
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url(./assets/images/HomePageGraphic.png)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url(./assets/images/EvolveText.png)",
        abstractwaves: "url(./assets/images/AbstractWaves.png)",
        sparkles: "url(./assets/images/Sparkles.png)",
        circles: "url(./assets/images/Circles.png)",
      },
      screens: {
        xs: "480px",
        s: "768px",
        m: "1060px",
      },
    },
  },
  plugins: [],
};
