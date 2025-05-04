import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ title, image, description, tech = [], links = {} }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const navigate = useNavigate()

    const buttonSX = {
        borderRadius: '30px',
        fontSize: '1rem',
        padding: '0 10px',
        width: '40%',
        alignSelf: 'center',
        m:'1vh 0 20px 0',
        textTransform:'none' ,
        backgroundColor:colors.grey[900],
        color:colors.grey[100],
        '&:hover':{
            backgroundColor:colors.grey[600] + 'd0'
        },
    }

    return (
        <Card 
            sx={{
                margin: '10px',
                minWidth: 200,
                maxWidth: 600,
                height: 500,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.03)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >   
            <CardMedia
                component="img"
                height="180"
                image={image}
                alt={title}
                onClick={() => {navigate(links.page)}}
                sx={{cursor:'pointer'}}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    {description}
                </Typography>
                {tech.length > 0 && (
                    <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                        {tech.map((item, i) => (
                            <Typography variant="caption" key={i} 
                            sx={{ bgcolor: colors.grey[100], px: 1, borderRadius: 1 }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                )}
            </CardContent>
            <Box p={1} pt={0} display="flex" gap={3} justifyContent='center' sx={{alignItems:'end'}}>
                {links.repo && (
                    <Button size="small" href={links.repo} 
                    target="_blank" rel="noopener noreferrer"
                    sx={buttonSX}>
                        Source Code
                    </Button>
                )}
                {links.demo && (
                    <Button size="small" href={links.demo} 
                    target="_blank" rel="noopener noreferrer"
                    sx={buttonSX}>
                        Live Demo
                    </Button>
                )}
            </Box>
        </Card>
    );
}