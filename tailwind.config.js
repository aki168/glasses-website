/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      // 設定主色系
      colors: {
        wine: {
          100: '#FBF2F2',
          300: '#AA0601',
          500: '#9F1213',
          600: '#650300'
        },
        hairo:{
          100:'#00000029',
          200:'#DCDCDC',
          250:'#555555',
          300:'#DEE2E6',
          350:'#495057',
          400:'#CED4DA',
          500:'#555555',
          600:'#707070'
        },
        'choco':'#5F3E2D',
        'kaki':'#B75929',
      },

    },
      //設定背景路徑
      backgroundImage: {
        'hero': "url('./img/home-header.png')",
        'hero-sm': "url('./img/home-header-sm.png')",
        'index': "url('./img/index-bg.png')",
        'index-md': "url('./img/index-bg-md.png')",
        'index-sm': "url('./img/index-bg-sm.png')",
      }

  },
  plugins: [],
}

// 通用的斷點數值
// 平板斷點：992px ->用tail的 lg 1024 px
// 手機斷點：767px ->用tail的 md 768 px


// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }