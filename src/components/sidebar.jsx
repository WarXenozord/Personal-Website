import { Box, List, ListItem, ListItemText, Typography} from '@mui/material';
import Fade from '@mui/material/Fade';
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../util/theme.js'
import { LanguageContext } from '../util/lang.js'
import { langPropsSidebar  } from '../data/langProps.js'
import projects from '../data/projects.js'

import { createContext, useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(prev => !prev);
  const isSidebarOver = useMediaQuery('(max-width:1000px)');
  return (
    <SidebarContext.Provider value={{ open, toggleSidebar, isSidebarOver }}>
      {children}
    </SidebarContext.Provider>
  );
}

const createButton = (name, IconTag, url=null) => {
  if(!url){
    const proj = projects.find(project => project.title === name);
    if(proj)
      url = 'portifolio/' + proj.links.page;
    else
      url = '/error';
  } 
  const icon = <IconTag sx = {{fontSize: 
    {xs: '2.0rem', sm: '1.8rem', md:'1.4rem'}}}/>
  return {name: name, url: url, icon:icon}
}
const basicButtons = [
  createButton('home', HomeOutlinedIcon,'/'),
  createButton('about', PersonOutlineIcon,'/about'),
  createButton('resume', WorkOutlineIcon,'/resume'),
  createButton('portifolio', WidgetsOutlinedIcon,'/portifolio'),
]
const projButtons = [
  createButton('CurieSat', SatelliteAltOutlinedIcon),
  createButton('ANA', MemoryOutlinedIcon),
  createButton('Test Bench',ScaleOutlinedIcon),
  //createButton('Mina', AccountBalanceWalletOutlinedIcon),
]


export function Sidebar() {
  const theme = useTheme();
  const {lang} = useContext(LanguageContext)
  const colors = tokens(theme.palette.mode)
  const lProps = langPropsSidebar(lang)
  const { open, isSidebarOver } = useContext(SidebarContext);

  //common styles
  const listSlotProps = {primary: {
    fontSize: isSidebarOver ? 
    {xs: '2.2rem', sm: '2rem', md:'1.8rem'} : '1.4rem',
    marginLeft: '5px',
  }}
  const listProps = {
    height: '100%',
    listStyle: 'none',
    '& .MuiListItem-root':{
        color: colors.grey[500],
        padding: '5px',
        height:'35px',
        marginBottom: isSidebarOver ? {xs: '30px', sm: '20px', md: '15px'} : '0.5rem',
    },
    '& .MuiListItem-root:hover':{
        color: colors.grey[900],
        background: 'none'
    },
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '60px',
        zIndex:'1',
        left: 0,
        height: 'calc(100vh - 60px)',
        width: open ? (isSidebarOver  ? '400px' : '250px') : 0,
        backgroundColor: colors.secondary[500] + (isSidebarOver ?  'f8' : 'ff'),
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{
        paddingLeft:'10px',
        paddingTop: isSidebarOver ? {xs: '20px', sm: '15px', md: '10px'}: '0.2rem',
        height: '100%',
        borderRight:'1px solid ' + colors.grey[900],
        overflowY: 'auto' 
      }}>
        <Fade in={open} timeout={800}>
        <Box sx={{display: open ? 'flex':'none', flexDirection:'column'}}>
          <List sx={listProps}>
            {basicButtons.map((key, url) => (
              <ListItem disablePadding key={key.name}
              component={RouterLink} to={key.url}>
                {key.icon}
                <ListItemText primary={lProps[key.name]}  
                slotProps={listSlotProps}/>
              </ListItem>
            ))}
          </List>
          <Box sx={{backgroundColor: colors.grey[500], 
            height: '1px',
            width: '90%',
          }}/>
          <Typography variant='body2' sx={{
            fontSize: isSidebarOver ? 
            {xs: '2.2rem', sm: '2rem', md:'1.8rem'} : '1.4rem',
            margin: '10px 0 0 5px',
            fontWeight: 'bolder',
            color: colors.grey[400],
          }}>
            Top Projects
          </Typography>
          <List sx={listProps}>
            {projButtons.map((key, url) => (
              <ListItem disablePadding key={key.name}
              component={RouterLink} to={key.url}>
                {key.icon}
                <ListItemText primary={key.name}  
                slotProps={listSlotProps}/>
              </ListItem>
            ))}
          </List>
          <Box sx={{backgroundColor: colors.grey[500], 
            height: '1px',
            width: '90%',
          }}/>
        </Box>
        </Fade>
      </Box>
    </Box>
  );
}