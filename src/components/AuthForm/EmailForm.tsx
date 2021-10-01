import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles'
import { useLazyQuery } from '@apollo/client';
import { CHECK_USER_EMAIL, } from '../../graphQL/queries';
import { Redirect } from 'react-router-dom';
import { useAuthActions } from '../../hooks/useActions';


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

const EmailForm: FC = () => {

  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [correctEmail, setCorrectEmail] = useState(false);
  const { userLogin } = useAuthActions();

  const [checkUserEmail, { error, loading, data }] = useLazyQuery(
    CHECK_USER_EMAIL,
    { variables: { email } }
  );

  const classes = useStyles();

  useEffect(() => {
    if (email.includes('@')) {
      setIsDisable(false)
    } else {
      setIsDisable(true);
    }
  }, [email]);
  useEffect(() => {
    if (data?.checkUserEmail?.length) {
      setCorrectEmail(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleSearch = () => {
    checkUserEmail({ variables: { email }, });
  }


  if (correctEmail) {
    userLogin();
    return <Redirect to='albums' />
  }

  return (
    <Box className={classes.root}
      component="div">
      <div className={classes.wrapper}>
        <Typography
          variant="h5"
          className={classes.title}>
          Please enter email
          {error ? <p className={classes.danger}>Oh no! Something went wrong, please try it again</p> : null}
        </Typography>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-email"
          label="Enter email"
          value={email}
          onChange={handleChangeEmail}
        />
        <div className={classes.validError}>
          {loading && <small>Checking email</small>}
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

export default EmailForm;
