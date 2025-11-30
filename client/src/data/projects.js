const projects = [
  {
    title: "Geopredict",
    subtitle: {
      en: "An Easy Way to Access Space Data",
      pt: "Dados de Satélites ao seu Alcance",
    },
    solo: false,
    star: false,
    description: {
      en: "An educational website that teaches about human-caused carbon emissions. It features satellite data fetched from INPE and NASA APIs, along with an interactive game.",
      pt: "Um site educativo que ensina sobre emissões de carbono causadas pelo ser humano. Apresenta dados de satélites obtidos das APIs do INPE e da NASA, além de um jogo interativo.",
    },
    tech: ["Unity", "C#", "React"],
    image: "/images/1.webp",
    links: {
      page: "geopredict",
      demo: null,
      repo: "https://github.com/NarayaneRM/geopredict",
    },
  },
  {
    title: "Test Bench",
    subtitle: {
      en: "For educational rockets",
      pt: "Para foguetes educativos",
    },
    solo: false,
    star: true,
    description: {
      en: "A small, educational, and portable test bench designed at ITA Rocket Design to measure the thrust curve of small rocket motors up to 200 N.",
      pt: "Uma bancada de testes pequena, educacional e portátil, projetada no ITA Rocket Design para medir a curva de empuxo de motores-foguete de pequeno porte com até 200 N.",
    },
    tech: ["C++", "ESP32", "Python", "FreeCAD"],
    image: "/images/2.webp",
    links: {
      page: "testbench",
      demo: null,
      repo: null,
    },
  },
  {
    title: "Smart Reunion Room",
    subtitle: {
      en: "An IOT project for monitoring room usage.",
      pt: "Um projeto IOT para monitorar o uso de salas.",
    },
    solo: false,
    star: false,
    description: {
      en: "An IoT device and web app solution for tracking and responding to human presence in conference rooms. Project for CE-289 course in my studies at ITA.",
      pt: "Solução com dispositivo IoT e aplicativo web para rastrear e reagir à presença humana em salas de reunião. Meu projeto final da disciplina de CE-289 no ITA.",
    },
    tech: ["C++", "ESP32", "React", "MongoDB"],
    image: "/images/3-2.webp",
    links: {
      page: "srr",
      demo: null,
      repo: "https://github.com/WarXenozord/Smart-Reunion-Room",
    },
  },
  {
    title: "Casimiro",
    subtitle: {
      en: "A Modular 2U CubeSat",
      pt: "Um CubeSat 2U Modular",
    },
    solo: false,
    star: false,
    description: {
      en: "CurieSat’s older brother — a 2U modular CubeSat designed at ITACube, featuring extended range, battery thermal control, imaging capabilities, and more.",
      pt: "O irmão mais velho do CurieSat — um CubeSat modular de 2U feito na ITACube, com alcance estendido, controle térmico da bateria, câmera e muito mais.",
    },
    tech: ["C++", "ESP32", "STM32", "Python", "Raspberry Pi", "EasyEDA"],
    image: "/images/4.webp",
    links: {
      page: "casimiro",
      demo: null,
      repo: null,
    },
  },
  {
    title: "Tesla",
    subtitle: {
      en: "In progress: the next big step...",
      pt: "Em progresso: o próximo grande passo...",
    },
    solo: false,
    star: false,
    description: {
      en: "A fully SMD-architecture 1U modular CubeSat, still in early development at ITACube. It is designed to use a solar array with MPPT support.",
      pt: "Um CubeSat modular de 1U com arquitetura totalmente em SMD, ainda em desenvolvimento na ITACube. Foi projetado para utilizar um arranjo solar com suporte a MPPT.",
    },
    tech: ["C++", "STM32", "EasyEDA"],
    image: "/images/6.webp",
    links: {
      page: "tesla",
      demo: null,
      repo: null,
    },
  },
  {
    title: "CurieSat",
    subtitle: {
      en: "An incredible work done at ITACube",
      pt: "Um incrível trabalho feito na ITACube",
    },
    solo: false,
    star: true,
    description: {
      en: "The very first 1U CubeSat developed by ITACube, designed to measure the ionizing radiation profile in the atmosphere. It was launched via weather balloon in 2023.",
      pt: "O primeiro CubeSat de 1U desenvolvido pela ITACube, feito para medir o perfil de radiação ionizante na atmosfera. Foi lançado por balão meteorológico em 2023.",
    },
    tech: ["C++", "ESP32", "KiCAD"],
    image: "/images/7.webp",
    links: {
      page: "CurieSat",
      demo: null,
      repo: null,
    },
  },
  {
    title: "ANA",
    subtitle: {
      en: "Avionics for Small Rockets",
      pt: "Aviônica para Pequenos Foguetes",
    },
    solo: true,
    star: true,
    description: {
      en: "A tiny rocket avionics board. It records altitude and can trigger a two-stage rocket recovery system. I also developed a lightweight Python client to configure the board via USB.",
      pt: "Uma pequena placa de aviônica para foguetes. Ela registra a altitude e pode acionar uma recuperação em dois estágios. Também desenvolvi um app em Python para configurar a placa via USB.",
    },
    tech: ["C++", "STM32", "Python", "EasyEDA"],
    image: "/images/8-2.webp",
    links: {
      page: "ANA",
      demo: null,
      repo: null,
    },
  },
  {
    title: "Kepler",
    subtitle: {
      en: "CurieSat's little Brother",
      pt: "O irmão menor do CurieSat",
    },
    solo: false,
    star: false,
    description: {
      en: "CurieSat's little brother — a compact CanSat offering the same capabilities as its larger sibling, all packed into a much smaller form factor. It's currently in the final stages of assembly at ITACube.",
      pt: "O irmão mais novo do CurieSat - um Cansat com as mesmas capacidades do seu projeto irmão mas com um tamanho muito menor. Atualmente está em seus estágios finais de montagem na ITACube. ",
    },
    tech: ["C++", "STM32", "EasyEDA"],
    image: "/images/10-2.webp",
    links: {
      page: "kepler",
      demo: null,
      repo: null,
    },
  },
  {
    title: "C.C.C.C.",
    subtitle: {
      en: "Crime or Clean, Can I Come In?",
      pt: "Crime or Clean, Can I Come In?",
    },
    solo: false,
    star: false,
    description: {
      en: "A quirky arcade game where you clean hotel rooms while uncovering bizarre crimes. Created in Unity during the 72-hour Ludum Dare game jam.",
      pt: "Um pequeno jogo sobre limpar quartos enquanto investiga crimes em um hotel muito estranho. Feito em Unity durante a game jam de 72h ludum daree.",
    },
    tech: ["C#", "Unity"],
    image: "/images/9-2.webp",
    links: {
      page: "cccc",
      demo: "https://trevo27.itch.io/clean-or-crime",
      repo: null,
    },
  }, {
    title: "Montenegro II",
    subtitle: {
      en: "Sounding Rocket",
      pt: "Sounding Rocket",
    },
    solo: false,
    star: false,
    description: {
      en: "A sounding rocket developed by ITA Rocket Design, reaching an apogee of approximately 3 km and powered by a composite solid propellant. \
      I contributed to the development of the rocket’s avionics system.",
      pt: "Foguete de sondagem desenvolvido pela ITA Rocket Design, com apogeu de aproximadamente 3 km e propelente sólido composto. Contribuí para \
      o desenvolvimento do sistema de aviônica do foguete.",
    },
    tech: ["KiCAD", "C++"],
    image: "/images/11-3.webp",
    links: {
      page: "montenegro",
      demo: null,
      repo: null,
    },
  },  {
    title: "My AWS Mine Server",
    subtitle: {
      en: "AWS Hosted Minecraft Server App",
      pt: "App de Servidor de Minecraft na AWS",
    },
    solo: true,
    star: false,
    description: {
      en: "A Minecraft server that I created to host on AWS. Actually, there are two apps on two servers: one for user login and the other with the server itself.",
      pt: "Um servidor de minecraft que criei para hostear na AWS. Na verdade são dois apps em dois servidores, um para login do usuário e outro com o servidor em si.",
    },
    tech: ["Express", "Java", "React", "AWS"],
    image: "/images/12.webp",
    links: {
      page: "mineserver",
      demo: null,
      repo: "https://github.com/WarXenozord/MineServerMainApp",
    },
  },
];

projects.sort((a, b) => a.title.localeCompare(b.title));

export default projects;
