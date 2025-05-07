import { Description } from "@mui/icons-material";
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

export const langPropsSidebar = (lang) => ({
    ...(lang === 'en' ? {  
        home: 'Home',
        about: 'About',
        resume: 'Résumé',
        portifolio: 'Portifolio',
      }:{  
        home: 'Início',
        about: 'Sobre',
        resume: 'Curriculum',
        portifolio: "Portifólio",
        })
})

export const langPropsPortifolio = (lang) => ({
    ...(lang === 'en' ? {  
        title: 'This is my full portifolio!',
        subtitle: 'Those are all the projects I have worked on. Always learning!',
        srcButton: 'Source Code',
        demoButton: 'Live Demo',
      }:{  
        title:'Este é todo o meu portifólio!',
        subtitle:'Esses são todos os projetos em que eu participei. Sempre aprendendo!',
        srcButton: 'Código Fonte',
        demoButton: 'Demonstração',
        })
})

export const langPropsAboutMe = (lang) => ({
    ...(lang === 'en' ? {
        title: 'About me',
        description: "I'm a Brazilian aerospace engineer who enjoys bending both code and physics to my will. Whether it's launching simulations or debugging stubborn frontends, I like when stuff *works*.",
        statusTitle: "What I'm up to",
        status: 'Currently building this very site, diving into full-stack tools like React, Vite, Express, and MongoDB.',
        funFactsTitle: 'Fun facts',
        funFacts: ["Strategy gamer addicted to XCOM-like games.",
            "Loves aerospace — especially satellites and scramjets.",
            "Enjoys building tools and debugging cursed side-projects.",
            "Powered by caffeine and curiosity."],
        contactTitle: "Let’s talk",
        contact: "Reach out if you want to collaborate or just geek out over rockets and render loops. You can also check out my portfolio or drop me a message.",
        timeline: [
            {date: 'JUN 2025', event: 'My precious', desc:'Built this site'},
            {date: 'JAN 2025', event: 'First Job!', desc:'Started working at IAE'},
            {date: 'DEC 2024', event: 'Graduated!', desc:'Aerospace Engineering, ITA'},
            {date: 'OCT 2024', event: 'Papers, please', desc:'Presented at CONTECC'},
            {date: 'NOV 2023', event: 'Go CurieSat!', desc:'Participated in OBSat'},
            {date: 'AUG 2023', event: 'Rocket Launch!', desc:'Participated in a launch at CLBI'},
            {date: 'JUN 2023', event: 'Partners', desc:'Cofounded ITACube'},
            {date: 'FEB 2023', event: 'Mr. President', desc:'President at ITA Rocket Design'},
        ],
    } : {
        title: 'Sobre mim',
        description: '',
        statusTitle: "O que eu estou fazendo",
        status: '',
        funFactsTitle: 'Fatos Aleatórios',
        funFacts: ['','','',''],
        contactTitle: '',
        contact: '',
        timeline: [
            {date: 'JUN 2025', event: 'My precious', desc:'Built this site'},
            {date: 'JAN 2025', event: 'First Job!', desc:'Started working at IAE'},
            {date: 'DEC 2024', event: 'Graduated!', desc:'Aerospace Engineering, ITA'},
            {date: 'OCT 2024', event: 'Papers, please', desc:'Presented at CONTECC'},
            {date: 'NOV 2023', event: 'Go CurieSat!', desc:'Participated in OBSat'},
            {date: 'AUG 2023', event: 'Rocket Launch!', desc:'Participated in a launch at CLBI'},
            {date: 'JUN 2023', event: 'Partners', desc:'Cofounded ITACube'},
            {date: 'FEB 2023', event: 'Mr. President', desc:'President at ITA Rocket Design'},
        ],
    })
})