import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Routes'
import { RouterProvider } from 'react-router-dom'
import { ProtocolProvider } from './context/ProtocolContext'
import { ExerciseProvider } from './context/ExerciseContext'

createRoot(document.getElementById('root')).render(
  <ProtocolProvider>
    <ExerciseProvider>
      <RouterProvider router={router} />
    </ExerciseProvider>
  </ProtocolProvider>
)
