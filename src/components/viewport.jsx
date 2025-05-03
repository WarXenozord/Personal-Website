import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { useSidebar } from './sidebar.jsx'




function ViewPort({children}){
    const theme = useTheme();

    const {open, isSidebarOver } = useSidebar();

    return(              
        <Box sx={{
            width: (open && ! isSidebarOver) ? 'calc(100%-250px)': '100%',
            ml: (open && ! isSidebarOver) ? '250px': '0', 
            transition: 'margin 0.3s ease',
        }}>
            {children}
        </Box>
    );
}

export default ViewPort
