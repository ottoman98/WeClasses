/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily:{
'main':['"Playfair Display"', 'serif']

    },
    screens:{
      'xs':'300px',
      ...defaultTheme.screens
    
    },
    

  },
  plugins: [ require('flowbite/plugin')],
}

