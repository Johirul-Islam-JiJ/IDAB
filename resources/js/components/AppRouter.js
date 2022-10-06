import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from './contact/Contact'
import About from './about/About'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="./contact/Contact.jsx" element={
            <Contact />
        } />
        <Route path="./about/About.jsx" element={
            <About />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
