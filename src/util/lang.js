import { createContext,useState,useMemo } from "react";

export const LanguageContext = createContext({
    toggleLanguage: () => {},
    lang: ""
});

export const useLang = () =>{
    // Checking our user language and setting the website to it
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    const [lang, setLang] = useState(langCode === 'pt'? 'pt':'en');
    document.documentElement.lang = lang;

    const langMode = useMemo(
        () => ({
            toggleLanguage: () => {
                setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
                document.documentElement.lang = lang;
             },
        }),
        []
    );

    return [langMode,lang]
}
