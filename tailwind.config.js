const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary': '#ee0181',
        'dark-bg': '#1a202c',
        'light-bg': '#f7fafc',
      },
      fontFamily: {
        'display': ['Roboto', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
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
