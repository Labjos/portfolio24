import './App.css';

import Home from './pages/Home/Home';
import Trayectory from './pages/Trayectory/Trayectory';
import Projects from './pages/Projects/Projects';
import Register from './pages/Register/register';
import Contact from './pages/Contact/Contact';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/trayectory" element={<Trayectory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
  )
}

export default App
