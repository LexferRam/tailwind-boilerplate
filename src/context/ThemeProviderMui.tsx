'use client'

import { ThemeProvider } from "@material-tailwind/react";

const ThemeProviderMui = ({children}: any) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default ThemeProviderMui