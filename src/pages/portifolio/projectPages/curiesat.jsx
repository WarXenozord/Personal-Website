import { Box, Typography, Grid } from "@mui/material";

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext, langPropsProjectPage} from '../../../util/lang.js'
import projects from "../../../data/projects.js";

import PicHeader from "./sections/picHeader.jsx";

export default function CuriesatPage() {
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsProjectPage(lang)
    const navigate = useNavigate()
        
    const proj = projects.find(project => 
    project.title.toLowerCase() === 'curiesat')
    return(
    <>
        <PicHeader 
        cover = '7-2.webp' 
        title={proj.title}
        subtitle={proj.subtitle[lang]}
        tech={proj.tech}
        />
    
        {/* Details */}
        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>Description</Typography>
            <Typography>aaaaaaaaaaaaaa</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Tech Stack</Typography>
                <Typography>• aaaa</Typography>
            </Grid>
        </Grid>
    </>
    )
}