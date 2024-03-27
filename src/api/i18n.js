import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resource } from './resource'; 

const languageFromStorage = localStorage.getItem('language') || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: languageFromStorage, 
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: resource,
    interpolation: {
      escapeValue: false,
    }
  });

i18n.on('languageChanged', (lang) => {
  localStorage.setItem('language', lang);
});

export default i18n;

