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