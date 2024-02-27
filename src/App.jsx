import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element = {<Registration/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
