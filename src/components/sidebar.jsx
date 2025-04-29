import { Box } from '@mui/material';

export default function Sidebar({ open }) {
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