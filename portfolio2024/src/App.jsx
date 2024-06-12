import './App.css';

import Home from './pages/Home/Home';
import Trayectory from './pages/Trayectory/Trayectory';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trayectory" element={<Trayectory />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      
  )
}

export default App
