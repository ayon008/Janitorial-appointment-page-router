/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': '#FBFCFF',
        'blue': '#E8FFFE',
        'gray': '#919191',
        'gray-1': '#D3D3D3',
        'orange': '#C6250C',
        'orange-1': '#FF8C3A',
        'orange-light': '#FFB683',
        'yellow': '#FFF900',
        'deep-blue': '#0B286D',
        'state': '#14516D',
        'secondary': '#0f3141',
        'primary': '#6073FC',
      },
      backgroundImage: {
        'login': "url('/assets/Untitled_result_result.webp')",
      },
      gridTemplateRows: {
        'custom-rows': '2fr 2fr 1fr',
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
}
