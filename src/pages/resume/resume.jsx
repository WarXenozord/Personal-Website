import {
    Box,
    Container,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            {/* Hero Section */}
            <Box sx={{ mb: 5, textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    My Résumé
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 2 }}>
                    Here's a detailed overview of my professional background, skills, and education. You can also download a PDF version below.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    href="/resume.pdf"
                    download
                >
                    Download PDF
                </Button>
            </Box>

            {/* Accordion Sections */}
            <Stack spacing={2}>
                {[
                    'Education',
                    'Work Experience',
                    'Skills',
                    'Certifications',
                    'Languages',
                    'Tools & Technologies'
                ].map((title) => (
                    <Accordion key={title}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* Placeholder content */}
                            <Typography variant="body2">Details coming soon...</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </Container>
    );
}