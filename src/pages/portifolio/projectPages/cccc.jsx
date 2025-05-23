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
        mainTitle: 'Creating games is fun',
        main: (<>
            "Crime or Clean, Can I Come In" - or C.C.C.C. for short - is an arcade game developed by me and <A c={c}
                href="https://www.linkedin.com/in/maria-antonia-del-nero-640988282/">Maria Antônia del Nero</A> during the <A
                    c={c} href="https://ludumdare.com/">Ludum Dare</A> game jam. The concept is simple: clean multiple hotel rooms,
            but if you spot any signs of a crime, you must investigate further by collecting all the evidence in the room.
            The faster you do it, the higher your score!
            <br /><br />
            I focused mainly on procedural map generation, which creates both the corridor and rooms based on a random seed.
            I also built the UI, the main menu screen, and even contributed some pixel art. Besides being a lot of fun to make,
            this project taught me a great deal about the Unity engine and its collaboration tools.
            <br /><br />
            The game is still live on itch.io - check it out <A c={c} href="https://trevo27.itch.io/clean-or-crime">here</A>,
            and don't forget to leave a review if you enjoy it!
        </>),
    } : {
        mainTitle: 'Criar jogos é divertido',
        main: (<>
            "Crime or Clean, Can I Come In" — ou C.C.C.C. para os íntimos — é um jogo arcade desenvolvido por mim e pela <A 
            c={c} href="https://www.linkedin.com/in/maria-antonia-del-nero-640988282/">Maria Antônia del Nero</A> durante 
            a game jam <A c={c} href="https://ludumdare.com/">Ludum Dare</A>. A ideia do jogo é simples: você precisa limpar 
            vários quartos de hotel, mas se encontrar sinais de um crime, deve investigar mais a fundo coletando todas as 
            evidências na sala. Quanto mais rápido o fizer, maior será sua pontuação!
            <br /><br />
            Eu trabalhei principalmente na geração procedural dos mapas, que cria tanto o corredor quanto os quartos com 
            base em uma semente aleatória. Também desenvolvi a interface do usuário, a tela do menu principal e até fiz 
            alguns dos pixel arts. Além de ter sido muito divertido, esse projeto me ensinou bastante sobre Unity 
            e suas ferramentas de colaboração.
            <br /><br />
            O jogo ainda está disponível no itch.io — confira <A c={c} href="https://trevo27.itch.io/clean-or-crime">aqui
            </A> e não se esqueça de deixar uma avaliar se curtir!
        </>),
    })
})

export default function CuriesatPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'c.c.c.c.')
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
                    src='/images/9-3.webp'
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