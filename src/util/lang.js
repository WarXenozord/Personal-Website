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

export const langPropsAbout = (lang) => ({
    ...(lang === 'en' ? {
        aboutTitle: "About me",
        aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod enim in lectus lobortis, sed laoreet elit bibendum. Aenean et tristique neque. Cras in venenatis arcu. Praesent malesuada leo eu orci venenatis, ullamcorper feugiat elit accumsan. Nulla consequat scelerisque nunc ac euismod. Curabitur pulvinar tortor a pellentesque tempor. Curabitur nec hendrerit mi, vel lacinia enim. Donec velit nisi, pellentesque vitae risus sit amet, fringilla vulputate nulla. Donec nec augue nisl. Integer pellentesque metus eu neque mattis porttitor. Quisque pretium sed purus porttitor rhoncus. Proin aliquet, nunc vitae porta blandit, magna mauris molestie enim, ac euismod elit turpis eu tortor. Donec ac rhoncus sapien, sed condimentum sem. Mauris lacinia malesuada libero, eu ornare erat auctor vel.",
        competencesTitle: "Competences",
        competencesText: "Aye aye",
        experienceTitle: "Experience",
        experienceText: "Aye aye",
        aboutButton: "Even more",
        competenceButton: "See my full résumé",
        experienceButton: "See my portifolio",
    }:{
        aboutTitle: "Sobre mim",
        aboutText: "Aye Aye",
        competencesTitle: "Competências",
        competencesText: "Aye aye",
        experienceTitle: "Experiência",
        experienceText: "Aye aye",
        aboutButton: "Ainda mais",
        competenceButton: "Ver curriculum completo",
        experienceButton: "Veja meu portifólio",
    })
})

export const langPropsCapabilities = (lang) => ({
    ...(lang === 'en' ? {
        title: 'I can do...',
        boxTitle: ['Sofware', 'Hardware', 'Rockets', 'And More!'],
        boxText:[
            'aye aye',
            'aye aye aye',
            'xy',
            'aaaaaaaa'
        ]
    }:{
        title: 'Eu posso fazer...',
        boxTitle: ['Sofware', 'Hardware', 'Foguetes', 'E Mais!'],
        boxText:[
            'aye aye',
            'aye aye aye',
            'xy',
            'aaaaaaaa'
        ]
    })
})