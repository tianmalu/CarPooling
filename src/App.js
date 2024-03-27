import Register from './Register/Register';
import Login from './Login/Login';
import Startsite from './Startsite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LangdingPage from './LangdingPage';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');


  return (
    <div style={{ flexGrow: '1' }} className="flex flex-col min-h-screen">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <main className="flex-grow ">
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Startsite /> */}
        <LangdingPage
          darkMode={darkMode}
          selectedLanguage={selectedLanguage}
        />
      </main>
      {/* <Footer 
        darkMode={darkMode}
      /> */}
    </div>
  );
}

export default App;
