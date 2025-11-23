"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import contentData from '../data/content.json';

type Language = 'en' | 'de' | 'es';
type Content = typeof contentData.en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    content: Content;
    t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const content = contentData[language];

    // Helper to get nested properties safely
    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = content;
        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }
        return current as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, content, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
