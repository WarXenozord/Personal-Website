import { Box, Typography, Chip } from "@mui/material";
  
export default function NormalHeader({title, subtitle, tech=[], tagColors}) {
    return(
        <Box sx={{
            height:'180px',
            textAlign:'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            "& > h1,h2":{
                WebkitTextStroke: '1.5px black',
                color:'white'
            }
        }}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h2">{subtitle}</Typography>
            <Box mt='20px'>
                {tech.map((value, idx) => (
                        <Chip key={idx} label={value}
                        sx={{ backgroundColor: tagColors,mr: 1, mb: 1 }} />
                ))
                }
            </Box>
        </Box>
    );
}