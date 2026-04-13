'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language, resumeData, uiText } from '@/data/resume';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  data: typeof resumeData[Language];
  text: typeof uiText[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'pt' ? 'en' : 'pt'));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const value = {
    language,
    toggleLanguage,
    setLanguage,
    data: resumeData[language],
    text: uiText[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
