import { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsStandout} from '../../util/lang.js'

const images = ['images/1.webp',
    'images/2.webp',
    'images/3.webp'
]

function Standout(){ 

    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsStandout(lang) 
    
    return(
        <Box component="section" backgroundColor={colors.secondary[500]}>
            <Typography variant='h2'
            padding='15px 0 0 0'
            textAlign='center'>
                {lProps.title}
            </Typography>
            <Box sx={{
                marginTop: '30px',
                paddingBottom: '20px',
                display:'flex',
                justifyContent: 'space-around'
            }}>
                {images.map((path, i) => (
                    <Box key={i} sx={{
                        height:"74vh",
                        width: "30%",
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
                                sx={{ height: '30%', 
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
                            <Typography variant='body2' mt='2px'>
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
                            variant='body2' 
                            mt='7px'
                            fontSize='0.8rem'>
                                {lProps.projDesc[i]}
                            </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Standout