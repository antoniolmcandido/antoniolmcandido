import React, { createContext, useState, useContext, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error(
            'useLanguage deve ser usado dentro de um LanguageProvider',
        )
    }
    return context
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt-BR')

    useEffect(() => {
        // Carregar idioma salvo do localStorage
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
