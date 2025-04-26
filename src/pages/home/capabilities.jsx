import { useContext } from 'react'
import { Box, Typography, Button } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsCapabilities} from '../../util/lang.js'

import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

//---Content Boxes---//
const boxes=[
    { num: 0, icon: CodeIcon },
    { num: 1, icon: MemoryIcon },
    { num: 2, icon: RocketLaunchIcon },
    { num: 3, icon: MiscellaneousServicesIcon },
];

function Capabilities(){ 

    //---Theme and lang props---//
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsCapabilities(lang)   

    //---Common Stles---//

    return(
        <Box component='section' 
        height='80vh'>
            <Typography variant='h2'
            sx={{
                textAlign: 'center',
                margin: '15px 0'
            }}>
                {lProps.title}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                {boxes.map(({num, icon: Icon}) =>(
                    <Box key={num} justifyItems='center'>
                        <Typography variant='h3'
                        sx={{
                            textAlign: 'center',
                            margin: '20px 0'
                        }}>
                            {lProps.boxTitle[num]}
                        </Typography>
                        <Box>
                            <Icon sx={{
                                fontSize: '7rem',
                                color: num % 2 === 0 ? colors.red[500]:colors.blue[500]
                            }}/>
                        </Box>
                        <Typography variant='body2'
                        sx={{
                            textAlign: 'center',
                            marginTop: '10px',
                            whiteSpace: 'pre-line'
                        }}>
                            {lProps.boxText[num]}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{
                marginTop: '45px', 
                display:'flex',
                justifyContent:'center',

            }}>
                <Button sx = {{
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    padding: '0 25px',
                    textTransform:'none' ,
                    backgroundColor:colors.grey[900],
                    color:colors.grey[100],
                    '&:hover':{
                        backgroundColor:colors.grey[600] + 'd0'
                    },
                }}>
                    {lProps.call}
                </Button>
            </Box>
        </Box>
)}

export default Capabilities