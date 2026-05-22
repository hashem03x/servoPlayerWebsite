import React, { createContext, useContext, useState, useEffect } from 'react';
import { Lang } from '../lang';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  const [langValue, setLangValue] = useState(Lang[selectedLanguage]);

  useEffect(() => {
    setLangValue(Lang[selectedLanguage]);
    localStorage.setItem('lang', selectedLanguage);
    
    // Set document direction for RTL support
    const dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage]);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const value = {
    selectedLanguage,
    langValue,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
