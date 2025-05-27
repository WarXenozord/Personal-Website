import { Box, Typography, Chip } from "@mui/material";
  
export default function PicHeader({title, subtitle, tech=[], cover}) {
    return(
    <Box sx={{
      borderRadius: '40px',
      height: '300px',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(/images/${cover})`,
      backgroundPosition: 'center',
      textAlign:'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      "& > h1,h2":{
        WebkitTextStroke: '1.5px black',
        color:'white',
        borderRadius: 2,
      }
    }}>
      <Typography variant="h1" >{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
      <Box mt='20px'>
        {tech.map((value, idx) => (
                <Chip key={idx} color="primary" 
                label={value} sx={{ mr: 1, mb: 1 }} />
        ))
        }
      </Box>
    </Box>
    );
}