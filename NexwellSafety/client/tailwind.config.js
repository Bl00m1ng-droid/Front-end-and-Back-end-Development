// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#060607",
        orange: "#ff5100",
        white: "#fafafa",
        lightGray:"#a7a7a7",
        darkGray:"#333333"
      },
    },
  },
  plugins: [],
}
