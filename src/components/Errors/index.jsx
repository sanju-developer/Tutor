import PropTypes from 'prop-types'
import { withSnackbar, useSnackbar } from 'notistack'

function ErrorComponent({ message, variant }) {
  const { enqueueSnackbar } = useSnackbar()

  const showError = (message, variant) => {
    // variant could be success, error, warning, info, or default
    if (Array.isArray(message)) {
      message.map(item => enqueueSnackbar(item, { variant: variant }))
    } else {
      return enqueueSnackbar(message, { variant: variant })
    }
  }

  return showError(message, variant)
}

export default withSnackbar(ErrorComponent)
ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
