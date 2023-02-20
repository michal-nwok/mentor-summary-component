/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        "slate-blue": "hsl(252, 100%, 67%)",
        "royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "main-purple": "#5d3efb",
        "dark-gray": "hsl(224, 30%, 27%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "light-red": "hsl(0, 100%, 67%)",
        "orange-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
      },
      borderRadius: {
        "5xl": "2rem",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-(light-red|orange-yellow|green-teal|cobalt-blue)/,
    },
  ],
};
