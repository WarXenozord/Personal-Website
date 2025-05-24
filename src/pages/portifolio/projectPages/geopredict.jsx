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
        mainTitle: 'Check Out What the Satellites Saw',
        main: (<>
            Geopredict is an educational web app developed by <A c={c} href="https://br.linkedin.com/in/francisco-eduardo-fontenele-6aab9020a">Narayane 
            Ribeiro Medeiros</A>, <A c={c} href="https://br.linkedin.com/in/francisco-eduardo-fontenele-6aab9020a">Francisco Eduardo Fontenele
            </A>, and me during a three-day hackathon. The platform provides fast and intuitive access to satellite data from several government 
            agencies, along with an educational simulation designed to teach strategies for reducing human carbon emissions. The project was 
            recognized as a Global Nominee at the <A c={c} href="https://www.spaceappschallenge.org/">NASA 2024 Space Apps Challenge</A>.

            <br /><br />

            My role was to develop a Unity-based visualization simulating a floating island city. As users adjusted levers on the website,
            the simulation responded in real time, showing how different strategies affected carbon emissions and the city's environment.

            <br /><br />

            The tight deadline made it a challenging experience, but also a great opportunity to sharpen my skills. Despite the pressure,
            we had a lot of fun — most of the weekend was spent together, coding, debugging, and laughing through the chaos.
        </>),
    } : {
        mainTitle: 'Veja o que os Satélites Viram',
        main: (<>
            Geopredict é um aplicativo web educacional desenvolvido por <A c={c} href="https://br.linkedin.com/in/francisco-eduardo-fontenele-6aab9020a">
            Narayane Ribeiro Medeiros</A>, <A c={c} href="https://br.linkedin.com/in/francisco-eduardo-fontenele-6aab9020a">Francisco Eduardo Fontenele</A> 
            e por mim durante uma maratona de programação de três dias. A plataforma permite acesso rápido e intuitivo a dados de satélite de diversas 
            agências governamentais, além de oferecer uma simulação educativa voltada para o ensino de estratégias de redução das emissões de carbono
            humanas. O projeto foi reconhecido como Global Nominee no <A c={c} href="https://www.spaceappschallenge.org/">NASA 2024 Space
            Apps Challenge</A>.

            <br /><br />

            Minha contribuição foi o desenvolvimento de uma visualização em Unity que simulava uma cidade em uma ilha flutuante. Ao mover
            alavancas no site, os usuários podiam ver a cidade se transformando em tempo real, de acordo com as estratégias adotadas para
            reduzir as emissões de carbono.

            <br /><br />

            Trabalhar sob um prazo tão apertado foi desafiador, mas também uma ótima oportunidade para aprimorar minhas habilidades. E,
            apesar da correria, nos divertimos bastante — passamos a maior parte do fim de semana juntos, programando, resolvendo bugs e
            dando risada no meio do caos.
        </>),
    })
})

export default function SRRPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'geopredict')
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
                    alt='Geopredict interface'
                    src='/images/1-2.webp'
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
