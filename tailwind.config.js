/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    screens: {
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        Mred: '#A02C2C',
        Wred: '#FF0000',
        Myellow: '#F7EEDD',
        yw: '#FFBF00',
        gold: '#b4a27f',
        gray: '#707070',
        lgray: '#828282',
        llgray: '#BBBBBB',
        wrap: 'rgba(0, 0, 0, 0.5)',
        Btable: 'rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        logo1: "url('/src/assets/image/logo/logo01.png')",
        logo2: "url('/src/assets/image/logo/logo02.png')",
        logo3: "url('/src/assets/image/logo/logo03.png')",
        bgword: "url('/src/assets/image/other/CHUEIKUN.png')",
        bread: "url('/src/assets/image/other/bx-right-arrow-alt.png')",
        right: "url('/src/assets/image/other/right.png')",
        rightW: "url('/src/assets/image/other/right(white).png')",
        down: "url('/src/assets/image/other/down.png')",
        date: "url('/src/assets/image/other/calendar.png')",
        bag: "url('/src/assets/image/other/shopping-bag-line.png')",
        cart: "url('/src/assets/image/other/cart.png')",
        talk: "url('/src/assets/image/other/comments-solid.png')",
      },
      boxShadow: {
        'mYellow': '2px 2px 0px 2px #F6EEDD',
        'main': '0px 3px 6px rgba(0, 0, 0, 0.16)'
      },
      gridTemplateColumns: {
        'product': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' }
        },
        bounce_in: {
          '0%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1.25)' },
          '60%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
      },
      animation: {
        marquee: 'marquee 7s linear infinite',
        zoomInOut: 'zoomInOut 3s ease-in-out infinite',
        bounceIn: 'bounce_in 0.5s ease-in-out'
      }
    },
  },
  plugins: []
}
