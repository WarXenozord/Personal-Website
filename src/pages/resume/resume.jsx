import {Box, Container,Typography, Button, Accordion,
    AccordionSummary,AccordionDetails, Stack, Paper
} from '@mui/material';

import { useContext } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';

import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsResume} from '../../util/lang.js'

export default function Resume() {
    const {lang} = useContext(LanguageContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const lProps = langPropsResume(lang)

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            {/* Hero Section */}
            <Box sx={{ mb: 5, textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    {lProps.title}
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}>
                    {lProps.subtitle}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    href="/resume.pdf"
                    download
                >
                    {lProps.downBut}
                </Button>
                <Button
                sx={{ml:'15px'}}
                variant="contained"
                color="primary"
                startIcon={<PrintIcon />}
                onClick={() => window.print()}
                >
                    {lProps.printBut}
                </Button>
            </Box>

            {/* Accordion Sections */}
            <Stack spacing={2}>
                {lProps.tabs.map((tab) => (
                    <Accordion key={tab.title}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">{tab.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2}>
                            {tab.items.map((item, index) => (
                                <Paper key={index} elevation={2} sx={{ p: 2 }}>
                                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                                        <Typography variant="subtitle1" fontWeight="bold" fontSize='1.2rem'>
                                        {item.title} - {item.place}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        {item.period}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" mt={1} fontSize='1rem'>
                                        {item.desc}
                                    </Typography>
                                </Paper>
                            ))}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Container>
    );
}