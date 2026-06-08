import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>
      Run <code>pnpm ladle</code> to view components.
    </p>
  </StrictMode>,
)
