import React from 'react'
import LandingPageWrraper from '.'
import { Typography, Box, Button } from '@material-ui/core'
import GetStartedDialog from 'components/Dialog/GetStartedDialog'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const Home = ({ history }) => {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(null)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
    if (value === 'Student') {
      history.push('/student-signup')
    } else if (value === 'Tutor') history.push('/tutor-signup')
  }
  return (
    <Box>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <div>
        <br />
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Sign up
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push('/signin')}
        >
          Sign in
        </Button>
        <GetStartedDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </Box>
  )
}

export default withRouter(LandingPageWrraper(Home))

Home.propTypes = {
  history: PropTypes.object.isRequired,
}
