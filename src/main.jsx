import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Routes.jsx'



createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
 </div>
)
