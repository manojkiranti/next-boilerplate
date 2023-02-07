/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      'nunito': ['Nunito', 'sans-serif']
    },
    // boxShadow: {
    //   "custom-light": " 0 0 10px #313131",
    //   "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    // },
    extend: {
      colors: {
        'primary': {
          DEFAULT: 'rgba(221,38,37)',
          400: "#c81413"
        },
        'muted': {
          DEFAULT: '#6c757d'
        },
        'secondary': {
          DEFAULT: '#000'
        },
        'green': {
          DEFAULT: '#00f260'
        },
        'themeBg': {
          DEFAULT: '#C6D6E5'
        },
        'dark': {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#DD2625",
          secondary: "#6E6E6E",
          "primary-focus": "#c81413",
        },
      },
      {
        dark:{
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#DD2625",
          secondary: "#6E6E6E"
        }
      }
    ]
  },
}
