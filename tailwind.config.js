/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'outfit-regular': ['Outfit', 'sans-serif'],
      },

      fontSize:{
        'par': '15px'
      },
    },

    backgroundImage:{
      'code': "url('/images/image-qr-code.png')",
    }
  },
  plugins: [
    require('daisyui'),
  ],
}