import { Box, Typography, Grid} from "@mui/material";

import { useContext } from 'react';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import projects from "../../../data/projects.js";

import {A} from "../../../util/shortlink.jsx"
import PicHeader from "./sections/picHeader.jsx";

const projectLProps = (lang, c) => ({
    ...(lang === 'en' ? {  
        introTitle: 'I got tired of importing those',
        intro: (<>
            Aerospace Nanoscaled Avionics – or ANA – is an all-in-one avionics board for small rockets, capable of tracking the vehicle's trajectory,
            activating a two-stage recovery system, and reading data from third-party I2C sensors. My main goal in designing this board was to create a
            more affordable alternative to commercial solutions, which tend to be prohibitively expensive in Brazil.
            <br /><br />
            Drawing on my experience with <A c={c} href="https://www.linkedin.com/company/ita-rocket-design/">ITA Rocket Design</A>, I designed ANA
            to be fully optimized for rocket operations. It features a latching power switch activated by an RBF pin, redundant data storage using
            both onboard flash and an SD card, and a buzzer for easier identification of system states and warnings by users.
        </>),
        presTitle: 'Built in Stages',
        pres: (<>
            ANA is built around an STM32 microcontroller and includes a BMP380 barometer, an SD card slot, a USB port, block terminals, several
            MOSFETs, and supporting circuitry such as crystals, capacitors, and a voltage regulator. I aimed to design a board compact enough
            to fit in even the smallest rockets, while still being powerful enough for more advanced systems — so I committed to a fully SMD-based
            design.

            <br /><br />

            ANA v0.1 was the very first SMD PCB I designed. While it did function, it had some major flaws in the RTC clock circuit.
            Despite that, I managed to write most of the firmware using STM32CubeIDE, which turned out to be a great opportunity to learn
            ST’s development framework. However, I couldn’t flight-test v0.1 because its form factor was still too large for the smaller
            (and more readily available) rockets at ITA Rocket Design.

            <br /><br />

            This led me to create ANA v0.2 with a slimmer profile and a fully functional RTC clock. I also developed a simple Python client
            to let users quickly configure the board via USB and retrieve flight data. This version was launched aboard some minirockets at
            ITA Rocket Design, but unfortunately, the flights couldn’t be completed due to motor issues — so full validation is still pending.

            <br /><br />

            At the moment, I’m still finalizing the firmware and desktop client in preparation for a finalized ANA v1.0 — stay tuned!
        </>),
    } : {
        introTitle: 'Pequenos motores, grande aprendizado',
        intro: (<>
            Aerospacial Nanoscaled Avionics – ou ANA – é uma placa de aviônica tudo-em-um para pequenos foguetes, capaz de rastrear a trajetória do veículo,
            ativar um sistema de recuperação em dois estágios e ler dados de sensores I2C de terceiros. Meu principal objetivo ao desenvolver esta placa foi criar
            uma alternativa mais acessível às soluções comerciais, que costumam ser extremamente caras no Brasil.
            <br /><br />
            Com base na minha experiência com a <A c={c} href="https://www.linkedin.com/company/ita-rocket-design/">ITA Rocket Design</A>, projetei a ANA
            para ser totalmente otimizada para operações com foguetes. Ela conta com um interruptor de energia com travamento, ativado por um pino RBF,
            armazenamento redundante de dados em memória flash e cartão SD, além de um buzzer para facilitar a identificação de estados e alertas pelo usuário.
        </>),
        presTitle: 'Apresentado no Contecc',
        pres: (<>
            A ANA é baseada em um microcontrolador STM32 e conta com um barômetro BMP380, slot para cartão SD, porta USB, terminais de bloco,
            vários MOSFETs e circuitos auxiliares como cristais, capacitores e um regulador de tensão. Minha ideia era criar uma placa pequena
            o suficiente para caber nos menores foguetes, mas ainda assim poderosa o bastante para aplicações mais complexas — por isso optei
            por um design totalmente SMD.

            <br /><br />

            A ANA v0.1 foi a primeira PCB SMD que projetei. Embora tenha funcionado, apresentou falhas significativas no circuito do relógio RTC.
            Apesar disso, consegui desenvolver a maior parte do firmware utilizando o STM32CubeIDE, o que foi uma ótima oportunidade para aprender
            sobre o framework da ST. No entanto, não consegui testar a v0.1 em voo porque seu formato ainda era grande demais para os foguetes menores
            (que eram os mais acessíveis no ITA Rocket Design).

            <br /><br />

            Isso me levou a projetar a ANA v0.2 com um perfil mais fino e um circuito RTC totalmente funcional. Também desenvolvi um cliente simples
            em Python para permitir que usuários configurassem rapidamente a placa via USB e acessassem os dados de voo. Essa versão chegou a ser
            lançada em alguns minifoguetes no ITA Rocket Design, mas os voos não foram completados devido a falhas nos motores — portanto, a validação
            total da placa ainda está pendente.

            <br /><br />

            Atualmente, sigo finalizando tanto o firmware quanto o cliente desktop para lançar a versão final ANA v1.0 — fique ligado!
        </>),
    })
})

export default function TestBenchPage() {
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)
        
    const proj = projects.find(project => 
    project.title.toLowerCase() === 'ana')
    return(
    <>
        <PicHeader 
        cover = '8-6.webp' 
        title={proj.title}
        subtitle={proj.subtitle[lang]}
        tech={proj.tech}
        />
    
        {/* Details */}
        <Grid container spacing={4} mt='30px'>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box component='img' 
                alt='ANA V0'
                src='/images/8-3.webp'
                width= {`${(100/(1164/704 + 1370/769) * 1370/769 ).toPrecision(4)}%`}
                sx={{
                    borderRadius: '10px 0 0 10px',
                    borderLeft: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
                <Box component='img' 
                alt='ANA V0 PCB'
                src='/images/8-5.webp'
                width= {`${(100/(1164/704 + 1370/769) * 1164/704).toPrecision(4)}%`}
                sx={{
                    borderRadius: '0 10px 10px 0',
                    borderRight: '1.5px solid ' + colors.grey[900],
                    borderTop: '1.5px solid ' + colors.grey[900],
                    borderBottom: '1.5px solid ' + colors.grey[900],
                }}
                />
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2" gutterBottom>{lProps.introTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.intro}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}>
                <Typography variant="h2" textAlign='right' gutterBottom>{lProps.presTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.pres}
                </Typography>
            </Grid>
            <Grid size={{xs:12, sm:12,md:12,lg:6}}
            alignContent='center'>
                <Box component='img' 
                alt='ANA V0.2'
                src='/images/8-2.webp'
                width= '100%'
                sx={{
                    borderRadius: '10px',
                    border: '1.5px solid ' + colors.grey[900],
                }}
                />
            </Grid>
        </Grid>
    </>
)}