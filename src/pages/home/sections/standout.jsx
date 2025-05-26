import { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../../util/theme.js'
import { LanguageContext } from '../../../util/lang.js'
import { langPropsStandout } from '../../../data/langProps.js'
import useMediaQuery from '@mui/material/useMediaQuery'

const images = ['images/7.webp',
    'images/1.webp',
    'images/8.webp'
]

function Standout(){ 

    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsStandout(lang) 

    //---breakpoints---//
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const num = isTablet ? (isMobile ? 1 : 2) : 3;
    
    return(
        <Box component="section" 
        id='standout'
        backgroundColor={colors.secondary[500]}>
            <Typography variant='h2'
            padding='15px 0 0 0'
            textAlign='center'>
                {lProps.title}
            </Typography>
            <Box sx={{
                marginTop: '40px',
                paddingBottom: '50px',
                display:'flex',
                justifyContent: 'space-around'
            }}>
                {images.map((path, i) => ( (i < num) &&
                    <Box key={i} sx={{
                        padding:'0 20px',
                        height:"max(50vh,650px)",
                        width: {xs: "90%", sm: '45%', md: '30%'},
                        border:"solid 1px "+colors.grey[900],
                        borderRadius: '10px',
                        boxShadow: '2px 2px 5px black',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                            <Box
                                component="img"
                                alt={lProps.alt[i]}
                                src={path}
                                sx={{ 
                                    height: {xs: '40%', sm: '30%',md:'calc(100px + 10vw)'}, 
                                    aspectRatio: '1',
                                    borderRadius: '50%' ,
                                    textAlign: 'center',
                                    alignContent: 'center',
                                    mt: '25px',
                                    border:"solid 2px "+colors.grey[900],
                            }}/>
                            <Typography variant='h4' 
                            mt='10px'
                            color={i%2===0?colors.red[500]:colors.blue[500]}
                            >
                                {lProps.projTitle[i]}
                            </Typography>
                            <Typography variant='body2' 
                            mt='2px'
                            fontSize='1.4rem'>
                                {lProps.projSubtitle[i]}
                            </Typography>
                            <Box sx={{
                                height: '1.5px',
                                mt: '10px',
                                width: '15%',
                                backgroundColor: i%2===0?
                                colors.red[500]:
                                colors.blue[500],
                            }}/>
                            <Typography 
                            textAlign='justify'
                            variant='body2' 
                            mt='15px'>
                                {lProps.projDesc[i]}
                            </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Standout