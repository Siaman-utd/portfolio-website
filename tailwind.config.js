/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This maps your template's custom green CSS variables into Tailwind!
        "data-green": "var(--data-green)",
        "data-green-dark": "var(--data-green-dark)",
        primary: "var(--primary)",
        surface: "var(--surface)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
}