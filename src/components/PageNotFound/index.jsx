import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Box, Button } from '@material-ui/core'

import './PageNotFound.scss'

function PageNotFound({ history }) {
  return (
    <div className="Page-not-found">
      <Box mx={2} textAlign="center" className="home-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/dashboard')}
        >
          Home
        </Button>
      </Box>
    </div>
  )
}

export default withRouter(PageNotFound)

PageNotFound.propTypes = {
  history: PropTypes.object.isRequired,
}
