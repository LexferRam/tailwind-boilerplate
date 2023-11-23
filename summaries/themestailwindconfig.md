# Agregar multiples temas con tailwind y variables de CSS.

## **Pasos para crear multiples Temas:**

proyect url: <https://play.tailwindcss.com/YelhilBeHb>

1. creamos variables en la directiva, con los distintos themes que queremos tener (@layer base) para tenerlos de forma global en el proyecto.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-text-base: 255, 255, 255;
    --color-text-muted: 199, 210, 254;
    --color-text-inverted: 79, 70, 229;
    --color-fill: 67, 56, 202;
    --color-button-accent: 255, 255, 255;
    --color-button-accent-hover: 238, 242, 255;
    --color-button-muted: 99, 102, 241;
  }
  .theme-swiss {
    --color-text-base: 255, 255, 255;
    --color-text-muted: 254, 202, 202;
    --color-text-inverted: 220, 38, 38;
    --color-fill: 185, 28, 28;
    --color-button-accent: 255, 255, 255;
    --color-button-accent-hover: 254, 242, 242;
    --color-button-muted: 239, 68, 68;
  }
  .theme-neon {
    --color-text-base: 17, 24, 2;
    --color-text-muted: 47, 67, 6;
    --color-text-inverted: 235, 250, 204;
    --color-fill: 179, 255, 23;
    --color-button-accent: 36, 52, 3;
    --color-button-accent-hover: 55, 79, 5;
    --color-button-muted: 212, 255, 122;
  }
}

```

2. extendemos las clases de tailwind en el archivo **tailwind.config.ts** y agregamos las nuestras:

```ts
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

```

3. ejemplo de uso de un theme, en el contenedor mas alto usamos el tema creado **theme-swiss** para que se apliquen los estilos correspondientes: 

```html
  <!-- Call to action -->
  <div class="theme-swiss relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
    <img class="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
    <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
    <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-skin-base sm:text-4xl">
        <span class="block">Focus on your content.</span>
        <span class="block">We handle the distribution.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-skin-muted">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
      <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <a href="#" class="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="#" class="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Live demo </a>
        </div>
      </div>
    </div>
  </div>
```

---

## **Theme configuration (tailwind.config.ts)**

Customizing the default theme for your project.
The theme section of your tailwind.config.js file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

**screen**

Ejemplo: The screens key allows you to customize the responsive breakpoints in your project.

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

**Colors**

By default, these colors are inherited by all color-related core plugins, like backgroundColor, borderColor, textColor, and others.

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },

      // ...
    }
  }
}
```

**Extending the default theme**

If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the theme.extend key in your configuration file. Values under this key are merged with existing theme values and automatically become available as new classes that you can use.

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif', // Adds a new `font-display` class
      }
    }
  }
}
```

**Overriding the default theme**

To override an option in the default theme, add your overrides directly under the theme section of your tailwind.config.js:

```ts 
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    }
  }
}
```

This will completely replace Tailwind’s default configuration for that key, so in the example above none of the default opacity utilities would be generated.

Any keys you do not provide will be inherited from the default theme, so in the above example, the default theme configuration for things like colors, spacing, border-radius, background-position, etc. would be preserved.

---

## Ejemplo uso de CVA y cn(fn utility de twMerge y clsx)

**NOTA:** con CVA no es necesario usar twMerge, se puede usar el prop opcional className (extending components de CVA)

```ts
// ejemplo extraido de chadcn
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
 
import { cn } from "@/lib/utils"
 
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
 
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
 
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
 
export { Badge, badgeVariants }
```

---

## Creating High-Quality React Components: Best Practices for Reusability

package and reuse functionality, implement the best practices when it comes to making reusable react components that allows us to type save the props of the component:
Dependencies nedded:

1. clsx                     (utility for constructing className strings conditionally)
2. tailwind-merge           (Merge Tailwind CSS classes without style conflicts)
3. class-variance-authority (to handle conditional tailwind clasess)

* Create this util function:

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

* Create the component:

```ts
import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

* Button usage:

```jsx
<Button
  variant="ghost"
  className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
>
  <Icons.logo className="mr-2 h-4 w-4" />{' '}
  <span className="font-bold">Menu</span>
</Button>
```

**NOTA:** se usa forwardRef para pasar una ref a un componente de función (el prop ref para acceder al elemento DOM del componente).

En general, se recomienda usar forwardRef en lugar de ref directamente en los siguientes casos:

* Cuando se quiere pasar una ref a un componente de función. Los componentes de función no pueden aceptar el prop ref directamente. Para pasar una ref a un componente de función, se debe usar forwardRef.

* Cuando se quiere pasar una ref a un componente personalizado. Los componentes personalizados no pueden aceptar el prop ref directamente. Para pasar una ref a un componente personalizado, se debe usar forwardRef.


---

## App structure (recommended by Shadcn)

```markdown
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

```

---

## Tailwind CSS Animated

playground: <https://www.tailwindcss-animated.com/configurator.html>

* Install the plugin from npm:

```cmd
npm i tailwindcss-animated
```

* Then add the plugin to your tailwind.config.js file:

```ts
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-animated')
  ],
}
```

* If you want to change some animations, extend your tailwind.config.js file:

```ts
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animationDelay: {
        275: '275ms',
        5000: '5s',
      },
      animationDuration: {
        2000: '2s',
        'long': '10s',
        'very-long': '20s',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
```

---

## Agrupado de Rutas en NextJS

Al crear una carpeta envuelta en (parentesis), no solo podemos organizar mejor nuestros archivos, sino que también podríamos definir diferentes layout / loading / error para grupos de rutas que están al mismo nivel (o incluso tener layouts anidados). Ahora, nuestra carpeta components está colocada lo más cerca de donde es relevante posible. 

---

## Convention to name ReactJS components

```javascript 

// Component name pattern ([] = optional)
// [Domain]Element[Modifier]

// Good ✅
// Domain: User, Element: Avatar, Modifier: Image
export const UserAvatarImage = () => {}

// Good ✅
// Domain: Product, Element: List, Modifier: none
export const ProductList = () => {}

// Bad ❌
export const User = () => {}

```

---

## Steps to Install Shadcn

1. init Chadcn:

```cmd
npx shadcn-ui@latest init
```

2. ou will be asked a few questions to configure components.json.

3. Fonts, 

- Import the font in the root layout:

```ts
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "../@/lib/utils"
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        ...
      </body>
    </html>
  )
}
```

 - Configure theme.extend.fontFamily in tailwind.config.js

 ```ts 
const { fontFamily } = require("tailwindcss/defaultTheme")
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
}
 ```

4. You can now start adding components to your project. Example:

```cmd
npx shadcn-ui@latest add button
```

---

## Font Optimization

Docs: <https://nextjs.org/docs/pages/building-your-application/optimizing/fonts>
Video: <https://www.youtube.com/watch?v=L8_98i_bMMA>

---
## Theming strategy.

Chadcn is a set of reusable components built with RadixUI and tailwind CSS, this is not a component library but rather a set of component that you can copy and paste in your projects as a starting point.

