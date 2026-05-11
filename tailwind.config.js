/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.36)",
        glow: "0 0 48px rgba(138, 180, 248, 0.2)"
      },
      colors: {
        ink: {
          950: "#050914",
          900: "#0b1220",
          800: "#0f172a"
        },
        signal: {
          green: "#8ab4f8",
          blue: "#7dd3fc",
          amber: "#fbbf24",
          rose: "#fb7185"
        }
      }
    }
  },
  plugins: []
};
