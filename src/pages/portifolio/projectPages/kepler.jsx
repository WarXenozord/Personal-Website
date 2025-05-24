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
        mainTitle: 'Small but Powerful',
        main: (<>
            KeplerSat is a CanSat developed by <A c={c} href="https://www.itacube.ita.br/">ITACube</A>,
            offering the same capabilities as CurieSat but in a more compact and complex design. Due to
            tighter size constraints, the project required five stacked boards, most of which include SMD components.

            <br /><br />

            I was directly involved in the board design process. None of them were simple, but the biggest
            challenge was developing the Geiger counter payload in a miniaturized form. This required replacing
            several ICs used in CurieSat’s original design, adapting them to fit the new size and power constraints.
            One critical issue was managing voltage creep: the 400V supply for the Geiger circuit had such low current
            capacity that even minor leakage on the PCB could render it inoperative. To mitigate this, I simulated the
            entire circuit in LTSpice before fabrication. Fortunately, the design held up and the boards performed as
            intended.

            <br /><br />

            The project is now in the final assembly phase at ITACube and is expected to undergo ground testing shortly,
            followed by launch.
        </>),
    } : {
        mainTitle: 'Pequeno mas Poderoso',
        main: (<>
            O KeplerSat é um CanSat desenvolvido pela <A c={c} href="https://www.itacube.ita.br/">ITACube</A>, com as 
            mesmas capacidades do CurieSat, mas com um projeto mais compacto e complexo. Devido às restrições de 
            tamanho, o satélite conta com cinco placas empilhadas, a maioria com componentes SMD.

            <br /><br />

            Participei diretamente do processo de desenvolvimento das placas. Nenhuma delas foi trivial, mas o maior 
            desafio foi projetar o payload do contador Geiger em formato miniaturizado. Isso exigiu a substituição de 
            vários CIs usados no design original do CurieSat, adaptando-os às novas limitações de espaço e energia. Um 
            dos pontos críticos foi lidar com o voltage creep: a fonte de 400V do circuito tinha uma capacidade de corrente 
            tão baixa que até mesmo pequenos vazamentos na placa poderiam torná-la inoperante. Para evitar isso, simulei o 
            circuito completo no LTSpice antes da fabricação. Felizmente, o projeto se mostrou eficaz e as placas funcionaram 
            como esperado.

            <br /><br />

            Atualmente, o projeto está na fase final de montagem na ITACube e deve passar por testes em solo em breve, 
            seguido do lançamento.
        </>),
    })
})

export default function KeplerPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'kepler')
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
                    src='/images/10.webp'
                    width={`${(100 / (1462 / 1404 + 1600 / 1552) * 1600 / 1552).toPrecision(4)}%`}
                    sx={{
                        borderRadius: '10px 0 0 10px',
                        borderLeft: '1.5px solid ' + colors.grey[900],
                        borderTop: '1.5px solid ' + colors.grey[900],
                        borderBottom: '1.5px solid ' + colors.grey[900],
                    }}
                />
                <Box component='img'
                    alt='test bench'
                    src='/images/10-2.webp'
                    width={`${(100 / (1462 / 1404 + 1600 / 1552) * 1462 / 1404).toPrecision(4)}%`}
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