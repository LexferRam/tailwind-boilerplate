import type { Config } from 'tailwindcss'

const config: Config = {
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

        // 'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        // 'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        // 'yosemite': "url('../img/yosemite.jpg')",
        // 'LA': "url('../img/LA.jpg')",
        // 'seattle': "url('../img/seattle.jpg')",
        // 'new_york': "url('../img/new_york.jpg')",
        // 'norway': "url('../img/norway.jpg')",
        // 'sydney': "url('../img/sydney.jpg')",
        // 'miami': "url('../img/miami.jpg')",
        // 'switzerland': "url('../ img/switzerland.jpg')",
        // 'bali': "url('../img/bali.jpg')",
        // 'chicago': "url('../img/chicago.jpg')",
        // 'europe': "url('../img/europe.jpg')",
        // 'iceland': "url('../img/iceland.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar-hide'), // usar clase: scrollbar-hide
    require('@tailwindcss/container-queries')
  ],
}
export default config
