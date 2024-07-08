const { fontFamily, screens } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '475px',
      ...screens,
    },
    extend: {

      fontFamily: {
        text: ["var(--font-text)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans]
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        card: "hsl(var(--card))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "card-down": "card-down 0.3s ease-out",
        "card-up": "card-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true })],
}