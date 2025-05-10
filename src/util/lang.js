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
        aboutText: "Hello there! I am Juan Libonatti, a braziliam aerospacial \
        engineer and developer passionate about bringing projects to life. \
        Don't let the specifcs of my degree fool you - I enjoy working with \
        code, eletronics just as much as I do with rockets.\
        \n\n\
        My journey began at Instituto Tecnológico de Aeronáutica (ITA). During my time there I took\
        part in many extension grops and participated in many competitions that sparked my interest\
        in electronics and coding. Ever since I have never passed a oportunity to learn a new skill\
        be it on my own or with the help of competent and incredible people around me.\
        \n\n\
        Outside of work, I am a gamer and also enjoy doing all sort of personal projects,\
        from unity games to 3D printing. I also like doing video editing, animation and\
        a bit of 3d modeling, though I am still getting the ropes of blender - but hey, I did model\
        the donut!",
        competencesTitle: "Competences",
        competencesText: "\
        • Front-end developing with Node.js / React;\n\
        • Back-end developing with Node.js / Express;\n\
        • SQL databases with Postgres, also NoSQL / MongoDB;\n\
        • General coding  with Python / C / C++ / MATLAB;\n\
        • Embedded code for ESP32 / STM32 Microcontrollers;\n\
        • Printed circuit boards design using Kicad / EasyEDA;\n\
        • General designs on both Canva / Illustrator;\n\
        • CAD modeling with Catia / FreeCad;\n\
        • Video editting with Hitfilm Express;\n\
        • Small scale CNC Milling with Candle;\n\
        • 3D printing with Creality Slicer;\n\
        • Game creation with Unity.\
        ",
        experienceTitle: "Experience",
        experienceText: "\
        2025-Now: Instituto de Aeronáutica e Espaço, Propulsion Division.\n\
        One of the key players in brazil's rocket launchers, the institute\
        has designed several rockets, notably most of the SONDA family, the\
        VSB-30 and VLS. I work at the space propulsion branch, as\
        part of the liquid motors design team.\n\
        \n\
        2024-2023: ITACube extension group, ITA.\n\
        Focused on the creation of educational, cubesats launched by weather balloons\
        As a co-founder, I engaged in a number of activities ranging from\
        managing members and projects to coding and designing electronics.\n\
        \n\
        2024-2020: ITA Rocket Design extension group, ITA.\n\
        I started as a member in the eletronics team, eventually becoming\
        president in 2023. There I learned a lot embedded eletronics and \
        sounding rockets. I also participated at a launch of one of the \
        rockets at Centro de Lançamento da Barreira do Inferno (CLBI).\n\
        ",
        aboutButton: "Even more",
        competencesButton: "See my full résumé",
        experienceButton: "See my portifolio",
    }:{
        aboutTitle: "Sobre mim",
        aboutText: "Aye Aye",
        competencesTitle: "Competências",
        competencesText: "\
        • Desenvolvimento front-end com Node.js / React;\n\
        • esenvolvimento back-end com Node.js / Express;\n\
        • Bancos de dado SQL com Postgres e NoSQL com MongoDB;\n\
        • Códigos, no geral, com Python / C / C++ / MATLAB;\n\
        • Códigos embarcados para microcontroladores ESP32 / STM32;\n\
        • Projetos de placas de circuito impresso em Kicad / EasyEDA;\n\
        • Artes e designs no Canva / Illustrator;\n\
        • Modelagem CAD com Catia / FreeCad;\n\
        • Edição de vídeo com Hitfilm Express;\n\
        • Pequenas Fresagens CNC com Candle;\n\
        • Impresão 3d com Creality Slicer;\n\
        • Criação de jogos em Unity.\
        ",
        experienceTitle: "Experiência",
        experienceText: "Aye aye",
        aboutButton: "Ainda mais",
        competencesButton: "Ver curriculum completo",
        experienceButton: "Veja meu portifólio",
    })
})

export const langPropsCapabilities = (lang) => ({
    ...(lang === 'en' ? {
        title: 'I can do it! Be it...',
        boxTitle: ['Sofware', 'Hardware', 'Rockets', 'And More!'],
        boxText:[
            "HTML/CSS/JS\nNode.js/React\nPostgree/SQL\nPython/C++\nMatlab",
            'Arduino/Raspberry\nSTM32/ESP32\nTI and Bosch sensors\nLoRa Radios\nPCB Design',
            'Rocket Engines\nCentrifugal Pumps\nData Aquisition\nValidation and verification\nManufacturing methods',
            'Vídeos Editing\n3D Modeling\nUnity Game Creation\n3D Printing'
        ],
        call: "Let's Work Together!"
    }:{
        title: 'Eu posso fazer, seja ele...',
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
        description: "I'm a Brazilian aerospace engineer who enjoys working with software, electronics and machines. I have a hands-on approach",
        statusTitle: "What I'm up to",
        status: 'Currently building this very site, as I always wanted to have my very own personal website to showcase my portifolio\
        and host some of my apps. Creating these pages has been pretty enjoyable while also helping me learn a LOT more about React.',
        funFactsTitle: 'Fun facts',
        funFacts: ["Gamer, addicted to strategy games. I also enjoy building my own games.",
            "I love rockets, drones and satellites. However I hate planes - they are boring.",
            "Coding is cool but what coding firmware for my own hardware is even cooler.",
            "I have some inflatable costumes and enjoy wearing them, notably a T-Rex one."],
        contactTitle: "Let’s talk",
        contact: "Reach out if you want to collaborate or just geek out over rockets and stuff. Oh, and don't forget take a look at my portifolio too, I have some nice things there!",
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
        description: 'Eu sou um engenheiro aeroespacial formado no Instituto Tecnológico de Aeronáutica em 2024. Gosto de trabalhar com código,\
         eletrônicos no geral e motores foguete. Adoro colocar a mão na massa em projetos que me permitam elevar os meus conhecimentos.\
         Eu gosto de adotar uma abordagem prática e o mais simples o possível na resolução de problemas, tentando sempre usar a ferramenta certa\
         para a complexidade de cada trabalho. Estou sempre buscando aprender coisas novas por meio de cursos e livros.',
        statusTitle: "O que eu estou fazendo",
        status: '',
        funFactsTitle: 'Fatos Aleatórios',
        funFacts: ['','','',''],
        contactTitle: '',
        contact: '',
        timeline: [
            {date: 'JUN 2025', event: 'O precioso', desc:'Construí esse site'},
            {date: 'JAN 2025', event: 'Primeiro Emprego!', desc:'Comecei meu trabalho no IAE'},
            {date: 'DEC 2024', event: 'Formado!', desc:'Engenharia Aeroespacial, ITA'},
            {date: 'OCT 2024', event: 'Papers, please', desc:'Apresentei no CONTECC'},
            {date: 'NOV 2023', event: 'Vai CurieSat!', desc:'Participei na OBSat'},
            {date: 'AUG 2023', event: 'Lançamento!', desc:'Lancei um foguete no CLBI'},
            {date: 'JUN 2023', event: 'Parceiros', desc:'Cofundador da ITACube'},
            {date: 'FEB 2023', event: 'Sr. Presidente', desc:'Presidi a ITA Rocket Design'},
        ],
    })
})

export const langPropsResume = (lang) => ({    
    ...(lang === 'en' ? {
        title:'My Résumé',
        subtitle:"Here's a detailed overview of my professional background, skills, and education. You can also download a PDF version below.",
        downBut: 'Download PDF',
        printBut: 'Print Résumé',
        tabs: [
            {title: 'Education',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Work Experience',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Skills',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Certifications',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Languages',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Tools & Technologies',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            }
        ]
    }:{
        title:'My Résumé',
        subtitle:"Here's a detailed overview of my professional background, skills, and education. You can also download a PDF version below.",
        downBut: 'Download PDF',
        printBut: 'Print Résumé',
        tabs: [
            {title: 'Education',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Work Experience',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Skills',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Certifications',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Languages',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            },
            {title: 'Tools & Technologies',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'aaaa'
                    }
                ]
            }
        ]
    })
})