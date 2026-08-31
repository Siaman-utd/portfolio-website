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
        // This links ALL your theme variables (colors and borders) into Tailwind!
        "data-green": "var(--data-green)",
        "data-green-dark": "var(--data-green-dark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        background: "var(--background)",
        border: "var(--border)",
        "border-dark": "var(--border-dark)",
      },
    },
  },
  plugins: [],
}


