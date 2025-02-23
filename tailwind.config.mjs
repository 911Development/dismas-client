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
      letterSpacing: {
        headerSpacing: "14px",
        menuSpacing: "4px",
      },
      lineHeight: {
        heroLine: "1em",
        heroLineAlt: "1.27em",
        heroLineUI: "1.5em",
      },

      fontWeight: {
        slim: "200",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },

      fontSize: {
        small: "1rem",
        medium: "1.4rem",
        large: "2rem",
        xlarge: "2.5rem",
        xxlarge: "15rem",
        xxlargealt: "13rem",
        xxxlarge: "30rem",

        xxxlargealt: "25rem",
      },

      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
