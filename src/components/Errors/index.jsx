import React from 'react'
import Button from '@material-ui/core/Button'
import { SnackbarProvider, useSnackbar } from 'notistack'

function MyApp() {
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant })
  }

  return (
    <>
      <Button onClick={handleClickVariant('success')}>
        Show success snackbar
      </Button>
    </>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  )
}
