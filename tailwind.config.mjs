/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: "rgb(var(--color-primary))",
        //   darker: "rgb(var(--color-primary-darker))",
        //   lighter: "rgb(var(--color-primary-lighter))",
        // },

        // black: "rgb(var(--color-black))",
        // dark: "rgb(var(--color-dark))",
        // darker: "rgb(var(--color-darker))",

        // light: "rgb(var(--color-light))",
        // lighter: "rgb(var(--color-lighter))",
        // white: "rgb(var(--color-white))",

        muted: {
          DEFAULT: "rgb(var(--color-muted))",
        },
      },

      borderColor: {
        DEFAULT: "rgba(var(--color-border))",
        dark: "rgba(var(--color-border-dark))",
      },

      transitionDuration: {
        DEFAULT: "0.15s",
      },

      transitionDelay: {
        DEFAULT: "0.15s",
      },
    },
  },
  plugins: [],
};
