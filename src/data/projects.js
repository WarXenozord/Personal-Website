const projects = [{
        title: 'Geopredict',
        solo: false,
        star: false,
        description: {
            en: 'An educational website that teaches about human-caused carbon emissions. It features satellite data fetched from INPE and NASA APIs, along with an interactive game.',
            pt: 'Um site educativo que ensina sobre emissões de carbono causadas pelo ser humano. Apresenta dados de satélites obtidos das APIs do INPE e da NASA, além de um jogo interativo.',
        },
        tech: ['Unity', 'C#', 'React'],
        image: '/images/1.webp',
        links: {
            page: 'geopredict',
            demo: null,
            repo: 'https://github.com/NarayaneRM/geopredict'
        },
    },{
        title: 'Test Bench',
        solo: false,
        star: true,
        description: {
            en: 'A small, educational, and portable test bench designed at ITA Rocket Design to measure the thrust curve of small rocket motors up to 200 N.',           
            pt: 'Uma bancada de testes pequena, educacional e portátil, projetada no ITA Rocket Design para medir a curva de empuxo de motores-foguete de pequeno porte com até 200 N.',
        },
        tech: ['C++', 'ESP32', 'Python', 'FreeCAD'],
        image: '/images/2.webp',
        links: {
            page: 'testbench',
            demo: null,
            repo: null,
        },
    },{
        title: 'Smart Reunion Room',
        solo: false,
        star: false,
        description: {
            en: 'An IoT device and web app solution for tracking and responding to human presence in conference rooms. Completed as part of the CE-289 course in my undergraduate studies at ITA.',
            pt: 'Solução com dispositivo IoT e aplicativo web para rastrear e reagir à presença humana em salas de reunião. Meu projeto final da disciplina de CE-289 no ITA.',
        },
        tech: ['C++', 'ESP32', 'React', 'MongoDB'],
        image: '/images/3.webp',
        links: {
            page: 'srr',
            demo: null,
            repo: 'https://github.com/WarXenozord/Smart-Reunion-Room',
        },
    },{
        title: 'Casimiro',
        solo: false,
        star: false,
        description: {
            en: "CurieSat’s older brother — a 2U modular CubeSat designed at ITACube, featuring extended range, battery thermal control, imaging capabilities, and more.",
            pt: 'O irmão mais velho do CurieSat — um CubeSat modular de 2U feito na ITACube, com alcance estendido, controle térmico da bateria, câmera e muito mais.',
        },
        tech: ['C++', 'ESP32', 'STM32', 'Python', 'Raspberry Pi', 'EasyEDA'],
        image: '/images/4.webp',
        links: {
            page: 'casimiro',
            demo: null,
            repo: null,
        },
    },{
        title: 'Tesla',
        solo: false,
        star: false,
        description: {
            en: "A fully SMD-architecture 1U modular CubeSat, still in early development at ITACube. It is designed to use a solar array with MPPT support.",
            pt: 'Um CubeSat modular de 1U com arquitetura totalmente em SMD, ainda em desenvolvimento na ITACube. Foi projetado para utilizar um arranjo solar com suporte a MPPT.',
        },
        tech: ['C++', 'STM32', 'EasyEDA'],
        image: '/images/6.webp',
        links: {
            page: 'tesla',
            demo: null,
            repo: null,
        },
    },{
        title: 'CurieSat',
        solo: false,
        star: true,
        description: {
            en: "The very first 1U CubeSat developed by ITACube, designed to measure the ionizing radiation profile in the atmosphere. It was launched via weather balloon in 2023.",
            pt: 'O primeiro CubeSat de 1U desenvolvido pela ITACube, feito para medir o perfil de radiação ionizante na atmosfera. Foi lançado por balão meteorológico em 2023.',
        },
        tech: ['C++', 'ESP32', 'KiCAD'],
        image: '/images/7.webp',
        links: {
            page: 'CurieSat',
            demo: null,
            repo: null,
        },
    },{
        title: 'ANA',
        solo: false,
        star: true,
        description: {
            en: "A tiny rocket avionics board, fully designed by me. It records altitude and can trigger a two-stage rocket recovery system. I also developed a lightweight Python client to configure the board via USB.",
            pt: 'Uma pequena placa de aviônica para foguetes. Ela registra a altitude e pode acionar uma recuperação em dois estágios. Também desenvolvi um app em Python para configurar a placa via USB.',
        },
        tech: ['C++', 'STM32', 'Python','EasyEDA'],
        image: '/images/8.webp',
        links: {
            page: 'ANA',
            demo: null,
            repo: null,
        },
    }
];

projects.sort((a, b) => a.title.localeCompare(b.title));

export default projects;