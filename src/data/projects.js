const projects = [{
        title: 'Geopredict',
        description: 'A educational site that teaches about human-based carbon emissions. Features satelite data collected from INPE and NASA APIs and a interactive game.',
        tech: ['Unity', 'C#', 'React'],
        image: '/images/1.webp',
        links: {
            page: 'portifolio/geopredict',
            demo: null,
            repo: 'https://github.com/NarayaneRM/geopredict'
        },
    },{
        title: 'Test Bench',
        description: 'A portable test bench designed to measure the thrust of small rocket motors made at ITA Rocket Design.',
        tech: ['C++', 'ESP32', 'Python', 'FreeCAD'],
        image: '/images/2.webp',
        links: {
            page: 'portifolio/testbench',
            demo: null,
            repo: null,
        },
    },{
        title: 'Smart Reunion Room',
        description: 'IoT solution for tracking human presence data from conference rooms. Project made during CE-289 classes at ITA.',
        tech: ['C++', 'ESP32', 'React', 'MongoDB'],
        image: '/images/3.webp',
        links: {
            page: 'portifolio/srr',
            demo: null,
            repo: null,
        },
    },{
        title: 'Casimiro',
        description: 'A modular cubesat used by ITACube.',
        tech: ['C++', 'ESP32', 'STM32', 'Python', 'Raspberry Pi', 'EasyEDA'],
        image: '/images/4.webp',
        links: {
            page: 'portifolio/casimiro',
            demo: null,
            repo: null,
        },
    },{
        title: 'Tesla',
        description: 'A SMD based cubeSat on early development at ITACube.',
        tech: ['C++', 'STM32', 'EasyEDA'],
        image: '/images/6.webp',
        links: {
            page: 'portifolio/tesla',
            demo: null,
            repo: null,
        },
    },{
        title: 'Placeholder',
        description: 'Placeholder',
        tech: ['C++', 'STM32', 'EasyEDA'],
        image: '/images/5.webp',
        links: {
            page: 'portifolio/aaa',
            demo: null,
            repo: null,
        },
    }
];

projects.sort((a, b) => a.title.localeCompare(b.title));

export default projects;