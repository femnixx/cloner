import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './frontend/Frontpage'
import Authpage from './frontend/Authpage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Frontpage />}/>
          <Route path='/authpage' element={<Authpage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
