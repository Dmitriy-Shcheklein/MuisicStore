import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles'
import { useLazyQuery } from '@apollo/client';
import { CHECK_USER_NAME } from '../../graphQL/queries';
import EmailForm from './EmailForm';

const useStyles = makeStyles({
  root: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    height: '100%'
  },
  wrapper: {
    width: '100%',
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    position: 'relative',
  },
  title: {
    width: '100%',
    '& p': {
      fontSize: '1rem',
      width: '100%',
    }
  },
  input: {
    width: '100%',
    margin: '1rem',
  },
  button: {
    width: '50%',
    margin: '0 auto',
  },
  validError: {
    color: '#dc143c',
    position: 'absolute',
    top: '100%',
    left: '1%',
  },
  danger: {
    color: '#dc143c',
  },
})

const AuthForm: FC = () => {

  const [userName, setUserName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [correctLogin, setCorrectLogin] = useState(false);


  const [checkUserName, { error, loading, data }] = useLazyQuery(
    CHECK_USER_NAME,
  );

  const classes = useStyles();

  useEffect(() => {
    if (userName.length > 5) {
      setIsDisable(false)
    } else {
      setIsDisable(true);
    }
  }, [userName]);
  useEffect(() => {
    if (data?.checkUserName?.length) {
      setCorrectLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleSearch = () => {
    checkUserName({ variables: { name: userName }, });
  }

  if (correctLogin) {
    return <EmailForm userName={userName} />
  }

  return (
    <Box className={classes.root}
      component="div"
    >
      <div className={classes.wrapper}>
        <Typography
          variant="h5"
          className={classes.title}>
          Please enter a login
          {error ? <p className={classes.danger}>Oh no! Something went wrong, please try it again</p> : null}
        </Typography>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-login"
          label="Enter a login"
          value={userName}
          onChange={handleChangeName}
        />
        <div className={classes.validError}>
          {loading && <small>Checking a login</small>}
        </div>
      </div>
      <Button
        onClick={handleSearch}
        className={classes.button}
        disabled={isDisable}
        variant="contained"
      >Continue</Button>
    </Box >
  )
}

export default AuthForm;