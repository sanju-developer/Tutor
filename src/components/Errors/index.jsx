// import React from 'react'
// import PropTypes from 'prop-types'
// import { SnackbarProvider, useSnackbar } from 'notistack'

// function Errors({ message, variant }) {
//   const { enqueueSnackbar } = useSnackbar()

//   const showError = (message, variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar(message, { variant })
//   }

//   return showError(message, variant)
// }

// Errors.propTypes = {
//   message: PropTypes.string.isRequired,
//   variant: PropTypes.string.isRequired,
// }

// export default function IntegrationNotistack(props) {
//   return (
//     <SnackbarProvider maxSnack={3}>
//       <Errors message={props.message} variant={props.variant} />
//     </SnackbarProvider>
//   )
// }
// IntegrationNotistack.propTypes = {
//   message: PropTypes.string.isRequired,
//   variant: PropTypes.string.isRequired,
// }

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}))

export default function Errors({ message, variant }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      variant={variant}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

Errors.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
