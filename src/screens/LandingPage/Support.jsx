import React from 'react'
import LandingPageWrraper from '.'
import {
  Container,
  Card,
  Box,
  makeStyles,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import './Landing.scss'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

function Support() {
  const classes = useStyles()

  return (
    <Container>
      <h1>
        <span>Support</span>
      </h1>
      <Card p={4}>
        <Box
          className="support-div"
          p={4}
          borderLeft={4}
          borderColor="#ffa600"
          boxShadow={3}
        >
          <h2>Hey, We are in support with you</h2>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing.
          </Typography>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Add you query.."
              inputProps={{ 'aria-label': 'Add you query..' }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="directions"
            >
              <CheckIcon />
            </IconButton>
          </Paper>
        </Box>
      </Card>
    </Container>
  )
}

export default LandingPageWrraper(Support)
