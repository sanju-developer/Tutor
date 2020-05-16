import React from 'react'
import config from 'config'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  /* @param {error} */
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    if (config.DEV_TOOLS.logError) {
      // log error
    }
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginTop: '20px' }}>
          <div>Something Went Wrong...</div>
        </div>
      )
    }
    const { children } = this.props
    return children
  }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
}
