import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Routes'
import { RouterProvider } from 'react-router-dom'
import { ProtocolProvider } from './context/ProtocolContext'

createRoot(document.getElementById('root')).render(
  <ProtocolProvider>
    <RouterProvider router={router} />
  </ProtocolProvider>
)
