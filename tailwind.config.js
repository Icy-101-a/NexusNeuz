const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project
  ],
  darkMode: 'class', // or 'media' if you prefer to use media queries
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
        // 'aadi': '#01ee91'
        'dark-bg': '#1a202c', // Example dark background color
        'light-bg': '#f7fafc', // Example light background color
      },

      padding: {
        'placeholder-left': '0.5rem', // Custom padding for placeholder
      },

      fontFamily: {
        'display': ['Roboto', 'sans-serif'],
        'body': ['Inter', 'sans-sarif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities, e, theme, variants }) {
      const placeholderPadding = theme('padding.placeholder-left');
      addUtilities({
        '.placeholder-left': {
          '::placeholder': {
            paddingLeft: placeholderPadding,
          },
        },
      }, variants('placeholderPadding'));
    }),
  ],
}