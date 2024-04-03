import Register from './Register/Register';
import Login from './Login/Login';
import Startsite from './Startsite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LangdingPage from './LangdingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: '1' }}>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route exact path="/" element={<LangdingPage darkMode={darkMode} />}/>
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}


export default App;
