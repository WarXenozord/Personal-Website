import {
    Box, Typography, Divider, Grid, Avatar, List, ListItem, ListItemIcon,
    ListItemText
  } from '@mui/material';
  import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
    TimelineContent, TimelineDot
  } from '@mui/lab';
  import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
  import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
  import CodeIcon from '@mui/icons-material/Code';
  import CoffeeIcon from '@mui/icons-material/Coffee';
  
  export default function About() {
    return (
      <Box sx={{ px: 4, py: 6, maxWidth: 1200, mx: 'auto' }}>
        
        <Typography variant="h2" gutterBottom textAlign='center'>
          About Me
        </Typography>
  
        <Grid container columns={{ xs: 2, sm: 4, md: 6, lg:12, xl:12 }} spacing={4}>
          {/* Avatar + Timeline */}
          <Grid item size={{xs:12, md:4}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Avatar
                alt="Your Name"
                src="/your-photo.jpg" // Replace with actual image path
                sx={{ width: 160, height: 160 }}
              />
            </Box>
  
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2">2025 – Built this site</Typography>
                </TimelineContent>
              </TimelineItem>
  
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2">2023 – Started frontend seriously</Typography>
                </TimelineContent>
              </TimelineItem>
  
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2">Graduated Aerospace Engineering</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
  
          {/* Main Content */}
          <Grid item size={{x:12, md:8}}>
            <Typography variant="body1" sx={{ mb: 4 }}>
              I'm a Brazilian aerospace engineer who enjoys bending both code and physics to my will.
              Whether it's launching simulations or debugging stubborn frontends, I like when stuff *works*.
            </Typography>
  
            <Divider sx={{ mb: 4 }} />
  
            <Typography variant="h5" gutterBottom>
              What I'm up to
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Currently building this very site, diving into full-stack tools like React, Vite, Express, and MongoDB.
            </Typography>
  
            <Divider sx={{ mb: 4 }} />
  
            <Typography variant="h5" gutterBottom>
              Fun facts
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
                <ListItemText primary="Strategy gamer addicted to XCOM-like games." />
              </ListItem>
              <ListItem>
                <ListItemIcon><RocketLaunchIcon /></ListItemIcon>
                <ListItemText primary="Loves aerospace — especially satellites and scramjets." />
              </ListItem>
              <ListItem>
                <ListItemIcon><CodeIcon /></ListItemIcon>
                <ListItemText primary="Enjoys building tools and debugging cursed side-projects." />
              </ListItem>
              <ListItem>
                <ListItemIcon><CoffeeIcon /></ListItemIcon>
                <ListItemText primary="Powered by caffeine and curiosity." />
              </ListItem>
            </List>
  
            <Divider sx={{ my: 4 }} />
  
            <Typography variant="h5" gutterBottom>
              Let’s talk
            </Typography>
            <Typography variant="body1">
              Reach out if you want to collaborate or just geek out over rockets and render loops.
              You can also check out my <a href="/portfolio">portfolio</a> or <a href="/contact">drop me a message</a>.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }