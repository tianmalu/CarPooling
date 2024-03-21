import React from 'react';
import CTA from './components/CTA';
import Contact from './components/Contact';
import BusinessFeatures from './components/Features';

const LangdingPage = ({darkMode}) => {
  return (
    <div style = {{marginTop: '4.5rem'}} className="flex flex-col h-screen text-black">
        <CTA 
            darkMode={darkMode}
        />
        <section className="h-256 overflow-y-auto bg-white border border-black">About</section>
        <BusinessFeatures />
        <Contact 
            darkMode={darkMode}
        />

    </div>

  );
};

export default LangdingPage;
