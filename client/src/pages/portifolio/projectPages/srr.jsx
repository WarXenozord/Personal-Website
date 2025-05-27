import { Box, Typography, Grid } from "@mui/material";

import { useContext } from 'react';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import projects from "../../../data/projects.js";

import { A } from "../../../util/shortlink.jsx"
import NormalHeader from "./sections/normalHeader.jsx";

const projectLProps = (lang, c) => ({
    ...(lang === 'en' ? {
        mainTitle: 'Getting data about your rooms',
        main: (<>
            Smart Reunion Room — or SRR for short — was a project developed by me, <A c={c}
                href="https://www.linkedin.com/in/leonardo-trevilato-0816bb1a5/">Leonardo Trevilato</A>, and <A c={c}
                    href="https://www.linkedin.com/in/ruan-fernandes-campos/">Ruan Fernandes</A> during the CE-289 course at ITA. Our goal was to
            create a smart device — the “Hub” — capable of monitoring room occupancy using a mmWave radar sensor. This sensor can detect people
            even when they remain completely still, making it far more reliable than traditional motion detectors. The Hub could automatically
            control other devices in the room, such as air conditioners and lighting systems, depending on occupancy.

            <br /><br />

            In addition to the device itself, we developed a web-based platform where users could schedule meetings and monitor real-time
            room usage data. The system was designed to improve energy efficiency and optimize shared space utilization, which is especially
            valuable in office and institutional settings.

            <br /><br />

            My contributions included designing the Hub’s custom PCB, based on the ESP32 microcontroller. The board integrated a mmWave
            sensor, an IR transmitter and receiver, and an SD card module for local data logging. I was also involved in the development
            of the IoT application's front end, using a <A c={c} href="https://github.com/ed-roh/react-admin-dashboard">React-based open-source
                dashboard template by Edward Roh</A>. On the backend, I helped set up the MongoDB database and API interface, which handled all
            communication between the Hub and the platform.

            <br /><br />

            It was a challenging and rewarding project for a six-month course. I gained hands-on experience with React, MongoDB, HTTP
            requests, and IoT integration using the ESP32 platform. The complete source code for both the web app and the embedded Hub
            firmware is available on GitHub <A c={c} href="https://github.com/WarXenozord/Smart-Reunion-Room">here</A>.
        </>),
    } : {
        mainTitle: 'Obtendo dados das suas salas',
        main: (<>
            Smart Reunion Room — ou SRR — foi um projeto desenvolvido por mim, <A c={c} 
            href="https://www.linkedin.com/in/leonardo-trevilato-0816bb1a5/">Leonardo Trevilato</A>, e por <A c={c} 
            href="https://www.linkedin.com/in/ruan-fernandes-campos/">Ruan Fernandes</A> durante o curso CE-289 no ITA. O nosso objetivo era
            criar um dispositivo inteligente — o "Hub" — capaz de monitorar a ocupação de uma sala utilizando um sensor mmWave. Esse sensor
            é capaz de detectar pessoas mesmo quando estão completamente imóveis, sendo muito mais confiável que sensores de movimento
            tradicionais. O Hub podia ativar automaticamente outros dispositivos da sala, como ar-condicionado e iluminação, com base na
            ocupação detectada.

            <br /><br />

            Além do dispositivo em si, também desenvolvemos uma plataforma web onde os usuários podiam agendar reuniões e monitorar,
            em tempo real, dados de uso da sala. O sistema foi pensado para melhorar a eficiência energética e otimizar o uso de espaços
            compartilhados, especialmente em ambientes corporativos ou institucionais.

            <br /><br />

            Minhas contribuições incluíram o projeto da placa PCB personalizada do Hub, baseada no microcontrolador ESP32. A placa integrava
            um sensor mmWave, um transmissor e receptor infravermelho e um módulo de cartão SD para armazenamento local dos dados. Também
            participei do desenvolvimento da interface front-end da aplicação IoT, utilizando um <A c={c} 
            href="https://github.com/ed-roh/react-admin-dashboard">template React de código aberto criado por Edward Roh</A>. No back-end,
            ajudei a estruturar o banco de dados MongoDB e a interface de API responsável pela comunicação entre o Hub e a plataforma.

            <br /><br />

            Foi um projeto desafiador e bastante recompensador para um curso de seis meses. Aprendi muito sobre React, MongoDB, requisições
            HTTP e integração IoT usando a plataforma ESP32. O código-fonte completo do projeto, tanto da aplicação web quanto do firmware
            embarcado do Hub, está disponível no GitHub <A c={c} href="https://github.com/WarXenozord/Smart-Reunion-Room">aqui</A>.
        </>),
    })
})

export default function SRRPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'smart reunion room')
    return (<>
        <NormalHeader tagColors={colors.red[500]}
            title={proj.title}
            subtitle={proj.subtitle[lang]}
            tech={proj.tech}
        />

        <Grid container spacing={4} mt='30px'>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
                alignContent='center'>
                <Box component='img'
                    alt='Smart reunion room Hub'
                    src='/images/3-4.webp'
                    width='100%'
                    sx={{
                        borderRadius: '10px',
                        border: '1.5px solid ' + colors.grey[900],
                    }}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                <Typography variant="h2" gutterBottom>{lProps.mainTitle}</Typography>
                <Typography variant='body2' textAlign='justify'>
                    {lProps.main}
                </Typography>
            </Grid>
        </Grid>
    </>)
}