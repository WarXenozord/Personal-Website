import { Box, Button, CircularProgress, Typography, } from "@mui/material";

import { useContext, useEffect, useState, Suspense, lazy  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsProjectPage} from '../../util/lang.js'

export default function ProjectPage() {
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsProjectPage(lang)
    const navigate = useNavigate()

    const { project } = useParams();
    const [Component, setComponent] = useState(null);

    useEffect(() => {
      const loadComponent = async () => {
        try {
          const module = await import(`./projectPages/${project.toLowerCase()}.jsx`);
          setComponent(() => module.default);
        } catch (err) {
          console.error(`Failed to load project: ${project}`, err);
          navigate('/error')
        }
      };

      loadComponent();
    }, [project]);


    return (
    <Box p={4}>
      {/* Back Button */}
      <Button variant="outlined" onClick={() => navigate('/portifolio')} sx={{ 
        color: colors.grey[900],
        borderColor: colors.grey[900],
        borderRadius: '20px',
        mb: 3 
      }}>
        {lProps.btn}
      </Button>

      <Suspense fallback={<CircularProgress />} height='94vh'>
        {Component ? <Component /> : null}
      </Suspense>

    </Box>
  );
}