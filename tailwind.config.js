/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gadget": "#9538E2",
        "text-gadget": "#09080F",
      },
    },
  },
  plugins: [require("daisyui")],
};
