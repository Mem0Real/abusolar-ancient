/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/images/hero3.jpg')",
        heroServiceBg: "url('/images/hero2.jpg')",
        aboutBg: "url('/images/about2.jpg')",
        projectBg: "url('/images/project.jpg')",
        productBg: "url('/images/product.png')",
        serviceBg: "url('/images/service.jpg')",
      },
      fontFamily: {
        montserrat: ["MontserratLight"],
        sans: ["MontserratLight", "sans-serif"],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  corePlugins: {
    fontFamily: true,
  },
};
