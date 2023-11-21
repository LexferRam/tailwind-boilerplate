import type { Config } from 'tailwindcss'
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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

      // ShadCn

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'), // usar clase: scrollbar-hide
    require('@tailwindcss/container-queries')
  ],
}
export default config
