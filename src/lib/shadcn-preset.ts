import { shadcnPlugin } from "./shadcd-plugin";
const withTM = require('next-transpile-modules')(["@material-tailwind/react"]); 

export const shadcnPreset = withTM({
    darkMode: ["class"],
    content: [],
    plugins: [
        shadcnPlugin,
        require('tailwindcss-animate'),
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/container-queries')
    ]
})