import React from 'react';
import { useTranslation } from 'react-i18next';

const About = ({darkMode}) => {
  const { t } = useTranslation();

  return (
    <section id="about" className={`${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">{t("about.title")}</h2>
          <div className={`${darkMode ? 'text-gray-400': 'text-gray-500'}`}>
            <p className="mb-4 font-light">
                {t("about.content.1")}
            </p>
            <p className="mb-4 font-light">
                {t("about.content.2")}            
            </p>
            <p className="mb-4 font-medium">
                {t("about.content.3")}            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
