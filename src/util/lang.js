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
        aboutText: "Hello there! I'm Juan Libonatti, a Brazilian aerospace engineer and developer \
        passionate about bringing projects to life. Don’t let the specifics of my degree fool you \
        — I enjoy working with code and electronics just as much as I do with rockets.\
        \n\n\
        My journey began at the Instituto Tecnológico de Aeronáutica (ITA), where I joined several \
        extension groups and participated in various competitions that sparked my interest in \
        electronics and programming. Since then, I’ve never missed an opportunity to learn a new \
        skill — whether on my own or with the help of the talented people around me.\
        \n\n\
        Outside of work, I’m a gamer and love diving into personal projects, from Unity games to 3D \
        printing. I also enjoy video editing, animation, and a bit of 3D modeling. I'm still getting \
        the hang of Blender — but hey, I did model the donut!",
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
        One of the key players in Brazil's rocket launcher development, the institute\
        has designed several rockets — notably most of the SONDA family, the\
        VSB-30, and the VLS. I work in the space propulsion branch, as\
        part of the liquid engine design team.\
        \n\n\
        2024-2023: ITACube extension group, ITA.\n\
        Focused on the creation of educational CubeSats launched by weather balloons.\
        As a co-founder, I engaged in a number of activities ranging from\
        managing members and projects to coding and electronics design.\
        \n\n\
        2024-2020: ITA Rocket Design extension group, ITA.\n\
        I started as a member of the electronics team, eventually becoming\
        president in 2023. There I learned a lot about embedded electronics and\
        sounding rockets. I also participated in the launch of one of our\
        rockets at the Centro de Lançamento da Barreira do Inferno (CLBI).\
        ",
        aboutButton: "Even more",
        competencesButton: "See my full résumé",
        experienceButton: "See my portifolio",
    }:{
        aboutTitle: "Sobre mim",
        aboutText: "\
        Olá! Eu sou Juan Libonatti, brasileiro, engenheiro aeroespacial \
        e desenvolvedor, além apaixonado por projetos de engenharia. \
        Não se deixe enganar pelo foco do meu diploma — gosto tanto de trabalhar com código e \
        eletrônica quanto com foguetes e ferramentas.\
        \n\n\
        Minha jornada começou no Instituto Tecnológico de Aeronáutica (ITA), \
        onde participei de diversos grupos de extensão e competições que \
        despertaram meu interesse por eletrônica e programação. Desde então, \
        estou sempre buscando aprender algo — seja por conta \
        própria ou com a ajuda de pessoas incríveis e talentosas ao meu redor.\
        \n\n\
        Fora do trabalho, sou um gamer e também gosto de me envolver em projetos pessoais, \
        desde jogos feitos em Unity até impressão 3D. Também curto edição de vídeo, \
        animação e um pouco de modelagem 3D. Ainda estou pegando o jeito do \
        Blender — mas veja bem, eu já modelei o famoso donut!\
        ",
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
        experienceText: "\
        2025-Agora: Instituto de Aeronáutica e Espaço, Divisão de Propulsão.\n\
        O principal envolvido no desenvolvimento de lançadores espaciais no Brasil,\
        o instituto foi o local de onde sairam diversos foguetes nacionais — notavelmente a \
        maior parte da família SONDA, o VSB-30 e o VLS. Trabalho na área de propulsão espacial,\
        no projeto de motores líquidos.\
        \n\n\
        2024-2023: Grupo de extensão ITACube, ITA.\n\
        Grupo focado na criação de CubeSats educacionais lançados por balões meteorológicos.\
        Como cofundador, participei de diversas atividades, desde a gestão de membros\
        e projetos até programação e desenvolvimento de eletrônica.\
        \n\n\
        2024-2020: Grupo de extensão ITA Rocket Design, ITA.\n\
        Comecei como membro da equipe de eletrônica, e eventualmente me tornei\
        presidente em 2023. Lá aprendi bastante sobre eletrônica embarcada e\
        foguetes de sondagem. Também participei do lançamento de um dos nossos\
        foguetes no Centro de Lançamento da Barreira do Inferno (CLBI).\
        ",
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
        title: 'Projects I worked on',
        projTitle: ['CurieSat', 'Geopredict', 'ANA'],
        projSubtitle: ['Balloon CubeSat', 'Educational Webapp', 'Rocket Avionics'],
        projDesc:[
            "Launched by weather balloons, this satellite's original mission was to measure atmospheric levels\
            of ionizing radiation through its Geiger counter payload. It is controlled by an ESP32, can send\
            and receive data through a LoRa radio, and is equipped with an array of sensors, including a GPS and a barometer",
            "An educational website made using React that teaches about human-caused carbon emissions. It features\
            satellite data fetched from INPE and NASA APIs, along with an interactive game made in Unity. The project\
            was a global nominee at the 2024 NASA Space Apps Challenge.",
            "A sounding rocket avionics system designed solely by me. It is capable of determining its altitude and activating\
            a two-stage recovery system while also recording the flight's data. It uses an STM32 microcontroller to\
            run its firmware and has a Python client for fast configuration when connected to a computer via USB",
        ],
        alt:[
            'Educational Satelite',
            '3d island city',
            'Avionics PCB',
        ]
    }:{
        title: 'Projetos em que trabalhei',
        projTitle: ['CurieSat', 'Geopredict', 'ANA'],
        projSubtitle: ['CubeSat de Balão', 'Webapp Educacional', 'Aviônica de Foguete'],
        projDesc:[
            "Lançado por balões meteorológicos, a missão deste satélite era medir os níveis atmosféricos\
            de radiação ionizante, sendo sua carga útil um contador Geiger. Ele é controlado por um ESP32,\
            pode enviar e receber dados via rádio LoRa e está equipado com uma variedade de sensores, incluindo GPS e barômetro",
            "Um site educacional feito com React que ensina sobre as emissões de carbono causadas pelo ser humano. Ele apresenta\
            dados de satélite obtidos das APIs do INPE e da NASA, além de um jogo interativo feito em Unity. O projeto\
            foi finalista global no hackaton da NASA Space Apps de 2024.",
            "Um sistema de aviônica para foguete de sondagem projetado por mim. Ele é capaz de determinar sua altitude\
            e ativar um sistema de recuperação em dois estágios, além de registrar os dados do voo. Utiliza um microcontrolador STM32\
            para rodar seu firmware e conta com um cliente em Python para configuração por um computador via USB",
        ],
        alt:[
            'Satélite Educacional',
            'Cidade ilha 3d',
            'PCB de aviônica',
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
        contactTitle: "Let's talk",
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