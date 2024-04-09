import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Startsite from './pages/Startsite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LangdingPage from './pages/LangdingPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Startsite/Header';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const currentPath = window.location.pathname;
    let navbarComponent;
    if (currentPath === '/' || currentPath === '/login' || currentPath === '/register') {
      navbarComponent = <Navbar darkMode={darkMode}
                                setDarkMode={setDarkMode}/>;
    }
    else {
      navbarComponent = <Header darkMode={darkMode}
                                setDarkMode={setDarkMode}/>;
    }
  

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flexGrow: '1' }}>
          {navbarComponent}
          <Routes>           
            <Route path='/startsite' element={<Startsite/>} />
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
