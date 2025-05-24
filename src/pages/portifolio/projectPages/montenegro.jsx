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
        mainTitle: 'To the stars!',
        main: (<>
            Montenegro II was a sounding rocket developed by <A c={c} href="https://www.linkedin.com/company/ita-rocket-design/"
            >ITA Rocket Design</A> to compete in the 2023 <A c={c} href="https://www.lasc.space/">Latin America Space Challenge</A>
            —LASC for short. The rocket stood about 2 meters tall, with a diameter of 15 cm, and used a composite HTPB-based solid
            propellant. It earned 2nd place in the 3 km solid rocket category at LASC!

            <br /><br />

            I focused mainly on the rocket’s avionics, setting up the LoRa telemetry system and onboard sensors for trajectory
            reconstruction and data collection. It was an eye-opening experience—despite having a similar architecture to a
            balloon-based CubeSat, the rocket’s requirements were entirely different, especially in terms of structural robustness,
            as it needed to withstand up to 8 g. The presence of many metal components also made RF testing significantly more complex.

            <br /><br />

            Beyond the excitement of the competition and meeting rocketry teams from around the world, I also participated in a test
            launch at the <A c={c} href="https://www2.fab.mil.br/clbi/">Centro de Lançamento da Barreira do Inferno (CLBI)</A> a few
            weeks before the event. That hands-on experience taught me a lot about launch procedures and operational timelines.
        </>),
    } : {
        mainTitle: 'Até as estrelas!',
        main: (<>
            O Montenegro II foi um foguete de sondagem desenvolvido pela <A c={c} href="https://www.linkedin.com/company/ita-rocket-design/"
            >ITA Rocket Design</A> para competir no <A c={c} href="https://www.lasc.space/">Latin America Space Challenge</A> (LASC) de 
            2023. O foguete tinha cerca de 2 metros de altura, 15 cm de diâmetro e utilizava um propelente sólido composto à base de HTPB. 
            Conquistou o 2º lugar na categoria foguete sólido de 3 km no LASC!

            <br /><br />

            Trabalhei principalmente na aviônica do foguete, configurando o sistema de telemetria por rádio LoRa e os sensores para 
            reconstrução da trajetória e coleta de dados. Foi uma experiência extremamente enriquecedora—apesar da arquitetura lembrar 
            a de um CubeSat em balão, os requisitos eram bem diferentes, especialmente quanto à estrutura, que precisava suportar até 8 g. 
            Além disso, a presença de muitas partes metálicas tornou os testes de RF ainda mais desafiadores.

            <br /><br />

            Além de aproveitar a competição e conhecer equipes de foguetes do mundo todo, também participei de um lançamento de teste 
            no <A c={c} href="https://www2.fab.mil.br/clbi/">Centro de Lançamento da Barreira do Inferno (CLBI)</A> algumas semanas 
            antes do evento. Essa experiência prática me ensinou muito sobre os procedimentos e a cronologia de um lançamento real.
        </>),
    })
})

export default function MontenegroPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'montenegro ii')
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
                    alt='motor burning at bench'
                    src='/images/11-2.webp'
                    width={`${(100 / (5180 / 3888 + 1) * 5180 / 3888).toPrecision(4)}%`}
                    sx={{
                        borderRadius: '10px 0 0 10px',
                        borderLeft: '1.5px solid ' + colors.grey[900],
                        borderTop: '1.5px solid ' + colors.grey[900],
                        borderBottom: '1.5px solid ' + colors.grey[900],
                    }}
                />
                <Box component='img'
                    alt='test bench'
                    src='/images/11.webp'
                    width={`${(100 / (5180 / 3888 + 1) * 1).toPrecision(4)}%`}
                    sx={{
                        borderRadius: '0 10px 10px 0',
                        borderRight: '1.5px solid ' + colors.grey[900],
                        borderTop: '1.5px solid ' + colors.grey[900],
                        borderBottom: '1.5px solid ' + colors.grey[900],
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