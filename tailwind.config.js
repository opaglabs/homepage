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
      },
      height: {
        'calc-56': 'calc(100vh - 56px)',
        'calc-96': 'calc(100vh - 96px)'
      },
      boxShadow: {
        'neobrutalism': '5px 5px 0px 1px #000000',
        'neobrutalism-min': '2px 2px 0px 1px #000000'
      },
      colors: {
        'base-1': '#00B4FF',
        'base-2': '#DB2777',
        'base-3': '#CEBD26',
        'base-4': '#7C08FC',
        'base-5': '#DB2777',
        'base-6': '#41B883',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
