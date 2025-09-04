/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: { 
    "primary-100":"#004D85",
    "primary-200":"#56A6E9",
    "accent-100":"#0077B6",
    "accent-200":"#00A8E8",
    "text-100":"#FFFFFF",
    "text-200":"#000000",
    "bg-100":"#E6F2FF",
    "bg-200":"#e6f2ff",
    "bg-300":"#b4bfcc",

      },
      fontFamily: { sans: ["Work Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
