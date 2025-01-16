import { useState } from 'react'
import './App.css'
import "/home/ehab/React Assignment 1/React-AS-1/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar/Navbar'
import "/home/ehab/React Assignment 1/React-AS-1/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Footer from './Components/Footer/Footer'
import "/home/ehab/React Assignment 1/React-AS-1/node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Start from './Components/Start/Start'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider, Navigate,createHashRouter } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
function App() {
  const router = createHashRouter([
    {
      path: "", element: <MainLayout />, children: [
        {path:"start",element:<Start/>},
        { path: "/", element: <Navigate to="/about" replace /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> }

      ]
    }


  ])


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
