/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#202020",
        green: "#197741",
        "green-10": "#259d58",
        "primary-color": "#982270",
        "primary-color-10": "#bf3f94",
        "primary-color-20": "#6e0a4c",
        yellow: "#ffc700",
        gray: "#d9d9d9",
        red: "#f91414",
        "dark-gray": "#282828",
      },
    },
  },
  plugins: [],
};
