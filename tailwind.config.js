const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.sky,
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/line-clamp'),
  ],
}
