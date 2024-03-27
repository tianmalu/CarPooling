import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = ({darkMode}) => {
  const {t} = useTranslation();
  return (
    <section id = 'home' className={`${darkMode ? 'bg-gray-900' : "bg-white"}` }>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
        <div className="mt-4 md:mt-0">
            <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('cta.title')}
            </h2>
            <p className={`mb-6 font-light md:text-lg ${darkMode ? 'text-gray-400' : " text-gray-500 "}`}>
              {t('cta.content')}            
            </p>
            <a href="#" className="inline-flex items-center text-white bg-blue-700 hover:text-yellow-200 focus:ring-4 focus:ring-yellow-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;