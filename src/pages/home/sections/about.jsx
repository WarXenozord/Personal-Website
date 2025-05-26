import { useContext, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import { langPropsAbout } from '../../../data/langProps.js'


function About(){
    //---Buttons state---//
    const [field, setField] = useState('Competences')

    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsAbout(lang)   

    //---Common Stles---//
    const shortLine = {
        marginTop: '10px',
        height: '1px',
        width: '150px',
        transition:  'background-color 0.3s ease-in-out'
    }
    const txtWidth = {
        xs: '90%', sm:'90%', md: '45%'
    }
    const textPar = {
        textAlign:'justify', 
        fontSize: '1.4rem',
        m:'10px 0 0 0',
        height:'80%',
        whiteSpace: 'pre-line'
    }
    const outlineButton = {
        border: 'solid 1px',
        borderRadius: '30px',
        textTransform: 'none',
        fontSize: {xs: '1.6rem',sm:'1.5rem',md:'1.2rem'},
        padding: '2.5px 25px',
        marginTop: {xs:'20px', sm:'20px', md:'10px'},
        marginBottom: {xs:'30px', sm:'25px', md:'10px'},
        transition: 'color 0.2s ease-in-out, border-color 0.2s ease-in-out',
        '&:hover':{
            backgroundColor: colors.grey[100] + '20',
            color: colors.grey[900],
            borderColor: colors.grey[900],
        }
    }
    const titleUnselected = {
        transition:  'color 0.2s ease-in-out',
        color: colors.grey[500],
        '&:hover':{
            color: colors.grey[900],
            cursor: 'pointer'
        }
    }

    const titleSelected = {
        '&:hover':{cursor:'pointer'}
    }

    // router dom links
    const navigate = useNavigate();

    return (
        <Box component='section'
        id='about'
        height={{xs: 'auto', lg: 'max(75vh,700px)'}}
        sx={{
                backgroundColor: colors.secondary[500],
                display: 'flex',
                gap: {xs: '10px', sm: '10px', md:'0'},
                flexDirection: {xs: 'column', sm:'column', md: 'row'},
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '5px'
        }}>
            <Box width={txtWidth} justifyItems='center'>
                    <Typography variant='h4'>
                        {lProps.aboutTitle}
                    </Typography>
                    <Box sx={[shortLine, {backgroundColor: colors.blue[500]}]}></Box>
                    <Typography variant='body2' sx={textPar}>
                        {lProps.aboutText}
                    </Typography>
                    <Button sx={[outlineButton,{
                        color: colors.blue[500],
                        borderColor: colors.blue[500]
                    }]} onClick={()=> {navigate('/about')}}>
                        {lProps.aboutButton}
                    </Button>
            </Box>
            <Box width={txtWidth} justifyItems='center'>
                    <Box display='flex' justifyContent='center'>
                        <Box justifyItems='center'>
                            {field === 'Competences' ? (
                                <Typography variant='h4'
                                sx={titleSelected}>
                                    {lProps.competencesTitle}
                                </Typography>
                            ):(
                                <Typography variant='h4' 
                                onClick={() => {setField('Competences')}}
                                sx={titleUnselected}>
                                    {lProps.competencesTitle}
                                </Typography>
                            )}
                            <Box sx={[
                                shortLine, 
                                {   backgroundColor: field === 'Competences' ?
                                    colors.red[500] : colors.grey[500]}
                            ]}></Box>
                        </Box>
                        <Box justifyItems='center'>
                            {field === 'Experience' ? (
                                <Typography variant='h4' 
                                sx={titleSelected}>
                                    {lProps.experienceTitle}
                                </Typography>
                            ) : (
                                <Typography 
                                variant='h4' 
                                onClick={() => {setField('Experience')}}
                                sx={titleUnselected}>
                                    {lProps.experienceTitle}
                                </Typography>
                            )}
                            <Box sx={[
                                shortLine, 
                                {backgroundColor: field === 'Experience' ?
                                    colors.red[500] : colors.grey[500]}
                            ]}></Box>
                        </Box>
                    </Box>
                    <Typography variant='body2' sx={[textPar]}>
                        {field === 'Competences' ? 
                        lProps.competencesText : lProps.experienceText}
                    </Typography>
                    <Button sx={[outlineButton,{
                        color: colors.red[500],
                        borderColor: colors.red[500]
                    }]} onClick={() => {
                        navigate(field === 'Competences' ? '/resume' : '/portifolio')
                    }}>
                        {field === 'Competences' ? 
                        lProps.competencesButton : lProps.experienceButton}
                    </Button>
            </Box>
        </Box>
    )
}

export default About