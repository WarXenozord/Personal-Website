import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import ErrorIcon from '@mui/icons-material/Error';

export default function ErrorPage({code, title, desc}) {
  const navigate = useNavigate();
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      sx={{
        height: '72vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
      }}
    >
      <ErrorIcon sx={{fontSize: '8rem'}}/>
      <Typography variant="h2">
        {code}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        {desc}
      </Typography>
      <Button variant="contained" sx={{
        color:'white',
        backgroundColor: colors.blue[500]
      }} 
      onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
};