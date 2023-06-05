const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '0px 4px 20px var(--tw-shadow-color)'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        updown: 'updown 3.5s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        updown: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    }),
    require('tailwindcss-animated')
  ]
}
