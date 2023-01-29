/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'background_teste': 'url(../assets/bg.svg)',
        'sobre_bg': 'url(../assets/sobreBG.svg)',
        'projetos_bg': 'url(../assets/projetos.svg)',
        'contato_bg': 'url(../assets/contatoBG.svg)',
      },

      animation: {
        type: 'typing 3s steps(30, end), blink .75s step-end infinite'
      },
      keyframes: {
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' }
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
        }
      },

      screens: {
        'xmd': '1022px',
        ...defaultTheme.screens
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
