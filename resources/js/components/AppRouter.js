import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from './about/About'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="./about/About.jsx" element={
            <About />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
