import {
    Box, Typography, Divider, Grid, Avatar, List, ListItem, ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
    TimelineContent, TimelineDot,TimelineOppositeContent
} from '@mui/lab';

import { useContext } from "react"
import { useTheme } from '@mui/material/styles'
import { tokens } from '../../util/theme.js'
import { LanguageContext, langPropsAboutMe} from '../../util/lang.js'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolIcon from '@mui/icons-material/School';
import WebIcon from '@mui/icons-material/Web';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
  
const timelineIcons = [
  <WebIcon/>,
  <WorkIcon/>,
  <SchoolIcon/>,
  <DescriptionIcon/>,
  <SatelliteAltIcon/>,
  <RocketLaunchIcon/>,
  <HandshakeIcon/>,
  <GroupsIcon/>
]

export default function About() {
  const {lang} = useContext(LanguageContext)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const lProps = langPropsAboutMe(lang)
  
  return (
    <Box sx={{ px: 4, py: 6, maxWidth: 1300, mx: 'auto' }}>
      <Grid container columns={{ xs: 2, sm: 4, md: 6, lg:12, xl:12 }} spacing={4}>
                {/* Main Content */}
                <Grid item size={{xs:12, sm:12, md:8}}>
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
              <ListItemIcon><SportsEsportsIcon sx={{color: colors.blue[500]}}/></ListItemIcon>
              <ListItemText primary={lProps.funFacts[0]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><RocketLaunchIcon sx={{color:colors.red[500]}}/></ListItemIcon>
              <ListItemText primary={lProps.funFacts[1]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><CodeIcon sx={{color:colors.blue[500]}}/></ListItemIcon>
              <ListItemText primary={lProps.funFacts[2]} />
            </ListItem>
            <ListItem>
              <ListItemIcon><CoffeeIcon sx={{color:colors.red[500]}}/></ListItemIcon>
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
        
        {/* Avatar + Timeline */}
        <Grid item size={{xs:12, sm:12, md:4}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar
              alt="Juan Libonatti"
              src="/images/profilePic.jpg" // Replace with actual image path
              sx={{ width: 200, height: 200 }}
            />
          </Box>

          <Timeline position="right">
            {lProps.timeline.map((item,idx) => (
              <TimelineItem key={idx}>
                <TimelineOppositeContent>
                  {item.date}<br/>
                  <Typography variant="body2" fontSize='1.1rem' color={colors.grey[500]}>
                    {item.event}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{bgcolor:(idx % 2 === 0 ? colors.red[500]:colors.blue[500])}}> 
                    {timelineIcons[idx]}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body2" fontSize='1.1rem'>
                    {item.desc}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
}