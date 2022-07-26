/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        wine: {
          100: '#FBF2F2',
          300: '#AA0601',
          600: '#650300'
        },
        hairo:{
          100:'#00000029',
          300:'#DEE2E6',
          600:'#707070'
        },
        'choco':'#707070',
        'kaki':'#B75929',
      },


    },
  },
  plugins: [],
}
