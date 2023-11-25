/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    corePlugins: {
      preflight: true,
    },
    theme: {
      extend: {
        fontFamily: {
          bangers: ["Bangers", "cursive"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        colors: {
            customBlack: '#1C1F23',
            customBlue: '#58BBCF',
            customGreen: '#16DB65',
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
    ],
    preflight: true,
  };
