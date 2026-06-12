/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#173246",
        cocoa: "#2b5f75",
        rose: "#20AFC0",
        sage: "#1E6F8C",
        cream: "#F7F2EA",
        shell: "#E8F4F7",
        lavender: "#1E6F8C"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 50, 70, 0.12)"
      }
    }
  },
  plugins: []
};
