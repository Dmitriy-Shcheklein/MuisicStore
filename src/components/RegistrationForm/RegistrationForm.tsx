import { FC } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Typography } from '@mui/material';
import useTypeSelector from '../../hooks/usetypeSelector';
import { makeStyles } from '@material-ui/styles';
import { useMutation } from '@apollo/client';

import { ADD_NEW_USER } from './mutation'

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    height: '100%'
  },
  title: {
    width: '100%'
  },
  input: {
    width: '100%',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    margin: '0 auto',
  },
  wrapper: {
    width: '100%',
    position: 'relative',
    '& small': {
      color: '#dc143c',
      position: 'absolute',
      top: '100%',
      left: '1%'
    }
  }
})

interface IUser {
  userName: string,
  email: string,
  password: string,
}

const RegistrationForm: FC = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [blurEmail, setBlurEmail] = React.useState(false);
  const [blurPassword, setBlurPassword] = React.useState(false);
  const [blurLogin, setBlurLogin] = React.useState(false);

  const [addUser, { error, data }] = useMutation<
    { addUser: IUser },
    { name: string, email: string, password: string }
  >(ADD_NEW_USER, {
    variables: { name: userName, email, password }
  })

  const { login } = useTypeSelector(state => state.auth)

  const classes = useStyles();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(typeof validateEmail)
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const handleBlurEmail = () => {
    setBlurEmail(true)
  }
  const handleBlurPassword = () => {
    setBlurPassword(true)
  }
  const handleBlurLogin = () => {
    setBlurLogin(true)
  }

  const submittedForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submited');
    email && password && userName && addUser();
    e.preventDefault();

  }

  const validateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const validatePassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  const validateLogin = /^[a-z]+([-_]?[a-z0-9]+){5,15}$/i;

  const isValid = (regExp: RegExp, string: string): boolean => {
    return regExp.test(string)
  }

  const isEmail = isValid(validateEmail, email);
  const isPassword = isValid(validatePassword, password);
  const isLogin = isValid(validateLogin, userName);

  let isDisableSignIn = isEmail && isPassword && isLogin

  return (
    <Box className={classes.root}
      component="form"
      sx={{
        '& > :not(style)': { m: 3 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submittedForm}
    >
      <Typography
        variant="h5"
        className={classes.title}>
        Please fill in the required information for registration
      </Typography>
      <Typography
        variant="h5"
        className={classes.title}>
        {error ? <p>Oh no! {error.message}</p> : null}
        {data && data.addUser ? <p>Saved!</p> : null}
      </Typography>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-email"
          label="Enter email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
        />
        {(!isEmail && blurEmail) && <small>Enter a correct email</small>}
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-password"
          label="Enter a password"
          value={password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
        />
        {(!isPassword && blurPassword) && <small>Enter a correct password</small>}
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-login"
          label="Enter a login"
          value={userName}
          onChange={handleChangeName}
          onBlur={handleBlurLogin}
        />
        {(!isLogin && blurLogin) && <small>Enter a correct login</small>}
      </div>
      <Typography className={classes.checkbox}>
        <Checkbox
          checked={checked}
          onChange={handleChangeChecked}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        Remember me
      </Typography>
      {
        !login && <Button
          type="submit"
          className={classes.button}
          disabled={!isDisableSignIn}
          variant="contained"
        >Sign-In</Button>
      }
      {
        login && <Button
          className={classes.button}
          variant="contained"
        >Logout</Button>
      }
    </Box>
  )
}

export default RegistrationForm;