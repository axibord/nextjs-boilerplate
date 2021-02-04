module.exports = {
  purge: {
    enabled: false,
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  },

  darkMode: false, // or 'media' or 'class'

  theme: {
    screens: {
      tablet: '640px',

      laptop: '1024px',

      desktop: '1280px',

      bigDesktop: '1536px',
    },
    extend: {
      fontFamily: {
        sen: ['Sen', 'mono'],
        poppins: ['Poppins', 'mono'],
      },
      colors: {
        orangeMain: '#FFA776',
        redCta: '#FF686E',
        orangeSoft: '#FFDCC8',
        textDeepBlue: '#20284F',
      },
      height: (theme) => ({
        'screen-70': '70vh',
        'screen/2': '50vh',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
    },
  },

  variants: {
    extend: {
      scale: ['active'],
      opacity: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
