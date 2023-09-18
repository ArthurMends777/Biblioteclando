import React from "react"
import { Routes } from "./src/routes"
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/theme'
export default function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Routes />
    </ThemeProvider>
  );
}