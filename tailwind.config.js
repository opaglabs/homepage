module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'arrow': {
          '0%': {
            'opacity': '0'
          },
          '40%': {
            'opacity': '1'
          },
          '80%': {
            'opacity': '0'
          },
          '100%': {
            'opacity': '0'
          },
        },
      },
      animation: {
        'arrow': 'arrow 2s infinite',
      },
      animationDelay: {
        '-1000ms': '-1000ms',
        '-500ms': '-500ms',
        '0ms': '0ms',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
