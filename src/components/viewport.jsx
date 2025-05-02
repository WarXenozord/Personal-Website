import { Box } from '@mui/material';

import { useSidebar } from './sidebar.jsx'

function ViewPort({children}){
    const {open} = useSidebar();
    return(              
        <Box sx={{
            width: open ? '85%': '100%',
            ml: open ? '15%': '0', 
            transition: 'margin 0.3s ease'
        }}>
            {children}
        </Box>
    );
}

export default ViewPort
