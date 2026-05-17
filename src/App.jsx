import './App.css'
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
