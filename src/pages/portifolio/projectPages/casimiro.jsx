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
        mainTitle: 'The sucessor of CurieSat',
        main: (<>
            Casimiro is a 2U CubeSat developed by <A c={c} href="https://www.itacube.ita.br/">ITACube</A>, designed with a strong focus on modularity.
            It features a universal bus and a dedicated payload bus that allow for flexible rearrangement of the board layout and subsystem upgrades
            with minimal changes to the rest of the hardware. Additionally, it includes a standalone payload interface board, enabling seamless integration
            with various payloads without requiring modifications to the onboard computer software.

            <br /><br />

            My role in the Casimiro project was to design the layout for several subsystem boards. This included:
            a TT&C board using LoRa radios, an EPS board with configurable power converters, battery heaters, and current-monitoring ICs, 
            an OBDH board based on a Raspberry Pi Zero 2,
            and a payload interface board featuring an STM32 microcontroller and multiple power-switching MOSFETs.

            <br /><br />

            Thanks to its modular and highly configurable architecture, Casimiro is an excellent platform for responsive missions.
            Its larger form factor and enhanced processing capabilities support more advanced payloads, such as image-processing cameras.
            Overall, this balloon launched satellite stands out as one of ITACube’s most versatile tools.
        </>),
    } : {
        mainTitle: 'O sucessor do CurieSat',
        main: (<>
            Casimiro é um CubeSat 2U desenvolvido pela <A c={c} href="https://www.itacube.ita.br/">ITACube</A>, com forte foco em modularidade.
            Ele conta com um barramento universal e um barramento dedicado à carga útil, permitindo a reorganização livre do layout das placas
            e atualizações dos subsistemas com mudanças mínimas no restante do hardware. Além disso, possui uma placa exclusiva para interface
            com a carga útil, possibilitando a integração com diferentes experimentos sem a necessidade de modificar o software do computador de bordo.

            <br /><br />

            Minha função no projeto Casimiro foi desenvolver o layout das placas dos subsistemas individuais. Isso incluiu:
            uma placa TT&C com rádios LoRa, uma placa EPS com conversores de potência configuráveis, aquecedores de bateria e circuitos integrados 
            para monitoramento de corrente, uma placa OBDH baseada em um Raspberry Pi Zero 2, e uma placa de interface com a carga útil equipada 
            com um microcontrolador STM32 e diversos MOSFETs para chaveamento de potência.

            <br /><br />

            Com uma arquitetura modular e altamente configurável, o Casimiro se destaca como uma excelente plataforma para missões responsivas.
            Seu maior volume e capacidade de processamento permitem o uso de cargas úteis mais complexas, como câmeras para processamento de imagens.
            No geral, esse satélite de balão é uma das ferramentas mais versáteis da ITACube.
        </>),
    })
})

export default function CasimiroPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'casimiro')
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
                    alt='Tesla board design'
                    src='/images/4-3.webp'
                    width={`${(100 / (664.5 / 625 + 1) * 1).toPrecision(4)}%`}
                    sx={{
                        borderRadius: '10px 0 0 10px',
                        borderLeft: '1.5px solid ' + colors.grey[900],
                        borderTop: '1.5px solid ' + colors.grey[900],
                        borderBottom: '1.5px solid ' + colors.grey[900],
                    }}
                />
                <Box component='img'
                    alt='PCB 3d rendered image'
                    src='/images/4-2.webp'
                    width={`${(100 / (664.5 / 625 + 1) * 664.5 /625).toPrecision(4)}%`}
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
