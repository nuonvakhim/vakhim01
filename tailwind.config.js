/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  "fontawesome-svg-core": {
    license: "free",
  },
  theme: {
    darkMode: false,
    extend: {
      backgroundImage: {
        homepage: "url('/src/assets/Background/BgImage.svg')",
        mainbg: "url('/src/assets/Background/mainfeature1.svg')",
        circlebg: "url('/src/assets/Background/HowitworksBg.svg')",
        footerbg: "url('/src/assets/Background/BgFooter.svg')",
        notFound: "url('/src/assets/Background/Pagenotfound.svg')",
      },
      fontFamily: {
        myText: ["Kantumruy Pro", "sans-serif"],
        "sp-pro-text-light": ["sp-pro-text-light", "sans-serif"],
      },
      colors: {
        primary: "#004461",
        secondary: "#C31E0A",
        lightprimary: "#A3C9D9",
        mypink: "#F901A2",
        mypurple: "#6154C8",
        lightgray: "#F5F5F5",
        myText: "#324C5B",
        framecolor: "#F5F5F5",
        iconcolor: "#5D6D79",
        textblack: "#333333",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1900px",
        "lt-14": "1366px",
        "lt-15": "1440px",
        "lt-16": "1728px",
      },
      height: {
        btnheight: "41px",
      },
      borderRadius: {
        myrounded: "6px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      boxShadow: {
        "myshadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }
    },
  },
  plugins: ["macros"],
  daisyui: {
    themes: false,
  },
};
