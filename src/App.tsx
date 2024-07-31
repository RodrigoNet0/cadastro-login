
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vitrine from './pages/Vitrine'
import Login from './components/Login/Login'
import Contato from './components/Contato/Contato'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/Vitrine" element={<Vitrine/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Contato" element={<Contato/>}/>
      <Route path="/cadastro-cadastro" element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
