import React from 'react'
import LandingPageWrraper from '.'
import { Typography, Button, Grid, Container, Box } from '@material-ui/core'
import GetStartedDialog from 'components/Dialog/GetStartedDialog'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Icons from 'components/Icons'

const Home = ({ history }) => {
  const [open, setOpen] = React.useState(false)
  const [whichButtonClick, setWhichButtonClick] = React.useState(null)
  const [selectedValue, setSelectedValue] = React.useState(null)

  const handleClickOpen = buttonType => {
    setWhichButtonClick(buttonType)
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
    if (whichButtonClick === 'signup') {
      if (value === 'Student') {
        history.push('/student-signup')
      } else if (value === 'Tutor') history.push('/tutor-signup')
    } else {
      history.push('/signin')
    }
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} mx="auto">
          <Icons type="Home-Landing" />
        </Grid>
        <Grid item xs={12} sm={7}>
          <h1>Study online, without interruption</h1>
          <Typography paragraph align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} align="end" mx="auto">
          <br />
          <Box mx={2} display="inline">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleClickOpen('signup')}
            >
              Sign up
            </Button>
          </Box>
          <Box mx={2} display="inline">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClickOpen('signIn')}
            >
              Sign in
            </Button>
          </Box>
          <GetStartedDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withRouter(LandingPageWrraper(Home))

Home.propTypes = {
  history: PropTypes.object.isRequired,
}
