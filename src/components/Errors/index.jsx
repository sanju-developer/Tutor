import PropTypes from 'prop-types'
import { withSnackbar, useSnackbar } from 'notistack'

function ErrorComponent({ message, variant }) {
  const { enqueueSnackbar } = useSnackbar()

  const showError = (message, variant) => {
    // variant could be success, error, warning, info, or default
    if (Array.isArray(message)) {
      for (let index = 0; index < message.length; index++) {
        return enqueueSnackbar(message[index], {
          variant: variant,
        })
      }
    } else {
      return enqueueSnackbar(message, { variant: variant })
    }
  }

  return showError(message, variant)
}

export default withSnackbar(ErrorComponent)
ErrorComponent.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  variant: PropTypes.string.isRequired,
}
