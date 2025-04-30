import { Box } from '@mui/material';

import { useSidebar } from './sidebar.jsx'

function ViewPort({children}){
    const {open} = useSidebar();
    return(              
        <Box sx={{
            width: open ? '85vw': '100vw',
            ml: open ? '15vw': '0', 
            transition: 'all 0.3s ease'
        }}>
            {children}
        </Box>
    );
}

export default ViewPort
