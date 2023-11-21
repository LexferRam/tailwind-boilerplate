import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme';

// un plugin nos permite abstraer la complejidad de la implementacion del tema(basado en un sistema de diseno)
// en un archivo con todo lo que necesita hacer y lo podremos reusar entre distintos proyectos.
// de esta forma tenemos mas escalabilidad a medida que se agregen mas plugins y configuraciones

export const shadcnPlugin = plugin(

    // 1️⃣ Add CSS variable definitions to the base layer ✅
    function ({ addBase }) {

        // copy layer base variables from globals.css
        // go to: https://transform.tools/css-to-js 
        // convert CSS to JS Objects
        addBase({
            ":root": {
                "--background": "0 0% 100%",
                "--foreground": "222.2 84% 4.9%",
                "--card": "0 0% 100%",
                "--card-foreground": "222.2 84% 4.9%",
                "--popover": "0 0% 100%",
                "--popover-foreground": "222.2 84% 4.9%",
                "--primary": "300 75% 90%",
                "--primary-foreground": "300 75% 20%",
                "--secondary": "180 75% 90%",
                "--secondary-foreground": "180 75% 20%",
                "--muted": "210 40% 96.1%",
                "--muted-foreground": "215.4 16.3% 46.9%",
                "--accent": "210 40% 96.1%",
                "--accent-foreground": "222.2 47.4% 11.2%",
                "--destructive": "0 84.2% 60.2%",
                "--destructive-foreground": "210 40% 98%",
                "--border": "214.3 31.8% 91.4%",
                "--input": "214.3 31.8% 91.4%",
                "--ring": "222.2 84% 4.9%",
                "--radius": "0.5rem"
            },
            ".test": {
                "--background": "222.2 84% 4.9%",
                "--foreground": "210 40% 98%",
                "--card": "222.2 84% 4.9%",
                "--card-foreground": "210 40% 98%",
                "--popover": "222.2 84% 4.9%",
                "--popover-foreground": "210 40% 98%",
                "--primary": "300 75% 40%",
                "--primary-foreground": "300 50% 98%",
                "--secondary": "180 75% 30%",
                "--secondary-foreground": "180 40% 98%",
                "--muted": "217.2 32.6% 17.5%",
                "--muted-foreground": "215 20.2% 65.1%",
                "--accent": "217.2 32.6% 17.5%",
                "--accent-foreground": "210 40% 98%",
                "--destructive": "0 62.8% 30.6%",
                "--destructive-foreground": "210 40% 98%",
                "--border": "217.2 32.6% 17.5%",
                "--input": "217.2 32.6% 17.5%",
                "--ring": "212.7 26.8% 83.9%"
            }
        })

        addBase({
            '*': {
                '@apply border-border': {}
            },
            'body': {
                '@apply bg-background text-foreground': {}
            }
        })

    },

    // 2️⃣ Extend the tailwind theme with "themable" utilities, allwos us to access to all props from tailwind config ✅
    {
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
        }
    }

)