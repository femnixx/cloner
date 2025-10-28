import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import auth from './pages/auth'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<auth />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App