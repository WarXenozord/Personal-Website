import { useContext } from "react"

import { Box, Typography, Grid } from "@mui/material"

import ProjectCard from "./projectCard.jsx"

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext } from '../../util/lang.js'
import { langPropsPortifolio } from '../../data/langProps.js'

import projects from '../../data/projects.js'

function Portifolio(){ 
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsPortifolio(lang)
    
    return (
        <Box component='section' id='portifolio'
        backgroundColor={colors.secondary[500]}
        p='30px 20px'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                gap: '15px',
                textAlign:'center',
            }}>
                <Typography variant="h2" fontSize={{xs: '2.5rem', sm: '2.7rem', md: '3rem'}}>
                    {lProps.title}
                </Typography>
                <Box height='2px' width='40%' backgroundColor={colors.grey[500]} />
                <Typography variant="h4" fontSize={{xs: '1.2rem', sm: '1.3rem', md: '1.4em'}}>
                    {lProps.subtitle}
                </Typography>
            </Box>
            <Box sx={{
                borderRadius: '10px',
                margin: '15px 0',
                padding: '20px 20px',
                backgroundColor: colors.primary[500],
            }}>
                <Grid container 
                columns={{ xs: 2, sm: 4, md: 6, lg:12, xl:10 }}>
                    {projects.map((proj, idx) => (
                        <Grid item key={idx} size={{ xs: 2, sm: 2, md: 2, lg:3, xl:2 }}>
                            <ProjectCard {...proj} lang={lang}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>    
        </Box>
)}

export default Portifolio