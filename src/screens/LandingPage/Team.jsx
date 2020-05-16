import React from 'react'
import LandingPageWrraper from '.'
import './Landing.scss'
import {
  Container,
  Grid,
  Avatar,
  Box,
  Typography,
  Card,
} from '@material-ui/core'

function Team() {
  return (
    <Container className="team-container">
      <h1>
        <span>Team</span>
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            className="profile-card"
            pl={1}
            pr={1}
            pb={2}
            boxShadow={1}
            borderRadius={8}
          >
            <Avatar variant="circle">A</Avatar>
            <Box m={3} className="profile-card">
              <Card className="avatar-1">
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus.
                </Typography>
                <h3 style={{ textAlign: 'center' }}>
                  arunaggarwal1997@gmail.com
                </h3>
              </Card>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            className="profile-card"
            pl={1}
            pr={1}
            pb={2}
            boxShadow={1}
            borderRadius={8}
          >
            <Avatar variant="circle">S</Avatar>
            <Box m={3}>
              <Card className="avatar-2">
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus.
                </Typography>
                <h3 style={{ textAlign: 'center' }}>
                  Shubhamtanwar23@gmail.com
                </h3>
              </Card>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            className="profile-card"
            pl={1}
            pr={1}
            pb={2}
            boxShadow={1}
            borderRadius={8}
          >
            <Avatar variant="circle">V</Avatar>
            <Box m={3}>
              <Card className="avatar-3">
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus.
                </Typography>
                <h3 style={{ textAlign: 'center' }}>
                  vivekrajoriya106@gmail.com
                </h3>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingPageWrraper(Team)
