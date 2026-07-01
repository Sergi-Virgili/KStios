/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#0891b2",
          700: "#0e7490",
          900: "#164e63",
          950: "#083344",
        },
        accent: {
          50: "#fdf2f8",
          500: "#ec4899",
          700: "#be185d",
          950: "#500724",
        },
      },
      borderRadius: {
        surface: "1.5rem",
        hero: "2rem",
      },
      boxShadow: {
        surface: "0 18px 45px rgba(15, 23, 42, 0.10)",
        interactive: "0 14px 30px rgba(8, 51, 68, 0.22)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
