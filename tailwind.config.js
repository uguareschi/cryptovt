const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        "nav-btn": "#D14707",
        "rich-black": "#000505",
        "deep-blue": "#2076FF",
        "sky-blue": "#34A1FD",
        violet: "#8A2EFF",
        "dark-orange": "#ED5007",
        orange: "#F86623",
        "shy-gray": "#D8D4D5",
      },
      inset: {
        "3px": "3px",
        "13px": "13px",
        "-148px": "-148px",
      },
      spacing: {
        "15px": "0.9375rem",
        "50px": "3.125rem",
        "151px": "9.4375rem",
        "177px": "11.0625rem",
        7: "1.875rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        21: "5.25rem",
      },
      height: {
        15: "60px",
        18: "72px",
        456: "456px",
        fit: "fit-content",
      },
      width: {
        15: "60px",
        "405px": "405px",
        fit: "fit-content",
      },
      height: {
        "3px": "3px",
      },
      minWidth: {
        2.5: "10rem",
        "75px": "4.6875rem",
        "235px": "14.6875rem",
      },
      minHeight: {
        "228px": "14.25rem",
      },
      maxWidth: {
        "2/3": "66%",
        "250px": "15.625rem",
        "311px": "19.4rem",
        "375px": "23.4375rem",
        "562px": "35.125rem",
        "695px": "43.43rem",
        "700px": "43.75rem",
      },
      maxHeight: {
        "222px": "13.875rem",
        "319px": "19.9375rem",
        "359px": "22.4375rem",
        456: "456px",
      },
      fontSize: {
        "13px": "0.8125rem",
        "15px": "0.9375rem",
        "17px": "1.0625rem",
        "21px": "1.3125rem",
        "22px": "1.375rem",
        "28px": "1.75rem",
        "32px": "2rem",
        "38px": "2.375rem",
        "40px": "2.5rem",
        "44px": "2.75rem",
        "52px": "3.25rem",
        "65px": "4.065rem",
        "180px": "11.25rem",
      },
      lineHeight: {
        "22px": "1.375rem",
        "25px": "1.5625rem",
        "26px": "1.625rem",
        "30px": "1.875rem",
        "35px": "2.1875rem",
        "45px": "2.8125rem",
        "48px": "3rem",
        "50px": "3.125rem",
        "65px": "4.0625rem",
        "140px": "8.75rem",
      },
      letterSpacing: {
        "widest-voicemix": "0.3em",
        "widest-ultra": "0.4em",
      },
      scale: {
        99: ".99",
      },
      borderWidth: {
        0.5: "0.5px",
        6: "6px",
      },
      borderRadius: {
        2.5: "1.25rem",
      },
      padding: {
        video: "42.8%",
        18: "72px",
      },
      zIndex: {
        "-10": "-10",
        100: 100,
        200: 200,
      },
      boxShadow: {
        article: "0px 0px 3px rgba(0, 0, 0, 0.08)",
        card: "0 0 0.3rem rgba(0, 0, 0, .2)",
        btn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        subcard: "0px 0px 4px rgba(0, 0, 0, 0.12)",
      },
      blur: {
        "1.5px": "1.5px",
      },
      backgroundImage: {
        "hero-desktop": "url('../images/hero-desktop.png')",
        "hero-mobile": "url('../images/hero-mobile.png')",
      },
    },
    fontFamily: {
      "Arturito-Slab": ["Arturito Slab"],
      Gotham: ["Gotham"],
      "Gotham-Book": ["Gotham Book"],
      inter: ["Inter", "Helvetica", "sans-serif"],
      averta: ["Averta", "sans-serif"],
    },
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
