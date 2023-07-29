/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tsBlue: {
          100: "#007acc",
          200: "#0053A0"
        },
        tsWhite: {
          100: "#ffffff",
          200: "#E6F4F1"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated')
  ],
  daisyui: {
    themes: [
      {
        librosDevTheme: {
          "primary": "#0053A0",
          "secondary": "#009FDE",
          "accent": "#5c80ce",
          "neutral": "#262831",
          "base-100": "#007acc",
          "info": "#9fdef9",
          "success": "#19a46a",
          "warning": "#facd47",
          "error": "#f56b61",
        },
      },
    ],
  },
}
