import React from 'react';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Service from './components/Features';
import About from './components/About';

const LangdingPage = ({darkMode, selectedLanguage}) => {
  return (
    <div style = {{marginTop: '4.5rem'}} className="flex flex-col h-screen text-black">
        <CTA 
            darkMode={darkMode}
            selectedLanguage={selectedLanguage}
        />
        <About
            darkMode={darkMode}
            selectedLanguage={selectedLanguage}
        />
        <Service 
            darkMode={darkMode}
            selectedLanguage={selectedLanguage}
        />
        <Contact 
            darkMode={darkMode}
            selectedLanguage={selectedLanguage}
        />

    </div>

  );
};

export default LangdingPage;
