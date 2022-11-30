import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColourModeProvider } from './context'
import { Router } from './routes'
import { GlobalStyles } from './styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ColourModeProvider>
      <Router />
    </ColourModeProvider>
  </React.StrictMode>
)
