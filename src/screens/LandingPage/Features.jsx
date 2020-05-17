import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'

function Features() {
  return (
    <Box pt={10}>
      <Container className="features">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <Box className="tutor-class-feature img-props" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <h2>Classes by Tutor</h2>
              <Typography paragraph align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing.
              </Typography>
              {/* <Box textAlign="right">
            <Button variant="outlined" color="default">
              Let's create class
            </Button>
          </Box> */}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <Box className="student-class-feature img-props" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <h2>Join class</h2>
              <Typography paragraph align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing.
              </Typography>
              {/* <Box textAlign="right">
            <Button variant="outlined" color="default" align="center">
              Attend class
            </Button>
          </Box> */}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
              <Box className="secure-class-feature img-props" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <h2>Securely empowered with no interruption</h2>
              <Typography paragraph align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing.
              </Typography>
              {/* <Box textAlign="right">
            <Button variant="outlined" color="default">
              How it's secure
            </Button>
          </Box> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Features
