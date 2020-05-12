import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from 'components/Copyright'
import PropTypes from 'prop-types'
import { emailRegx } from 'utils/commonConstants'
import { FormHelperText } from '@material-ui/core'
import GetStartedDialog from 'components/Dialog/GetStartedDialog'
import { connect } from 'react-redux'
import { commonApiAction } from 'redux/actions/commonApiAction'
import { SignInServiceForStudent, SignInServiceForTutor } from 'services/signIn'
import { EntryAsOwner } from 'utils/commonConstants'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function SignIn({ history, signinAsTutor, signinAsStudent }) {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(null)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
    if (value === 'Student') {
      history.push('/student-signup')
    } else if (value === 'Tutor') history.push('/tutor-signup')
  }

  const signInFormFields = {
    email: '',
    password: '',
  }
  const [isError, setIsError] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [signInFormState, setSignUpFormState] = useState(signInFormFields)
  const classes = useStyles()

  const changeHandler = event => {
    event.stopPropagation()
    const { name, value } = event.target
    setSignUpFormState({
      ...signInFormState,
      [name]: value,
    })
  }

  useEffect(() => {
    if (
      signInFormState.email.length !== 0 &&
      signInFormState.password.length !== 0 &&
      signInFormState.password.length === 6
    ) {
      setIsError(false)
    }
    if (emailRegx.test(signInFormState.email)) {
      setIsEmailValid(false)
    } else setIsEmailValid(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInFormState, isEmailValid])

  const submitLoginForm = () => {
    if (
      signInFormState.email.length === 0 ||
      signInFormState.password.length === 0 ||
      signInFormState.password.length !== 6
    ) {
      setIsError(true)
    } else {
      // singinAs === EntryAsOwner
      //   ? signinAsTutor(signInFormState)
      //   : signinAsStudent(signInFormState)
      // localStorage.setItem('token', 'qwerty')
      // history.push('/dashboard')
      // setIsError(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="email"
                error={isEmailValid && isError}
                onChange={e => changeHandler(e)}
                defaultValue={signInFormState.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {isEmailValid && isError && (
                <FormHelperText error id="component-error-text">
                  Please enter a valid email
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={
                  (signInFormState.email.length === 0 ||
                    signInFormState.password.length !== 6) &&
                  isError
                }
                onChange={e => changeHandler(e)}
                defaultValue={signInFormState.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                  maxLength: 6,
                }}
              />
              {signInFormState.password.length === 0 && isError ? (
                <FormHelperText error id="component-error-text">
                  Please enter your password
                </FormHelperText>
              ) : (
                signInFormState.password.length < 6 &&
                isError && (
                  <FormHelperText error id="component-error-text">
                    Please enter minimum 6 length password
                  </FormHelperText>
                )
              )}
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitLoginForm}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={handleClickOpen}>
                  Do not have an account? Sign Up
                </Link>
                {/* <Button color="default" onClick={handleClickOpen}>
                  Do not have an account? Sign Up
                </Button> */}
                <GetStartedDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    // isApiLoading: state.login.isApiLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signinAsStudent: body =>
      dispatch(commonApiAction(SignInServiceForStudent)(body)),
    signinAsTutor: body =>
      dispatch(commonApiAction(SignInServiceForTutor)(body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  signinAsTutor: PropTypes.func.isRequired,
  signinAsStudent: PropTypes.func.isRequired,
}
