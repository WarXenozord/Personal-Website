import { useContext, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsAbout} from '../../util/lang.js'

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
        width: '130px',
        transition:  'background-color 0.3s ease-in-out'
    }
    const textPar = {
        textAlign:'justify', 
        m:'10px 0 0 0',
        height:'260px'
    }
    const outlineButton = {
        border: 'solid 1px',
        borderRadius: '30px',
        textTransform: 'none',
        padding: '2.5px 25px',
        marginTop: '10px',
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

    return (
        <Box component='section'
        id='about'
        height='65vh' 
        sx={{
                backgroundColor: colors.secondary[500],
                display: 'flex',
                justifyContent: 'space-around',
                paddingTop: '5px'
        }}>
            <Box width='45%' justifyItems='center'>
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
                    }]}>
                        {lProps.aboutButton}
                    </Button>
            </Box>
            <Box width='45%' justifyItems='center'>
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
                    <Typography variant='body2' sx={textPar}>
                        {field === 'Competences' ? 
                        lProps.competencesText : lProps.experienceText}
                    </Typography>
                    <Button sx={[outlineButton,{
                        color: colors.red[500],
                        borderColor: colors.red[500]
                    }]}>
                        {field === 'Competences' ? 
                        lProps.competencesButton : lProps.experienceButton}
                    </Button>
            </Box>
        </Box>
    )
}

export default About