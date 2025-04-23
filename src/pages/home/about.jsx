import { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsAbout} from '../../util/lang.js'

function About(){
    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsAbout(lang)   

    //---Common Stles---//
    const shortLine = {
        marginTop: '10px',
        height: '1px',
        width: '130px'
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
        marginTop: '10px'
    }
    return (
        <Box component='section'>
            <Box height='65vh' sx={{
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
                            <Typography variant='h4'>
                                {lProps.competencesTitle}
                            </Typography>
                            <Box sx={[shortLine, {backgroundColor: colors.red[500]}]}></Box>
                        </Box>
                        <Box justifyItems='center'>
                            <Typography variant='h4' color={colors.grey[500]}>
                                {lProps.experienceTitle}
                            </Typography>
                            <Box sx={[shortLine, {backgroundColor: colors.grey[500]}]}></Box>
                        </Box>
                    </Box>
                    <Typography variant='body2' sx={textPar}>
                        {lProps.aboutText}
                    </Typography>
                    <Button sx={[outlineButton,{
                        color: colors.red[500],
                        borderColor: colors.red[500]
                    }]}>
                        {lProps.competenceButton}
                    </Button>
                </Box>
            </Box>
            <Box height='100vh'></Box>
        </Box>
    )
}

export default About