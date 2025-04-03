/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'in-gray': '#F4F4F4',
      'gray': '#777',
      'white' : '#FFFFFF',
      'black' : '#000',
      'namblue' : '#003C82',
    },
    extend: {},
  },
  plugins: [],
};
