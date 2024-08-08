/** @type {import('tailwindcss').Config} */

const path = require('path');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkgray: "hsl(0, 0%, 63%)",
          black: "hsl(0, 0%, 0%)",
          white: "hsl(0, 0%, 100%)",
          vdarkgray: "hsl(0, 0%, 27%)",
        }
      },

      fontFamily: {
        body: ["Work Sans"],
      },

      backgroundImage: {
        'header-image': `url(${path.resolve(__dirname, 'src/assets/images/desktop-image-hero-1.jpg')})`,
        'header-image2': `url(${path.resolve(__dirname, 'src/assets/images/desktop-image-hero-2.jpg')})`,
        'header-image3': `url(${path.resolve(__dirname, 'src/assets/images/desktop-image-hero-3.jpg')})`,
        'image-dark': `url(${path.resolve(__dirname, 'src/assets/images/image-about-dark.jpg')})`,
        'image-light': `url(${path.resolve(__dirname, 'src/assets/images/image-about-light.jpg')})`,
      }
    },
  },
  plugins: [],
}

