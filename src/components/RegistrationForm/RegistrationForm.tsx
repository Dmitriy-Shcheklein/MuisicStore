import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Typography } from '@mui/material';
import { useLazyQuery, useMutation } from '@apollo/client';

import { ADD_NEW_USER } from './mutation';
import { CHECK_USER_NAME, CHECK_USER_EMAIL } from './querie'
import { useStyles } from './styles';
import { useAuthActions } from '../../hooks/useActions';
import useTypeSelector from '../../hooks/usetypeSelector';
import AfterRegModal from './AfterRegModal';

interface IUser {
  userName: string,
  email: string,
  password: string,
}

const RegistrationForm: FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [checked, setChecked] = useState(false);
  const [blurEmail, setBlurEmail] = useState(false);
  const [blurPassword, setBlurPassword] = useState(false);
  const [blurLogin, setBlurLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const { login } = useTypeSelector(state => state.auth);
  const { userLogin, userLogout } = useAuthActions();

  const [addUser, { error, data }] = useMutation<
    { addUser: IUser },
    { name: string, email: string, password: string }
  >(ADD_NEW_USER,
    {
      variables: { name: userName, email, password },
    });

  const [checkUserName, { loading: loadingLogin, data: dataUserName }] = useLazyQuery(
    CHECK_USER_NAME,
    { variables: { name: userName } }
  );
  const [checkUserEmail, { loading: loadingEmail, data: dataUserEmail }] = useLazyQuery(
    CHECK_USER_EMAIL,
    { variables: { email } }
  );

  useEffect(() => {
    if (userName.length > 5) {
      checkUserName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);
  useEffect(() => {
    if (email.includes('@')) {
      checkUserEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
  useEffect(() => {
    if (data?.addUser) {
      userLogin();
      clearForm();
      setOpenModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const classes = useStyles();

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setUserName('');
    setChecked(false);
    setBlurEmail(false);
    setBlurPassword(false);
    setBlurLogin(false);
  }

  const handleCloseModal = () => setOpenModal(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const validateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const validatePassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  const validateLogin = /^[a-zA-Z](.[a-zA-Z0-9_-]*){5,}$/;

  const isValid = (regExp: any, string: string): boolean => {
    return regExp.test(string)
  }

  const isEmail = isValid(validateEmail, email);
  const isPassword = isValid(validatePassword, password);
  const isLogin = isValid(validateLogin, userName);

  let isDisableSignIn = isEmail && isPassword &&
    isLogin && !dataUserName?.checkUserName?.length &&
    !dataUserEmail?.checkUserEmail?.length

  const submittedForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email && password && userName && addUser();
  }

  return (
    <Box className={classes.root}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={submittedForm}>
      <div className={classes.wrapper}>
        <Typography
          variant="h5"
          className={classes.title}>
          Please fill in the required information for registration
          {error ? <p className={classes.danger}>Oh no! Something went wrong, please try it again</p> : null}
          {data && data.addUser ? <AfterRegModal
            handleCloseModal={handleCloseModal}
            openModal={openModal}
          /> : null}
        </Typography>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-login"
          label="Enter a login"
          value={userName}
          onChange={handleChangeName}
          onBlur={() => setBlurLogin(true)}
        />
        <div className={classes.validError}>
          {(!isLogin && blurLogin) ? <small>Enter a correct login &nbsp;</small> : null}
          {loadingLogin ? <small>Checking a login &nbsp;</small> : null}
          {dataUserName?.checkUserName?.length ? <small>This login already exists &nbsp;</small> : null}
        </div>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-email"
          label="Enter email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={() => setBlurEmail(true)}
        />
        <div className={classes.validError}>
          {(!isEmail && blurEmail) ? <small>Enter a correct email &nbsp;</small> : null}
          {loadingEmail ? <small>Checking a email &nbsp;</small> : null}
          {dataUserEmail?.checkUserEmail?.length ? <small>This email already exists &nbsp;</small> : null}
        </div>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          type="password"
          id="outlined-password"
          label="Enter a password"
          value={password}
          onChange={handleChangePassword}
          onBlur={() => setBlurPassword(true)}
        />
        <div className={classes.validError}>
          {(!isPassword && blurPassword) && <small>Enter a correct password &nbsp;</small>}
        </div>
      </div>
      <div className={classes.wrapper}>
        <Typography className={classes.checkbox}>
          <Checkbox
            checked={checked}
            onChange={handleChangeChecked}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          Remember me
        </Typography>
      </div>
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
          onClick={() => userLogout()}
          className={classes.button}
          variant="contained"
        >Logout</Button>
      }
    </Box>
  )
}

export default RegistrationForm;