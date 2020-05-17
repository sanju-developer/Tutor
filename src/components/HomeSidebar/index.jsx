import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import HelpIcon from '@material-ui/icons/Help'
import PeopleIcon from '@material-ui/icons/People'
import ContactsIcon from '@material-ui/icons/Contacts'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import HomeIcon from '@material-ui/icons/Home'
import { withRouter } from 'react-router-dom'
import GetStartedDialog from 'components/Dialog/GetStartedDialog'
import { LandingPageDrawerItems } from 'utils/commonConstants'
import PropTypes from 'prop-types'
import { Box, Button } from '@material-ui/core'
import { clearUserRoleLS } from 'utils/helperFunction'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    padding: '0px 10px',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

function HomeSidebar({ history }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [openSidebar, setOpenSidebar] = React.useState(false)
  const [whichButtonClick, setWhichButtonClick] = React.useState(null)
  const [selectedValue, setSelectedValue] = React.useState(null)

  const handleDrawerOpen = () => {
    setOpenSidebar(true)
  }

  const handleDrawerClose = () => {
    setOpenSidebar(false)
  }

  const handleClickOpen = buttonType => {
    clearUserRoleLS()
    setWhichButtonClick(buttonType)
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    if (value) {
      setSelectedValue(value)
      if (whichButtonClick === 'signup') {
        if (value === 'Student') {
          history.push('/student-signup')
        } else if (value === 'Tutor') history.push('/tutor-signup')
      } else if (whichButtonClick === 'signIn') {
        history.push('/signIn')
      }
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openSidebar,
        })}
      >
        <Toolbar>
          <Typography
            color="primary"
            variant="h6"
            style={{ cursor: 'pointer' }}
            noWrap
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Tutor
          </Typography>
          <div className={classes.sectionMobile}>
            <IconButton
              color="inherit"
              aria-label="openSidebar drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(openSidebar && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            {LandingPageDrawerItems.map(item => (
              <Typography
                edge="end"
                variant="h6"
                color="primary"
                noWrap
                className={classes.title}
                style={{ cursor: 'pointer' }}
                onClick={() => history.push(item.route)}
              >
                {item.name}
              </Typography>
            ))}
            <Box mx={2} display="inline">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleClickOpen('signup')}
              >
                Sign up
              </Button>
            </Box>
            <Box mx={2} display="inline">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen('signIn')}
              >
                Sign in
              </Button>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openSidebar,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openSidebar}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {LandingPageDrawerItems.map((text, index) => (
            <ListItem
              button
              key={text.name}
              onClick={() => history.push(text.route)}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <ChromeReaderModeIcon />
                ) : index === 2 ? (
                  <HelpIcon />
                ) : index === 3 ? (
                  <PeopleIcon />
                ) : index === 4 ? (
                  <ContactsIcon />
                ) : (
                  <AttachMoneyIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
          <Box m={2} textAlign="center" display="block">
            <Button
              style={{ padding: '10px 70px' }}
              variant="contained"
              color="secondary"
              onClick={() => handleClickOpen('signup')}
            >
              Sign up
            </Button>
          </Box>
          <Box m={2} textAlign="center" display="block">
            <Button
              style={{ padding: '10px 70px' }}
              variant="contained"
              color="primary"
              onClick={() => handleClickOpen('signIn')}
            >
              Sign in
            </Button>
          </Box>
        </List>
      </Drawer>
      <GetStartedDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}

export default withRouter(HomeSidebar)

HomeSidebar.propTypes = {
  history: PropTypes.object.isRequired,
}
