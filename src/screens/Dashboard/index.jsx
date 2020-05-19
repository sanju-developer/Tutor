import React from 'react'
import DashboardSidebar from 'components/DashboardSidebar'
import { Box } from '@material-ui/core'

function Dashboard(Component) {
  return function Dashboard(props) {
    return (
      <>
        <DashboardSidebar />
        <Box>
          <Component {...props} />
        </Box>
      </>
    )
  }
}

export default Dashboard
