import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { useSidebar } from './sidebar.jsx'




function ViewPort({children}){
    const theme = useTheme();

    const {open, isSidebarOver } = useSidebar();

    return(              
        <Box sx={{
            // yes, must be calc(100%-0px) because 'CSS interpolation'
            width: (open && ! isSidebarOver) ? 'calc(100%-250px)': 'calc(100%-0px)',
            ml: (open && ! isSidebarOver) ? '250px': '0', 

            transition: 'margin 0.3s ease, width 0.3s ease',
        }}>
            {children}
        </Box>
    );
}

export default ViewPort
