import { FC, useEffect, useState } from 'react';
import { useAuthActions } from '../../hooks/useActions';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_NEW_USER } from '../../graphQL/mutations';
import { CHECK_USER_NAME, CHECK_USER_EMAIL } from '../../graphQL/queries';
import useTypeSelector from '../../hooks/usetypeSelector';

import AfterRegModal from './AfterRegModal';
import Input from '../Input';

import { Button, Checkbox } from '@mui/material';
import * as S from '../../styled/styled';

import { useStyles } from './styles';

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
  const [focusEmail, setFocusEmail] = useState(false);
  const [blurPassword, setBlurPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [blurLogin, setBlurLogin] = useState(false);
  const [focusLogin, setFocusLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { login } = useTypeSelector(state => state.auth);
  const { userLogin, userLogout } = useAuthActions();

  const [addUser, { error, data }] = useMutation<
    { addUser: IUser },
    { name: string, email: string, password: string }
  >(ADD_NEW_USER);

  const [checkUserName, { loading: loadingLogin, data: dataUserName }] = useLazyQuery(
    CHECK_USER_NAME);
  const [checkUserEmail, { loading: loadingEmail, data: dataUserEmail }] = useLazyQuery(
    CHECK_USER_EMAIL);

  useEffect(() => {
    if (userName.length > 5) {
      checkUserName({ variables: { name: userName } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);
  useEffect(() => {
    if (email.includes('@')) {
      checkUserEmail({ variables: { email } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
  useEffect(() => {
    if (data?.addUser) {
      userLogin(userName);
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

  const onFocus = (inputName: string) => {
    switch (inputName) {
      case 'login':
        setBlurLogin(false);
        setFocusLogin(true);
        break;
      case 'email':
        setBlurEmail(false);
        setFocusEmail(true);
        break;
      case 'password':
        setBlurPassword(false);
        setFocusPassword(true);
        break;
      default:
        return
    }
  };

  const onBlur = (inputName: string) => {
    switch (inputName) {
      case 'login':
        setFocusLogin(false);
        setBlurLogin(true);
        break;
      case 'email':
        setFocusEmail(false);
        setBlurEmail(true);
        break;
      case 'password':
        setFocusPassword(false);
        setBlurPassword(true);
        break;
      default:
        return
    }
  }

  // const validateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  // const validatePassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
  // const validateLogin = /^[a-zA-Z](.[a-zA-Z0-9_-]*){5,}$/;

  // const isValid = (regExp: any, string: string): boolean => {
  //   return regExp.test(string)
  // }


  // const isPassword = isValid(validatePassword, password);
  // const isLogin = isValid(validateLogin, userName);

  let isDisableSignIn = !dataUserName?.checkUserName?.length &&
    !dataUserEmail?.checkUserEmail?.length

  const submittedForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    email && password && userName && addUser({ variables: { name: userName, email, password }, });
  }

  return (
    <S.Container>
      <S.Form
        autoComplete="off"
        onSubmit={submittedForm}>
        <div className={classes.wrapper}>
          <S.TextField as='h2' size='2rem'>
            Please fill in the required information for registration
            {error ? <S.TextField as='p'
              className={classes.danger}>
              Oh no! Something went wrong, please try it again</S.TextField> : null}
            {data && data.addUser ? <AfterRegModal
              handleCloseModal={handleCloseModal}
              openModal={openModal}
            /> : null}
          </S.TextField>
        </div>
        <Input
          label='Enter a login'
          value={userName}
          onChange={handleChangeName}
          onFocus={() => onFocus('login')}
          onBlur={() => onBlur('login')}
          validateRegExp={/^[a-zA-Z](.[a-zA-Z0-9_-]*){5,}$/}
          isError={blurLogin && !!userName && !focusLogin} message={'Enter a correct login'}
          isMessage2={!!loadingLogin} message2={'Checking a login'}
          isMessage3={dataUserName?.checkUserName[0]?.name === userName} message3={'This login already exists'}
        />
        <Input
          label='Enter email'
          value={email}
          onChange={handleChangeEmail}
          onFocus={() => onFocus('email')}
          onBlur={() => onBlur('email')}
          validateRegExp={/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
          isError={blurEmail && !!email && !focusEmail} message={'Enter a correct email'}
          isMessage2={!!loadingEmail} message2={'Checking a email'}
          isMessage3={dataUserEmail?.checkUserEmail[0]?.email === email} message3={'This email already exists'}
        />
        <Input
          label='Enter a password'
          value={password}
          onChange={handleChangePassword}
          onFocus={() => onFocus('password')}
          onBlur={() => onBlur('password')}
          type='password'
          validateRegExp={/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g}
          isError={blurPassword && !focusPassword && !!password} message={'Enter a correct password'}
        />
        <S.Container juscontent='start' style={{ fontSize: '1rem' }}>
          <Checkbox
            checked={checked}
            onChange={handleChangeChecked}
          />
          Remember me
        </S.Container>

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
      </S.Form>
    </S.Container>
  )
}

export default RegistrationForm;
