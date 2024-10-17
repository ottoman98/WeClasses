/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
  
    screens:{
      'xs':'300px',
      ...defaultTheme.screens
    
    },
    extend:{

      colors:{
        'customBlack':'#313140',
        'light-blue':'#1f8ece'
        
      } ,
       fontFamily:{
'main':['"Poppins"', 'sans-serif']

    },
    }
    

  },
  plugins: [ require('flowbite/plugin')],
}

