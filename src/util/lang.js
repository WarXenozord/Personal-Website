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
        competencesButton: "See my full résumé",
        experienceButton: "See my portifolio",
    }:{
        aboutTitle: "Sobre mim",
        aboutText: "Aye Aye",
        competencesTitle: "Competências",
        competencesText: "Aye aye",
        experienceTitle: "Experiência",
        experienceText: "Aye aye",
        aboutButton: "Ainda mais",
        competencesButton: "Ver curriculum completo",
        experienceButton: "Veja meu portifólio",
    })
})

export const langPropsCapabilities = (lang) => ({
    ...(lang === 'en' ? {
        title: 'I can do...',
        boxTitle: ['Sofware', 'Hardware', 'Rockets', 'And More!'],
        boxText:[
            "HTML/CSS/JS\nNode.js/React\nPostgree/SQL\nPython/C++\nMatlab",
            'Arduino/Raspberry\nSTM32/ESP32\nTI and Bosch sensors\nLoRa Radios\nPCB Design',
            'Rocket Engines\nCentrifugal Pumps\nData Aquisition\nValidation and verification\nManufacturing methods',
            'Vídeos Editing\n3D Modeling\nUnity Game Creation\n3D Printing'
        ],
        call: "Let's Work Together!"
    }:{
        title: 'Eu posso fazer...',
        boxTitle: ['Sofware', 'Hardware', 'Foguetes', 'E Mais!'],
        boxText:[
            "HTML/CSS/JS\nNode.js/React\nPostgree/SQL\nPython/C++\nMatlab",
            'Arduino/Raspberry\nSTM32/ESP32\nSensores TI e Bosch\nComunicação LoRa\nProjeto de PCB',
            'Motores Foguetes\nBombas Centrifugas\nAquisição de Dados\nVerificação e Validação\nMétodos de fabricação',
            'Edição de Vídeos\nModelagem 3D\nCriação de Jogos Unity\nImpressão 3D'
        ],
        call: "Vamos Trabalhar Juntos!"
    })
})

export const langPropsStandout = (lang) => ({
    ...(lang === 'en' ? {
        title: 'See some of my projects',
        projTitle: ['Geopredict', 'Test Bench', 'SRR'],
        projSubtitle: ['Educational Software', 'Test Equipment', 'IoT Project'],
        projDesc:[
            "blablablabalbalbalablabllba",
            "blablablabalbalbalablabllba",
            "blablablabalbalbalablabllba",
        ],
        alt:[
            '3d island city',
            'CAD Part',
            'Dashboard',
        ]
    }:{
        title: 'Veja alguns dos meus projetos',
        projTitle: ['Geopredict', 'Test Bench', 'SRR'],
        projSubtitle: ['Software Educacional', 'Equipamento de Teste', 'Projeto IoT'],
        projDesc:[
            "blablablabalbalbalablabllba",
            "blablablabalbalbalablabllba",
            "blablablabalbalbalablabllba",
        ],
        alt:[
            'cidade-ilha 3d',
            'peça CAD',
            'Dashboard',
        ]
    })
})

export const langPropsContact = (lang) => ({
    ...(lang === 'en' ? {
        title: "Let's talk, send me a message!",
        name: 'Name',
        message: 'Message',
        send: 'Send'
    }:{
        title: "Vamos conversar, me mande uma mensagem!",
        name: 'Nome',
        message: 'Mensagem',
        send: 'Enviar'
    })
})