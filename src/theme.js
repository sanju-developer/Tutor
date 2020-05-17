import { createMuiTheme } from '@material-ui/core/styles'
import { darkPink, darkBlue } from 'assets/color.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: darkPink,
    },
  },
})

export default theme
