import { Box, Typography, Button, Chip, Grid } from "@mui/material";

export default function ProjectPage() {
    return (
    <Box p={4}>
      {/* Back Button */}
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        ← Back to Portfolio
      </Button>

      {/* Hero Section */}
      <Typography variant="h3" gutterBottom>test</Typography>
      <Typography variant="subtitle1" color="text.secondary">test</Typography>

      {/* Tags */}
      <Box my={2}>
            <Chip  label='test' sx={{ mr: 1, mb: 1 }} />
      </Box>

      {/* Details */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>Description</Typography>
          <Typography>aaaaaaaaaaaaaa</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Tech Stack</Typography>
            <Typography>• aaaa</Typography>
        </Grid>
      </Grid>

      {/* Links */}
      <Box mt={4}>
          <Button target="_blank" variant="contained" sx={{ mr: 2 }}>
            Live Demo
          </Button>
          <Button target="_blank" variant="outlined">
            GitHub Repo
          </Button>
      </Box>
    </Box>
  );
}