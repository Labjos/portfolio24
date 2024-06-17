import './App.css';

import Home from './pages/Home/Home';
import Trayectory from './pages/Trayectory/Trayectory';
import Projects from './pages/Projects/Projects';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login';


function App() {
  

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/trayectory" element={<Trayectory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
  )
}

export default App
