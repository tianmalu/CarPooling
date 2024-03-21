import Register from './Register/Register';
import Login from './Login/Login';
import Startsite from './Startsite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from 'react';
import LangdingPage from './LangdingPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="flex-grow">
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Startsite /> */}
        <LangdingPage
          darkMode={darkMode}
        />
      </main>
      <Footer
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
