import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WalletsContextProvider } from './context/WalletsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletsContextProvider>
  </StrictMode>,
)
