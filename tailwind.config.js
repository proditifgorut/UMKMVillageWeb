// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-(blue|green|purple|orange|pink|indigo|rose|amber|emerald|teal|cyan)-(100|500|600|700)/,
    },
    {
      pattern: /text-(blue|green|purple|orange|pink|indigo|rose|amber|emerald|teal|cyan)-(600)/,
    },
    {
      pattern: /from-(pink|green|amber|purple|teal|blue)-(500)/,
    },
    {
      pattern: /to-(rose|emerald|orange|indigo|cyan)-(500)/,
    }
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(229 231 235 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
