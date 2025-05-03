import { Box, List, ListItem, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'
import { tokens } from '../util/theme.js'
import { LanguageContext, langPropsSidebar } from '../util/lang.js'

import { createContext, useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

const SidebarContext = createContext();

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

export function useSidebar() {
    return useContext(SidebarContext);
}

const bButton = (name, url, IconTag) => {
  const icon = <IconTag sx = {{fontSize: 
    {xs: '2.0rem', sm: '1.8rem', md:'1.4rem'}}}/>
  return {name: name, url: url, icon:icon}
}
const basicButtons = [
  bButton('home','/', HomeOutlinedIcon),
  bButton('about','/about', PersonOutlineIcon),
  bButton('resume','/resume', WorkOutlineIcon),
  bButton('portifolio','/portifolio', WidgetsOutlinedIcon),
]

export function Sidebar() {
  const theme = useTheme();
  const {lang} = useContext(LanguageContext)
  const colors = tokens(theme.palette.mode)
  const lProps = langPropsSidebar(lang)
  const { open, isSidebarOver } = useSidebar();

  const listSlotProps = {primary: {
    fontSize: isSidebarOver ? 
    {xs: '2.2rem', sm: '2rem', md:'1.8rem'} : '1.4rem',
    marginLeft: '5px',
  }}

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50px',
        zIndex:'1',
        left: 0,
        height: '100vh',
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
        borderRight:'1px solid ' + colors.grey[900],
        height:'100%',
        paddingLeft:'10px',
        paddingTop: isSidebarOver ? {xs: '30px', sm: '25px', md: '20px'}: '1.5rem',
      }}>
        <List sx={{
            height: '100%',
            listStyle: 'none',
            display: open ? 'inline':'none',
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
        }}>
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
      </Box>
    </Box>
  );
}