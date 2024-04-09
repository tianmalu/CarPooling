import React from 'react';
import CTA from '../components/LandingPage/CTA';
import Contact from '../components/LandingPage/Contact';
import Service from '../components/LandingPage/Features';
import About from '../components/LandingPage/About';

const LangdingPage = ({darkMode}) => {
  return (
    <div className="flex flex-col min-h-screen text-black">
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
