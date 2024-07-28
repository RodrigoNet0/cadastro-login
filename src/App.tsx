
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vitrine from './pages/Vitrine'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/Vitrine" element={<Vitrine/>}/>
      {/* <Route path="/cadastro" element={<Home/>}/>
      <Route path="/cadastro-login" element={<Home/>}/>
      <Route path="/cadastro-cadastro" element={<Home/>}/> */}
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
