/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        primary: ['"Montserrat"'],
      },
      colors: {
        primary: '#800080',
        secondary: '#F5E6E0',
      },
      animation: {
        'ring': 'ring 1s infinite alternate',
      },
      keyframes: {
        ring: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  plugins: [],
};
