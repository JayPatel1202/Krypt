module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      // 'mf' media query config
      screens: {
        mf: '990px',
      },
      keyframes: {
        // keyframe animations
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(120%)',
            transform: 'translateX(120%)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/forms')],
};
