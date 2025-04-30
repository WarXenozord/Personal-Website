import { Box } from '@mui/material';
import { createContext, useContext, useState } from 'react';


const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(prev => !prev);
  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
    return useContext(SidebarContext);
}

export function Sidebar() {
  const { open } = useSidebar();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '5vh',
        zIndex:'1',
        left: 0,
        height: '100vh',
        width: open ? '15vw' : 0,
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        backgroundColor: '#1976d2',
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