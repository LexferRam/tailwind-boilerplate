import { type Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcd-plugin";

export const shadcnPreset = {
    darkMode: ["class"],
    content: [],
    plugins: [
        shadcnPlugin,
        require('tailwindcss-animate'),
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/container-queries')
    ]
} satisfies Config