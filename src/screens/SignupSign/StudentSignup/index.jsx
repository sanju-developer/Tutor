import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from 'components/Copyright';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { FormHelperText } from '@material-ui/core';
import { emailRegx } from 'utils/commonConstants';

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
}));

function StudentSignup({ history }) {
  const signUpFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organizationName: '',
    ownOrganization: '',
  };
  const [signUpFormState, setSignUpFormState] = useState(signUpFormFields);
  const [isError, setIsError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const classes = useStyles();

  const changeHandler = event => {
    event.stopPropagation();
    const { name, value } = event.target;
    setSignUpFormState({
      ...signUpFormState,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      signUpFormState.email.length !== 0 &&
      signUpFormState.firstName.length !== 0 &&
      signUpFormState.organizationName.length !== 0 &&
      signUpFormState.password.length !== 0 &&
      signUpFormState.password.length === 6 &&
      signUpFormState.ownOrganization.length !== 0
    ) {
      setIsError(false);
    }
    if (emailRegx.test(signUpFormState.email)) {
      setIsEmailValid(false);
    } else setIsEmailValid(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpFormState, isEmailValid]);

  const submitRegisterForm = () => {
    if (
      signUpFormState.email.length === 0 ||
      signUpFormState.firstName.length === 0 ||
      signUpFormState.organizationName.length === 0 ||
      signUpFormState.password.length === 0 ||
      signUpFormState.password.length !== 6 ||
      signUpFormState.ownOrganization.length === 0
    ) {
      setIsError(true);
    } else {
      // setIsError(false);
    }
  };

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
                    signUpFormState.password.length !== 6) &&
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
                  maxLength: 6,
                }}
              />
              {signUpFormState.password.length === 0 && isError ? (
                <FormHelperText error id="component-error-text">
                  Please enter your password
                </FormHelperText>
              ) : (
                signUpFormState.password.length < 6 &&
                isError && (
                  <FormHelperText error id="component-error-text">
                    Please enter minimum 6 length password
                  </FormHelperText>
                )
              )}
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              submitRegisterForm();
            }}
          >
            Sign Up
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
    </Container>
  );
}

export default withRouter(StudentSignup);

StudentSignup.propTypes = {
  history: PropTypes.object.isRequired,
};