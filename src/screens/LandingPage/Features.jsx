import React from 'react'
import LandingPageWrraper from './index'
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Button,
} from '@material-ui/core'

function Features() {
  return (
    <Container className="features">
      <h1>
        <span>Features</span>
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box className="tutor-class-feature img-props" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Classes by Tutor</h2>
          <Typography paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing.
          </Typography>
          <Box textAlign="right">
            <Button variant="outlined" color="default">
              Let's create class
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="student-class-feature img-props" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Join class</h2>
          <Typography paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing.
          </Typography>
          <Box textAlign="right">
            <Button variant="outlined" color="default" align="center">
              Attend class
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="secure-class-feature img-props" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>Securely empowered with no interruption</h2>
          <Typography paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing.
          </Typography>
          <Box textAlign="right">
            <Button variant="outlined" color="default">
              How it's secure
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingPageWrraper(Features)
