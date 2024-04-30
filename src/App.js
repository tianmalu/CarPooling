import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Startsite from './pages/Startsite';
import Navbar from './components/LandingPage/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LangdingPage from './pages/LangdingPage';
import Header from './components/Startsite/Header';
import UserProfil from './pages/UserProfil';
import SearchResult from './pages/SearchResult';

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
          {/* {navbarComponent} */}
          <Routes>           
            <Route path='/search' element= {<SearchResult />} />
            <Route path='/startsite' element={<Startsite/>} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profil" element={<UserProfil/>}/>
            <Route exact path="/" element={<LangdingPage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}


export default App;
