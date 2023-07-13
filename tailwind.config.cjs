const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui']
      },
      textShadow: {
        DEFAULT: '0px 4px 20px var(--tw-shadow-color)'
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      colors: {
        background: '#111318',
        cardBackground: '#F9F8F6',
        linkedin: '#0A66C2'
      },
      backgroundImage: {
        instagram: 'radial-gradient(147.19% 128.80% at 0% 100.00%, #FDF497 0%, #FDF497 9.14%, #FD5949 40.71%, #D6249F 64.53%, #285AEB 100%)'
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
