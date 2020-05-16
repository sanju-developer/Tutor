import PropTypes from 'prop-types'
import { withSnackbar, useSnackbar } from 'notistack'

function ErrorComponent({ message, variant }) {
  const { enqueueSnackbar } = useSnackbar()

  return enqueueSnackbar(message, { variant: variant })
}

export default withSnackbar(ErrorComponent)
ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}
