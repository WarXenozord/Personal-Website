import {
    Box, Typography, Divider, Grid, Avatar, List, ListItem, ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
    TimelineContent, TimelineDot
} from '@mui/lab';

import { useContext } from "react"
import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsAboutMe} from '../../util/lang.js'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import CoffeeIcon from '@mui/icons-material/Coffee';
  
export default function About() {
  const {lang} = useContext(LanguageContext)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const lProps = langPropsAboutMe(lang)
  
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: 1200, mx: 'auto' }}>
      <Grid container columns={{ xs: 2, sm: 4, md: 6, lg:12, xl:12 }} spacing={4}>
        {/* Avatar + Timeline */}
        <Grid item size={{xs:12, md:4}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar
              alt="Juan Libonatti"
              src="/your-photo.jpg" // Replace with actual image path
              sx={{ width: 160, height: 160 }}
            />
          </Box>

          <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">{lProps.timeline[0]}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">{lProps.timeline[1]}</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">{lProps.timeline[2]}</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        {/* Main Content */}
        <Grid item size={{x:12, md:8}}>
          <Typography variant="h2" gutterBottom>
            {lProps.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {lProps.description}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" gutterBottom>
            {lProps.statusTitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {lProps.status}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="h5" gutterBottom>
            {lProps.funFactsTitle}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
              <ListItemText primary={lProps.funFacts[0]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><RocketLaunchIcon /></ListItemIcon>
              <ListItemText primary={lProps.funFacts[1]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary={lProps.funFacts[2]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><CoffeeIcon /></ListItemIcon>
              <ListItemText primary={lProps.funFacts[3]} />
            </ListItem>
          </List>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            {lProps.contactTitle}
          </Typography>
          <Typography variant="body1">
            {lProps.contact}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}