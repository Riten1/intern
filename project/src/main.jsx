import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Service from './pages/Service.jsx'
import Agency from './pages/Agency.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/service',
    element: <Service />
  }, 
  {
    path: '/agency',
    element: <Agency />
  }, 
  {
    path: '/case-study',
    element: <CaseStudy />
  }, 
  {
    path: '/resources',
    element: <Resources />
  }, 
  {
    path: '/contact',
    element: <Contact />
  }, 

]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    
  </React.StrictMode>,
)
