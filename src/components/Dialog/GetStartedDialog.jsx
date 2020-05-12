import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import { blue } from '@material-ui/core/colors'
import { connect } from 'react-redux'
import { SetUserRole } from 'redux/actions/userRoleAction'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
})

function GetStartedDialog(props) {
  const emails = ['Student', 'Tutor']
  const classes = useStyles()
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = value => {
    SetUserRole(value)
    onClose(value)
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Sign up as </DialogTitle>
      <List>
        {emails.map(type => (
          <ListItem button onClick={() => handleListItemClick(type)} key={type}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={type} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signinAsStudent: userRole => dispatch(SetUserRole(userRole)),
  }
}

GetStartedDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(GetStartedDialog)
