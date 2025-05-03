import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'

import { useTheme } from '@mui/material/styles'
import { ColorModeContext, tokens } from '../util/theme.js'
import { LanguageContext, langPropsHeader } from '../util/lang.js'

import { createContext, useContext, useState } from 'react';


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

export function Sidebar() {
  const theme = useTheme();
  const {lang} = useContext(LanguageContext)
  const colors = tokens(theme.palette.mode)
  const lProps = langPropsHeader(lang)
  const { open, isSidebarOver } = useSidebar();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50px',
        zIndex:'1',
        left: 0,
        height: '100vh',
        width: open ? (isSidebarOver  ? '80%' : '250px') : 0,
        backgroundColor: colors.primary[500] + (isSidebarOver ?  'e0' : 'ff'),
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Sidebar content</p>
    </Box>
  );
}