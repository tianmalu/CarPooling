import React from 'react';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Service from './components/Features';
import About from './components/About';

const LangdingPage = ({darkMode}) => {
  return (
    <div style = {{marginTop: '4.5rem'}} className="flex flex-col h-screen text-black">
        <CTA 
            darkMode={darkMode}
        />
        <About
            darkMode={darkMode}
        />
        <Service 
            darkMode={darkMode}
        />
        <Contact 
            darkMode={darkMode}
        />

    </div>

  );
};

export default LangdingPage;
