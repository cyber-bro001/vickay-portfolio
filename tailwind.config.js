/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx,css}"],
  safelist: [
    'text-secondaryText',
    'bg-accentColor',
    'bg-cardBg',
    'text-primaryText',
    'bg-backgroundColor'
  ],
  theme: {
    extend: {
      animation:{
scroll: 'scroll 30s linear infinite',
      },
      keyframes:{
scroll: {
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' },
},
      },
      fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Satoshi", "sans-serif"],
    },
    colors: {
  // background
  backgroundColor: "#0A0C14",
  cardBg: "#11151F",

  // text
  primaryText: "#F5F0E6",
  secondaryText: "#A8B2C0",

  // accent (refined blue system)
  accentColor: "#3A7BD5",   // main
  accentHover: "#2F6AC0",   // hover
  accentSoft: "#3A7BD533",  // borders / subtle
  accentSubtle: "#3A7BD510",// light background
  accentLight: "#6FA8FF",   // links / highlights
},
    },
  },
  plugins: [],
}

