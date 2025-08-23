/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Make Ubuntu the default font for all text
      sans: ["var(--font-ubuntu)", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
