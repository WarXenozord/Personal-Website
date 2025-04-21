import { createContext,useState,useMemo } from "react";

export const LanguageContext = createContext({
    toggleLanguage: () => {},
    lang: ""
});

export const useLang = () =>{
    const [lang, setLang] = useState('en');

    const langMode = useMemo(
        () => ({
            toggleLanguage: () => 
                setLang((prev) => (prev === 'en' ? 'pt' : 'en')),
        }),
        []
    );

    return [langMode,lang]
}

export const langPropsHeader = (lang) => ({
    ...(lang === 'en' ? {
        profession: "Aerospace Engineer",
        competences: "Competences",
        portifolio: "Portifolio",
        contact: "Contact",
        langTooltip: "Mudar para PT-BR."
    }:{
        profession: "Engenheiro Aeroespacial",
        competences: "Competências",
        portifolio: "Portifólio",
        contact: "Contato",
        langTooltip: "Change to EN-US."
    })
})

export const langPropsHome = (lang) => ({
    ...(lang === 'en' ? {
        intro: ["Hello, my name is","and I do space stuff!"],
        cardText: "View Project →",
        button: "More about me →"
    }:{
        intro: ["Olá, meu nome é","e eu faço coisas espaciais!"],
        cardText: "Ver Projeto →",
        button: "Mais sobre mim →"
    })
})