import React, { useState, useEffect, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from 'components/Copyright'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorComponent from 'components/Errors'
import '../SignupSignin.scss'

import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@material-ui/core'
import { emailRegx } from 'utils/commonConstants'
import { SignupServiceForTutor } from 'services/signup'
import { commonApiAction } from 'redux/actions/commonApiAction'
import { TutorSignupReducerName } from 'redux/constants/reducerNames'
import { removeEmptyKeyFromObject } from 'utils/helperFunction'
import { setAccessToken, setRefreshToken } from 'utils/helperFunction'
import { apiCommonActionType } from 'redux/constants/actionTypeName'
import { commonActionCreator } from 'redux/actions/commonActionCreator'
import Loader from 'components/Loaders'

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function TutorSignup({
  history,
  signupData,
  tutorSignup,
  isApiLoading,
  erronOnTutorSignup,
  clearError,
}) {
  const signUpFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organisationName: '',
    tutorType: '',
  }
  const [signUpFormState, setSignUpFormState] = useState(signUpFormFields)
  const [isError, setIsError] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const prevStateOfIsApiLoading = useRef(false)
  const classes = useStyles()

  const changeHandler = event => {
    event.stopPropagation()
    const { name, value } = event.target
    setSignUpFormState({
      ...signUpFormState,
      [name]: value,
    })
  }

  useEffect(() => {
    if (
      signUpFormState.email.length !== 0 &&
      signUpFormState.firstName.length !== 0 &&
      signUpFormState.organisationName.length !== 0 &&
      signUpFormState.password.length !== 0 &&
      signUpFormState.password.length === 6 &&
      signUpFormState.tutorType.length !== 0
    ) {
      setIsError(false)
    }
    if (emailRegx.test(signUpFormState.email)) {
      setIsEmailValid(false)
    } else setIsEmailValid(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpFormState, isEmailValid])

  useEffect(() => {
    if (erronOnTutorSignup) clearError()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erronOnTutorSignup])

  useEffect(() => {
    if (prevStateOfIsApiLoading.current && signupData) {
      setAccessToken(signupData.access)
      setRefreshToken(signupData.refresh)
      history.push('/dashboard')
    } else prevStateOfIsApiLoading.current = isApiLoading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApiLoading, erronOnTutorSignup])

  const submitRegisterForm = () => {
    const copyOfSignUpFormState = { ...signUpFormState }
    if (
      copyOfSignUpFormState.email.length === 0 ||
      copyOfSignUpFormState.firstName.length === 0 ||
      copyOfSignUpFormState.password.length === 0 ||
      copyOfSignUpFormState.password.length !== 8 ||
      copyOfSignUpFormState.tutorType.length === 0
    ) {
      setIsError(true)
    } else if (
      copyOfSignUpFormState.tutorType === 'Yes' &&
      copyOfSignUpFormState.organisationName.length === 0
    ) {
      setIsError(true)
    } else {
      copyOfSignUpFormState.tutorType === 'Yes'
        ? (copyOfSignUpFormState.tutorType = 'owner')
        : (copyOfSignUpFormState.tutorType = 'teacher')

      tutorSignup(removeEmptyKeyFromObject(copyOfSignUpFormState))
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
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={signUpFormState.firstName.length === 0 && isError}
                onChange={e => changeHandler(e)}
                defaultValue={signUpFormState.firstName}
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              {signUpFormState.firstName.length === 0 && isError && (
                <FormHelperText error id="component-error-text">
                  Please enter your name
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => changeHandler(e)}
                defaultValue={signUpFormState.lastName}
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                error={isEmailValid && isError}
                onChange={e => changeHandler(e)}
                defaultValue={signUpFormState.email}
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
                  (signUpFormState.email.length === 0 ||
                    signUpFormState.password.length !== 8) &&
                  isError
                }
                onChange={e => changeHandler(e)}
                defaultValue={signUpFormState.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                  maxLength: 8,
                }}
              />
              {signUpFormState.password.length === 0 && isError ? (
                <FormHelperText error id="component-error-text">
                  Please enter your password
                </FormHelperText>
              ) : (
                signUpFormState.password.length < 8 &&
                isError && (
                  <FormHelperText error id="component-error-text">
                    Please enter minimum 8 length password
                  </FormHelperText>
                )
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel required>Do you own an organization ?</FormLabel>
                <RadioGroup aria-label="tutorType" name="tutorType">
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                    onClick={e => changeHandler(e)}
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    onClick={e => changeHandler(e)}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
              {signUpFormState.tutorType.length === 0 && isError && (
                <FormHelperText error id="component-error-text">
                  Please select any one
                </FormHelperText>
              )}
            </Grid>
            {signUpFormState.tutorType === 'Yes' && (
              <Grid item xs={12}>
                <TextField
                  error={
                    signUpFormState.organisationName.length === 0 && isError
                  }
                  defaultValue={signUpFormState.organisationName}
                  variant="outlined"
                  required
                  fullWidth
                  id="organisationName"
                  label="Organization Name"
                  name="organisationName"
                  autoComplete="Orgname"
                  onChange={e => changeHandler(e)}
                />
                {signUpFormState.organisationName.length === 0 && isError && (
                  <FormHelperText error id="component-error-text">
                    Please enter your organization Name
                  </FormHelperText>
                )}
              </Grid>
            )}
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isApiLoading}
            className={classes.submit}
            onClick={() => {
              submitRegisterForm()
            }}
          >
            {isApiLoading ? <Loader type="circularLoader" /> : 'Sign Up'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href=""
                variant="body2"
                onClick={() => history.push('/signin')}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Box className="tutor-signup-div" />
      {/* {erronOnTutorSignup && (
        <ErrorComponent message={erronOnTutorSignup.data.detail} variant="error" />
      )} */}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    isApiLoading: state.tutorSignup.isApiLoading,
    erronOnTutorSignup: state.tutorSignup.apiError,
    signupData: state.tutorSignup.apiData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tutorSignup: body =>
      dispatch(
        commonApiAction(SignupServiceForTutor)(TutorSignupReducerName, body)
      ),
    clearError: () =>
      dispatch(
        commonActionCreator(TutorSignupReducerName)(
          apiCommonActionType.clearError,
          null
        )
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TutorSignup))

TutorSignup.propTypes = {
  isApiLoading: PropTypes.bool.isRequired,
  erronOnTutorSignup: PropTypes.object,
  signupData: PropTypes.object,
  history: PropTypes.object.isRequired,
  tutorSignup: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
}

TutorSignup.defaultProps = {
  erronOnTutorSignup: null,
  signupData: null,
}
