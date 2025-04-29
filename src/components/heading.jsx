import logoDark from '../assets/LogoDark.svg'
import logoLight from '../assets/LogoLight.svg'
import BRFlag from '../assets/Flag_of_Brazil.svg'
import USFlag from '../assets/Flag_of_the_United_States.svg'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ColorModeContext, tokens } from '../util/theme.js'
import { LanguageContext, langPropsHeader } from '../util/lang.js'

import { IconButton, Button, Box, List, Tooltip, ListItem, 
    ListItemText, ListItemButton, Typography, AppBar} 
    from '@mui/material'
import { useTheme } from '@mui/material/styles'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import { layoutStyles } from '../util/styles.js'

const useScrollToSection = () => {
    const navigate = useNavigate();
  
    const scrollToSection = (id, offset = 0) => {
      const element = document.getElementById(id);
      if (element) {
        // If already on the page with the element
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Navigate to homepage and pass scroll target
        navigate(`/?scrollTo=${id}&offset=${offset}`);
      }
    };
  
    return scrollToSection;
};

function Header({ open, toggleSidebar }){
    const scrollToSection = useScrollToSection()
    const navigate = useNavigate();

    //---Theme and lang props---//
    const colorMode = useContext(ColorModeContext)
    const {langMode,lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsHeader(lang)
    const isDark = theme.palette.mode === 'dark'
    const isEn = lang === 'en'

    // common style
    const headerBox = {display: 'flex'}
    
    return (
        <AppBar position="sticky">
            <Box sx={{display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
                margin: '0',
                padding: '5px',
                height: '6vh',
                backgroundColor: colors.secondary[500],
                position: 'relative'
            }}>
                {/*---Logo Button & Name---*/}
                <Box sx={headerBox}>
                    <Box sx={[{
                        borderRadius: '50%',
                        position: 'relative',
                        top: '-40px',
                        right: '25px',
                        height: '87px',
                        width: '87px'
                    }, layoutStyles.gradEffect]}>
                        <Button onClick={toggleSidebar} sx={{
                            borderRadius: '50%',
                            height: '85px',
                            width: '85px',
                            position: 'relative',
                            backgroundColor: colors.grey[100],
                            '&:hover':{backgroundColor:colors.secondary[500]}
                        }}>
                            <Box
                            component="img"
                            src={isDark ? logoDark : logoLight}
                            alt="Logo"
                            sx={{
                                width: '70%',
                                height: '70%',
                                padding: '3px 0 0 5px',
                                position: 'relative',
                                top: '16px',
                                left: '3px'
                            }}/>    
                        </Button>
                    </Box>
                    <Box sx={{
                        display: 'inline',
                        margin: '0',
                        position: 'relative',
                        right: '20px',
                        '&:hover':{
                            cursor: 'pointer',
                        }
                    }} onClick={() => scrollToSection('welcome', -55)}>
                        <Typography variant="h2" sx={{
                            fontFamily: '"Inknut Antiqua", serif',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            margin:'0 0 0 3px',
                            padding:'0',
                        }}>Juan Libonatti</Typography >
                        <Typography variant="body1" sx={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        margin:'0',
                        padding:'0 0 0 5px',
                        textAlign: 'left',
                        color: colors.grey[500]
                        }}>{lProps.profession}</Typography >
                    </Box>
                </Box>
                {/*---Buttons---*/}
                <Box sx={[headerBox,{alignItems: 'center'}]}>
                    <List sx={{
                        display: 'flex',
                        alignContent: 'center',
                        listStyle: 'none',
                        '& .MuiListItemButton-root':{
                            borderRadius:'35px',
                            color: colors.grey[500],
                            padding:'8px',
                            height:'35px',
                            fontWeight: 'bold'
                        },
                        '& .MuiListItemButton-root:hover':{
                            color: colors.grey[900],
                            background: 'none'
                        },
                    }}>
                        <ListItem disablePadding>
                            <ListItemButton component="a" 
                            onClick={() => {scrollToSection('about', -150)}}>
                                <ListItemText primary={lProps.competences} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" onClick={() => navigate("/portifolio")}>
                                <ListItemText primary={lProps.portifolio} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" 
                            onClick={() => {scrollToSection('contact', 0)}}>
                                <ListItemText primary={lProps.contact} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Tooltip title={lProps.langTooltip}>
                        <Button onClick={langMode.toggleLanguage} 
                        color="inherit" 
                        sx={{
                            borderRadius:'50%',
                            height:'45px',
                            width:'45px',
                            minWidth:'45px',
                            padding:'0',
                            margin:'0'
                        }}>
                            <Box
                            component="img"
                            src={isEn ? BRFlag : USFlag}
                            alt={isEn ? 'pt-br' : 'en-us'}
                            height={'15px'}
                            p={'0'}
                            m={'0'}/>
                        </Button>
                    </Tooltip>
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                    </IconButton>
                </Box>
            </Box>
            {/*---Grad Line---*/}
            <Box sx={[layoutStyles.gradEffect,layoutStyles.line]}></Box>
        </AppBar>
    );
}

export default Header