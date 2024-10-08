import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Default } from './styles/theme/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Default}>
      <GlobalStyle isDarkModeActive={false} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
