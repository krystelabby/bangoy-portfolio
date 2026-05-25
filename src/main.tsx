import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { assets } from './assets'
import { setFavicon } from './lib/setFavicon'
import './index.css'
import App from './App.tsx'

void setFavicon(assets.profile)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
