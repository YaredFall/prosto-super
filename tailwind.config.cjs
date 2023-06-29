const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-accent': colors.red["600"],
        'black-alpha': {
          "60": 'rgba(0,0,0,0.6)',
          "80": 'rgba(0,0,0,0.8)'
        },
        'secondary-accent': '#6EB90C'
      },
      rotate: {
        '15': '15deg',
        '30': '30deg'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.px-main-layout': {
          '@apply px-16 lg:px-32': {}
        },
        '.grid-main-layout': {
          '@apply grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8': {}
        }
      })
    })
  ]
}
