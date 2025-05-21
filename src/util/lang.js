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
        competencesButton: "See my full resume",
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
        competencesButton: "Ver currículo completo",
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
        resume: 'Resume',
        portifolio: 'Portifolio',
      }:{  
        home: 'Início',
        about: 'Sobre',
        resume: 'Currículo',
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
        description: "\
        I'm Juan Libonatti, a Brazilian aerospace engineer and hands-on developer with\
        a passion for building things that actually work. Whether it's a liquid-fueled rocket\
        engine or a tiny embedded system running on an STM32, I'm the kind of person who thrives\
        on taking ideas off the whiteboard and making them fly — sometimes literally.\
        \n\n\
        My academic roots are at the Instituto Tecnológico de Aeronáutica (ITA), where I dove deep\
        into engineering while getting my hands dirty in several student groups. Along the way,\
        I built a solid toolkit in embedded systems, PCB design, and programming (Python, C/C++),\
        and even played around with Unity and 3D printing for side projects.\
        \n\n\
        I don't just like to learn — I chase it. Every project is a chance to dive deeper, whether it's squeezing\
        performance out of an old magnetometer at high altitudes or debugging a React web app at 2 AM.\
        I’ve learned a lot from doing things the hard way, and even more from working alongside brilliant teammates.\
        \n\n\
        Outside the lab or the terminal, I’m a big fan of games that make me think — XCOM, Kerbal Space Program,\
        and Stellaris (please don’t tempt me with the last one). I’ve joined a few Ludum Dare game jams, too.\
        I like gardening to unwind, and occasionally do video editing or 3D modeling — usually when it helps bring\
        a project to life.\
        ",
        statusTitle: "What I'm up to",
        status: 'Currently building this very site, as I always wanted to have my very own personal website to showcase my portifolio\
        and host some of my apps. Creating these pages has been pretty enjoyable while also helping me learn a LOT more about React.',
        funFactsTitle: 'Fun facts',
        funFacts: ["Gamer, addicted to strategy games. I also enjoy building my own games.",
            "I love rockets, drones and satellites. However I hate planes - they are boring.",
            "Coding is cool but what coding firmware for my own hardware is even cooler.",
            "I own some inflatable costumes and love wearing them — especially a T-Rex one."],
        contactTitle: "Let's talk",
        contact: "Thanks for stopping by — if you're curious about anything I've worked on, or just want \
        to talk rockets, CubeSats, or weird tech experiments, feel free to reach out. Also, check my portifolio!",
        timeline: [
            {date: 'JUN 2025', event: 'My precious', desc: 'Built this personal site'},
            {date: 'JAN 2025', event: 'First job!', desc: 'Started working at IAE'},
            {date: 'DEC 2024', event: 'Graduated!', desc: 'Aerospace Engineering, ITA'},
            {date: 'OCT 2024', event: 'Hackathon!', desc: 'Joined NASA Space Apps'},
            {date: 'OCT 2024', event: 'Papers, please', desc: 'Presented at CONTECC'},
            {date: 'NOV 2023', event: 'Go CurieSat!', desc: 'Joined the 2nd OBSat'},
            {date: 'AUG 2023', event: 'More rockets?', desc: 'Participated in LASC 2023'},
            {date: 'AUG 2023', event: 'Rocket launch!', desc: 'Took part in a launch at CLBI'},
            {date: 'JUN 2023', event: 'Partners', desc: 'Co-founded ITACube'},
            {date: 'FEB 2023', event: 'Mr. President', desc: 'President of ITA Rocket Design'},
            {date: 'AUG 2022', event: 'To the stars', desc: 'Participated in LASC 2022'},
            {date: 'JUN 2021', event: 'CubeSats', desc: 'Participated in OBSat'},
            {date: 'MAR 2020', event: 'Here be rockets', desc: 'Joined ITA Rocket Design'},
            {date: 'JAN 2020', event: 'Engineer to be', desc: 'Admitted to ITA and CPOR'},
            {date: 'MAR 2000', event: 'The Beginning', desc: 'Born in Rio de Janeiro, Brazil'},
        ],
    } : {
        title: 'Sobre mim',
        description: "\
        Sou Juan Libonatti, engenheiro aeroespacial brasileiro e desenvolvedor mão-na-massa,\
        apaixonado por construir coisas que realmente funcionam. Seja um motor-foguete\
        líquido ou um sistema embarcado rodando num STM32, sou do tipo que gosta de tirar ideias\
        do papel e fazê-las voar — às vezes literalmente.\
        \n\n\
        Me formei no Instituto Tecnológico de Aeronáutica (ITA), onde mergulhei de cabeça na engenharia\
        enquanto participava ativamente de diversos grupos de extensão. Ao longo do caminho,\
        desenvolvi uma base sólida em sistemas embarcados, design de PCBs e programação (Python, C/C++),\
        além de brincar com Unity e impressão 3D em projetos paralelos.\
        \n\n\
        Eu não gosto apenas de aprender — eu persigo o conhecimento. Cada projeto é uma oportunidade de ir mais fundo,\
        seja extraindo dados de um magnetômetro para voar em grandes altitudes ou\
        debugando um webapp em React às 2 da manhã. Aprendi muito errando — e ainda mais colaborando com o conhecimento \
        de pessoas brilhantes.\
        \n\n\
        Fora do laboratório e do terminal, gosto muito de jogos estratégicos, como XCOM, Kerbal Space Program\
        e Stellaris (mas por favor, não me incentive a jogar o último — eu simplesmente não paro quando começo).\
        Também participei de algumas edições do Ludum Dare, uma game jam internacional.\
        Curto jardinagem para relaxar e às vezes edito vídeos ou modelo em 3D — principalmente quando isso ajuda\
        a dar vida a algum projeto.\
        ",
        statusTitle: "O que eu estou fazendo",
        status: "Atualmente estou fazendo este site — sempre quis ter meu próprio espaço pessoal para mostrar \
        meu portfólio e hospedar alguns dos meus apps. Criar essas páginas tem sido bem divertido e me fez aprender \
        MUITO sobre React.",
        funFactsTitle: 'Fatos Aleatórios',
        funFacts: [
            "Gamer — viciado em jogos de estratégia. Também gosto de criar meus próprios jogos.",
            "Amo foguetes, drones e satélites. Mas odeio aviões — são entediantes.",
            "Programar é legal, mas programar firmware para o meu próprio hardware é ainda melhor.",
            "Tenho algumas fantasias infláveis e adoro usá-las — principalmente uma de T-Rex."
        ],
        contactTitle: 'Vamos Conversar',
        contact: "\
        Valeu por passar por aqui! Se ficou curioso sobre algum dos projetos em que trabalhei, \
        ou só quiser bater um papo sobre foguetes, CubeSats ou experimentos malucos de tecnologia, \
        fique à vontade para me chamar. E dá uma olhada no meu portfólio também!",
        timeline: [
            {date: 'JUN 2025', event: 'Meu precioso', desc: 'Construi este site pessoal'},
            {date: 'JAN 2025', event: '1º Emprego!', desc: 'Comecei a trabalhar no IAE'},
            {date: 'DEZ 2024', event: 'Formado!', desc: 'Engenharia Aeroespacial'},
            {date: 'OUT 2024', event: 'Hackathon!', desc: 'Participei do Space Apps'},
            {date: 'OUT 2024', event: 'Publicações', desc: 'Apresentei no CONTECC'},
            {date: 'NOV 2023', event: 'Vai CurieSat!', desc: 'Participei da 2ª OBSat'},
            {date: 'AGO 2023', event: 'Mais foguetes?', desc: 'Participei da LASC 2023'},
            {date: 'AGO 2023', event: 'Lançamento!', desc: 'lançamos no CLBI'},
            {date: 'JUN 2023', event: 'Parceria', desc: 'Cofundei a ITACube'},
            {date: 'FEV 2023', event: 'Sr. Presidente', desc: 'Presidente, ITA Rocket Design'},
            {date: 'AGO 2022', event: 'Às estrelas', desc: 'Participei da LASC 2022'},
            {date: 'JUN 2021', event: 'CubeSats', desc: 'Participei da OBSat'},
            {date: 'MAR 2020', event: 'Temos foguetes', desc: 'Entrei para o ITA Rocket Design'},
            {date: 'JAN 2020', event: 'Pré-engenheiro', desc: 'Passei no ITA e no CPOR'},
            {date: 'MAR 2000', event: 'O começo', desc: 'Nasci no Rio de Janeiro, Brasil'},
        ],
    })
})

export const langPropsResume = (lang) => ({    
    ...(lang === 'en' ? {
        title:'My Resume',
        subtitle:"Here's a detailed overview of my professional background, skills, and education. You can also download my resume in PDF below.",
        downBut: 'Download PDF',
        printBut: 'Print Resume',
        tabs: [
            {title: 'Education',
                items:[
                    {title: 'Aerospace Engineering',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'One of the most prestigious engineering institutions in Brazil, ITA is renowned \
                        for having the country’s most challenging entrance exam.'
                    }
                ]
            },
            {title: 'Work Experience',
                items:[
                    {title: 'Liquid Propulsion Engineer',
                        place: 'Instituto de Aeronáutica e Espaço (IAE)',
                        period: 'Present',
                        desc: 'Part of the liquid propulsion division within the Space Propulsion Subdivision at \
                        IAE, working on the design and development of liquid rocket engines.'
                    },
                    {title: 'Internship',
                        place: 'Centro Espacial ITA (CEI)',
                        period: '2024',
                        desc: 'Designed PCBs using EasyEDA for a weather balloon CubeSat, as part of a VLEO-responsive \
                        platform project funded by the National Research Council (CNPq).'
                    },
                    {title: 'Internship',
                        place: 'Instituto de Aeronáutica e Espaço (IAE)',
                        period: '2023',
                        desc: 'Documented workflows across the solid propulsion division and gained hands-on experience \
                        with verification, validation, and quality control standards for solid rocket propellants.'
                    }
                ]
            },
            {title: 'Skills',
                items:[
                    {title: 'Embedded Systems',
                        place: '★★★★★',
                        period: '',
                        desc: 'Design and programming of microcontroller-based systems, especially using STM32 and ESP32. \
                        Experience includes custom PCB design, sensor integration, and firmware development in C/C++.'
                    },
                    {title: 'Web Development',
                        place: '★★★★',
                        period: '',
                        desc: 'Full-stack development with a focus on React (front-end) and Node.js/Express (back-end). \
                        Built responsive apps, portfolios, and API integrations.'
                    },
                    {title: 'Scientific Programming and Data',
                        place: '★★★★',
                        period: '',
                        desc: 'Experienced with Python for scripting, data processing (NumPy, Pandas), and MATLAB for \
                        simulation and analysis tasks.'
                    },
                    {title: 'Game and Interactive Systems',
                        place: '★★',
                        period: '',
                        desc: 'Prototype development and scripting in Unity (C#). Includes experience with physics-based \
                        mechanics, events, and animations.'
                    },
                    {title: 'Multimedia and Design',
                        place: '★★★',
                        period: '',
                        desc: 'Video editing with HitFilm Express and basic 3D modeling/animation with Blender. Used \
                        primarily for project promotion and documentation.'
                    }
                ]
            },
            {title: 'Certifications',
                items:[
                    {title: 'The Complete Full-Stack Web Development Bootcamp',
                        place: 'Udemy',
                        period: '2025',
                        desc: '61.5-hour course focused on building websites using various technologies, including Node.js and SQL.'
                    },
                    {title: 'Introduction to Nanosatellites',
                        place: 'Brazilian Space Agency',
                        period: '2024',
                        desc: '30-hour online course by AEB covering nanosatellite technologies, specifically CubeSats.'
                    },
                    {title: 'Aerospace Geopolitics',
                        place: 'Brazilian Space Agency',
                        period: '2024',
                        desc: '20-hour online course by AEB exploring the political landscape of space utilization, focusing \
                        on space access for developing countries and the strategic occupation of orbital positions.'
                    },
                    {title: 'Python Language Fundamentals for Data Analysis and Data Science',
                        place: 'Data Science Academy',
                        period: '2024',
                        desc: '72-hour course focused on using Python to process large volumes of data, including applications in AI.'
                    },
                    {title: 'CodeIgniter/PHP Course',
                        place: 'Udemy',
                        period: '2021',
                        desc: '6.5-hour course focused on the CodeIgniter framework and PHP for website backend development.'
                    },
                    {title: 'Responsive Website Development Course',
                        place: 'Udemy',
                        period: '2021',
                        desc: '12.5-hour course covering the fundamentals of CSS, HTML, and JavaScript for front-end development.'
                    },
                ]
            },
            {title: 'Languages',
                items:[
                    {title: 'English',
                        place: 'Proficient',
                        period: '',
                        desc: 'Can read, write, and understand complex technical subjects. Speaks with minimal difficulty.'
                    },
                    {title: 'Portuguese',
                        place: 'Fluent',
                        period: '',
                        desc: 'Native speaker.'
                    }
                ]
            },
            {title: 'Tools and Technologies',
                items:[
                    {title: 'C',
                        place: 'Intermediate',
                        period: '',
                        desc: 'Understands the language syntax and standard libraries.'
                    },
                    {title: 'C++',
                        place: 'Advanced',
                        period: '',
                        desc: 'Has a solid grasp of the language syntax. Frequently develops embedded firmware using it.'
                    },
                    {title: 'EasyEDA',
                        place: 'Advanced',
                        period: '',
                        desc: 'Has designed 4-layer, SMD-based boards using this tool.'
                    },
                    {title: 'KiCAD',
                        place: 'Intermediate',
                        period: '',
                        desc: 'Has designed 2-layer, PTH-based boards using this tool.'
                    },
                    {title: 'Python',
                        place: 'Advanced',
                        period: '',
                        desc: 'Has a strong command of the syntax and commonly used packages such as NumPy and pandas. \
                        Frequently writes apps and scripts for work.'
                    },
                    {title: 'JavaScript',
                        place: 'Advanced',
                        period: '',
                        desc: 'Experienced with Node.js and libraries like React and Express.'
                    },
                    {title: 'MATLAB',
                        place: 'Intermediate',
                        period: '',
                        desc: 'Understands the syntax and built-in packages. Also proficient with tools like Simulink.'
                    },
                    {title: 'CNC Milling Cutter',
                        place: 'Basic',
                        period: '',
                        desc: 'Understands G-code, bed leveling maps, and has experience using engraving software.'
                    },
                    {title: '3D Printer',
                        place: 'Basic',
                        period: '',
                        desc: 'Understands G-code and has printed multiple PLA parts. Experienced with Creality Slicer.'
                    },
                    {title: 'HitFilm Editor',
                        place: 'Intermediate',
                        period: '',
                        desc: 'Can create long composition shots, use keyframes, and build complex effects.'
                    },
                    {title: 'Blender',
                        place: 'Basic',
                        period: '',
                        desc: 'Can model simple shapes, apply basic materials, and animate object movement.'
                    },
                    {title: 'Unity',
                        place: 'Intermediate',
                        period: '',
                        desc: 'Can create complex scenes, including animation, scripting, and event systems.'
                    },
                    {title: 'PHP',
                        place: 'Basic',
                        period: '',
                        desc: 'Able to develop simple website backends.'
                    }
                ]
            }
        ]
    }:{
        title:'Meu Currículo',
        subtitle:"Aqui está uma visão geral da minha formação, habilidades e experiência. Você também pode baixar do meu currículo em PDF abaixo.",
        downBut: 'Baixar PDF',
        printBut: 'Imprimir Currículo',
        tabs: [
            {title: 'Educação',
                items:[
                    {title: 'Engenharia Aeroespacial',
                        place: 'Instituto Tecnológico de Aeronáutica',
                        period: '2024',
                        desc: 'Reconhecido como uma das instituições de engenharia mais prestigiadas do Brasil, o ITA é famoso \
                        por ter o vestibular mais difícil do país.'
                    }
                ]
            },
            {title: 'Experiência Profissional',
                items:[
                    {title: 'Engenheiro de Propulsão Líquida',
                        place: 'Instituto de Aeronáutica e Espaço (IAE)',
                        period: 'Atualmente',
                        desc: 'Atua na divisão de propulsão líquida da Subdivisão de Propulsão Espacial do IAE, colaborando no \
                        projeto e desenvolvimento de motores-foguete líquidos.'
                    },
                    {title: 'Estágio',
                        place: 'Centro Espacial ITA (CEI)',
                        period: '2024',
                        desc: 'Desenvolveu placas eletrônicas no EasyEDA para um CubeSat lançado por balão estratosférico, como \
                        parte de um projeto de plataforma responsiva em órbita VLEO financiado pelo CNPq.'
                    },
                    {title: 'Estágio',
                        place: 'Instituto de Aeronáutica e Espaço (IAE)',
                        period: '2023',
                        desc: 'Catalogou fluxos de trabalho da divisão de propulsão sólida e aprendeu sobre processos de \
                        Verificação e Validação (V&V) e padrões de controle de qualidade para propelentes sólidos.'
                    }
                ]
            },
            {title: 'Habilidades',
                items:[
                    {title: 'Sistemas Embarcados',
                        place: '★★★★★',
                        period: '',
                        desc: 'Projeto e programação de sistemas baseados em microcontroladores, especialmente com STM32 e ESP32. Experiência inclui design de PCBs personalizadas, integração de sensores e desenvolvimento de firmware em C/C++.'
                    },
                    {title: 'Desenvolvimento Web',
                        place: '★★★★',
                        period: '',
                        desc: 'Desenvolvimento full-stack com foco em React (front-end) e Node.js/Express (back-end). Criação de aplicações responsivas, portfólios e integrações com APIs.'
                    },
                    {title: 'Programação Científica e Dados',
                        place: '★★★★',
                        period: '',
                        desc: 'Experiência com Python para automações, análise de dados (NumPy, Pandas) e MATLAB para simulações e processamento de sinais.'
                    },
                    {title: 'Desenvolvimento de Jogos e Sistemas Interativos',
                        place: '★★',
                        period: '',
                        desc: 'Criação de protótipos e sistemas interativos no Unity com scripts em C#. Inclui mecânicas físicas, eventos e animações.'
                    },
                    {title: 'Multimídia e Design',
                        place: '★★★',
                        period: '',
                        desc: 'Edição de vídeo com HitFilm Express e modelagem/animação básica em Blender. Utilizado principalmente para divulgação e documentação de projetos.'
                    }
                ]
            },
            {title: 'Certificados',
                items:[
                    {title: 'The complete full stack web development bootcamp',
                        place: 'Udemy',
                        period: '2025',
                        desc: 'Curso de 61.5 horas focado na criação de websites usando diferentes tecnologias incluindo node.js e SQL.'
                    },{title: 'Introdução a Nanossatélites',
                        place: 'Agência Espacial Brasileira',
                        period: '2024',
                        desc: 'Curso de 30 horas da AEB ministrado de forma online acerca de tecnológias de nanossatélites, em específico CubeSats.'
                    },{title: 'Geopolítica Aeroespacial',
                        place: 'Agência Espacial Brasileira',
                        period: '2024',
                        desc: 'Curso de 20 horas da AEB ministrado de forma online acerca do cenário politico da utilização do espaço, abordando \
                        a questâo do acesso ao espaço dos países em desenvolvimento e ocupação de posições estratégicas no espaço.'
                    },{title: 'Fundamentos de Linguagem Python para Análise de Dados e Data Science',
                        place: 'Data Science Academy',
                        period: '2024',
                        desc: 'Curso de 72 horas focado no uso de python para processamento de grandes volumes de dados, incluindo para utilização.\
                        em IA.'
                    },{title: 'Curso de Codeigniter/PHP',
                        place: 'Udemy',
                        period: '2021',
                        desc: 'Curso de 6.5 horas focado na framework codeigniter e linguagem PHP para criação de backend de websites.'
                    },{title: 'Curso de desenvolvimento de Website Responsivo',
                        place: 'Udemy',
                        period: '2021',
                        desc: 'Curso de 12.5 horas focado nos fundamentos de CSS,HTML e Javascript para front end.'
                    },
                ]
            },
            {title: 'Idiomas',
                items:[
                    {title: 'Inglês',
                        place: 'Proficiente',
                        period: '',
                        desc: 'Lê, escreve e compreende assuntos técnicos complexos com facilidade. Fala com pouca ou nenhuma dificuldade.'
                    },
                    {title: 'Português',
                        place: 'Fluente',
                        period: '',
                        desc: 'Língua nativa.'
                    }
                ]
            },
            {title: 'Ferramentas e Tecnológias',
                items:[
                    {title: 'C',
                        place: 'Intermediário',
                        period: '',
                        desc: 'Compreende a sintaxe da linguagem e as bibliotecas padrão.'
                    },
                    {title: 'C++',
                        place: 'Avançado',
                        period: '',
                        desc: 'Possui domínio sólido da sintaxe da linguagem. Desenvolve frequentemente firmwares embarcados com ela.'
                    },
                    {title: 'EasyEDA',
                        place: 'Avançado',
                        period: '',
                        desc: 'Projetou placas de 4 camadas com componentes SMD utilizando essa ferramenta.'
                    },
                    {title: 'KiCAD',
                        place: 'Intermediário',
                        period: '',
                        desc: 'Projetou placas de 2 camadas com componentes PTH utilizando essa ferramenta.'
                    },
                    {title: 'Python',
                        place: 'Avançado',
                        period: '',
                        desc: 'Tem domínio da sintaxe e de pacotes populares como NumPy e pandas. Cria rotinas e aplicações com frequência.'
                    },
                    {title: 'JavaScript',
                        place: 'Avançado',
                        period: '',
                        desc: 'Tem experiência com Node.js e bibliotecas como React e Express.'
                    },
                    {title: 'MATLAB',
                        place: 'Intermediário',
                        period: '',
                        desc: 'Compreende a sintaxe e os pacotes da linguagem. Também utiliza ferramentas como o Simulink.'
                    },
                    {title: 'Fresadora CNC',
                        place: 'Básico',
                        period: '',
                        desc: 'Entende G-code, mapeamento de nivelamento da mesa e tem experiência com software de gravação.'
                    },
                    {title: 'Impressora 3D',
                        place: 'Básico',
                        period: '',
                        desc: 'Entende G-code e já imprimiu diversas peças em PLA. Possui experiência com o Creality Slicer.'
                    },
                    {title: 'HitFilm Editor',
                        place: 'Intermediário',
                        period: '',
                        desc: 'Capaz de criar composições longas, usar keyframes e montar efeitos complexos.'
                    },
                    {title: 'Blender',
                        place: 'Básico',
                        period: '',
                        desc: 'Consegue modelar formas simples, aplicar materiais básicos e animar movimentos de objetos.'
                    },
                    {title: 'Unity',
                        place: 'Intermediário',
                        period: '',
                        desc: 'Capaz de criar cenas complexas com animações, scripts e sistemas de eventos.'
                    },
                    {title: 'PHP',
                        place: 'Básico',
                        period: '',
                        desc: 'Consegue desenvolver backends simples para sites.'
                    }
                ]
            }
        ]
    })
})

export const langPropsProjectPage = (lang) => ({
    ...(lang === 'en' ? {  
        btn: '← Back to Portfolio',
      }:{  
        btn: '← Voltar ao Portfólio',
        })
})