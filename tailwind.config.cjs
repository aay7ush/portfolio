/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      colors: {
        "clr-accent": "#EF6D58",
        "clr-dark": "#28293E",
        "clr-light": "#FDF0E9",
        "clr-primary": "#391400",
      },
    },
  },
  plugins: [],
}
