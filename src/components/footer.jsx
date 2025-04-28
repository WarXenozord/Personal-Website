import { Box, Typography, Link} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { tokens } from '../util/theme.js';

import logoDark from '../assets/LogoDark.svg';
import logoLight from '../assets/LogoLight.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { GitHub } from '@mui/icons-material';

const profileLinks = {
    gitHub: "https://www.github.com/WarXenozord",
    linkedIn: "https://www.linkedin.com/in/juan-libonatti",
    email: "mailto:libonatti@hotmail.com"
}

function Footer() {
    //---Theme and lang props---//
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const isDark = theme.palette.mode === 'dark'

    return (
    <Box component="footer"
    height='20vh'
    backgroundColor={isDark ? colors.grey[100]:
    colors.secondary[500]}
    padding='0 10px'
    >
        <Box display='flex'
        height='90%'
        alignItems='center'
        justifyContent='space-between'>
            <Box display='flex'
            alignItems='center'>
                <Box
                component="img"
                src={isDark ? logoDark : logoLight}
                alt="Logo"
                sx={{
                    width: '15%',
                    height: '15%',
                }}/>    
                <Typography variant="h2" sx={{
                    fontFamily: '"Inknut Antiqua", serif',
                    fontWeight: 'bold',
                    fontSize: '2.5rem',
                    margin:'0 0 0 20px',
                    padding:'0',
                }}>
                    Juan Libonatti
                </Typography>
            </Box>
            <Box mr='10px'>
                <Box display='flex' alignContent='center'>
                    <Link color={colors.red[500]}
                    href={profileLinks.gitHub}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{'&:hover':{color: colors.grey[900]}}}
                    >
                        <GitHubIcon sx={{fontSize: '2.2rem'}}/>
                    </Link>
                    <Typography variant='body3' mt='2px' ml='5px'>
                        /WarXenozord
                    </Typography>
                </Box>
                <Box display='flex' alignContent='center'>
                    <Link color={colors.blue[500]}
                    href={profileLinks.linkedIn}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{'&:hover':{color: colors.grey[900]}}}
                    >
                        <LinkedInIcon sx={{fontSize: '2.2rem'}}/>
                    </Link>
                    <Typography variant='body3' mt='2px' ml='5px'>
                        /Juan-Libonatti
                    </Typography>
                </Box>
                <Box display='flex' alignContent='center'>
                    <Link color={colors.red[500]}
                    href={profileLinks.email}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{'&:hover':{color: colors.grey[900]}}}
                    >
                        <MailOutlineIcon sx={{fontSize: '2.2rem'}}/>
                    </Link>
                    <Typography variant='body3' mt='2px' ml='5px'>
                        libonatti@hotmail
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Typography variant='body2' 
        fontSize='0.8rem'
        textAlign='center'>
            © 2025 Juan Libonatti.
        </Typography>
    </Box>
    )
}

export default Footer