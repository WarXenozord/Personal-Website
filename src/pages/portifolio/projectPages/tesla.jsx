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
        mainTitle: 'The very best of ITACube',
        main: (<>
            TeslaSat is part of the next generation of CubeSats developed by <A c={c} href="https://www.itacube.ita.br/">ITACube</A>.
            It features a more professional, SMD-based architecture, is PCI/104 compatible, and includes solar arrays—along with major
            upgrades across all systems. TeslaSat is currently being developed to compete in <A c={c}
            href="https://www.linkedin.com/company/cubedesign-inpe/?originalSubdomain=br">INPE's CubeDesign</A> competition.
            <br /><br />
            My contribution to TeslaSat involved writing the requirements for the satellite's form factor and PCI bus pinout, based on
            various COTS CubeSat components, to ensure compatibility with the PCI/104 standard and most commercially available parts.
            I also contributed to the design of the TT&C, OBDH, and power boards, with a particular focus on the MPPT circuitry for
            the solar arrays.
            <br /><br />
            The project is still in the design phase at ITACube, but I'm optimistic. It's poised to be a major step forward in ITACube's
            development!
        </>),
    } : {
        mainTitle: 'O melhor do melhor da ITACube',
        main: (<>
            O TeslaSat faz parte da nova geração de CubeSats desenvolvidos pela <A c={c} href="https://www.itacube.ita.br/">ITACube</A>. 
            Ele conta com uma arquitetura mais profissional baseada em componentes SMD, é compatível com o padrão PCI/104 e possui painéis 
            solares — além de grandes melhorias em todos os sistemas. Atualmente, o TeslaSat está sendo desenvolvido para competir no <A
             c={c} href="https://www.linkedin.com/company/cubedesign-inpe/?originalSubdomain=br">CubeDesign do INPE</A>.
            <br /><br />
            Minha contribuição para o TeslaSat envolveu a redação dos requisitos para o formato físico do satélite e o mapeamento dos pinos 
            do barramento PCI, com base em diversos componentes COTS já existentes no mercado, garantindo a compatibilidade com o padrão 
            PCI/104 e com a maioria das peças comerciais. Também colaborei no projeto das placas de TT&C, OBDH e potência, com destaque 
            para o circuito de MPPT dos painéis solares.
            <br /><br />
            O projeto ainda está em fase de desenvolvimento pela ITACube, mas tenho grandes expectativas. Ele representa o próximo grande 
            passo na trajetória da ITACube!
        </>),
    })
})

export default function TeslaPage() {
    const { lang } = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = projectLProps(lang, colors)

    const proj = projects.find(project =>
        project.title.toLowerCase() === 'tesla')
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
                    src='/images/6.webp'
                    width={`${(100 / (1883 / 1584 + 750 / 781) * 750 / 781).toPrecision(4)}%`}
                    sx={{
                        borderRadius: '10px 0 0 10px',
                        borderLeft: '1.5px solid ' + colors.grey[900],
                        borderTop: '1.5px solid ' + colors.grey[900],
                        borderBottom: '1.5px solid ' + colors.grey[900],
                    }}
                />
                <Box component='img'
                    alt='PCB 3d rendered image'
                    src='/images/6-2.webp'
                    width={`${(100 / (1883 / 1584 + 750 / 781) * 1883 / 1584).toPrecision(4)}%`}
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