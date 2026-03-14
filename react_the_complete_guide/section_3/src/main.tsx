import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='h-screen w-screen  bg-linear-to-t from-purple-800 to-purple-900'>
      <App />
    </div>
  </StrictMode>,
)
