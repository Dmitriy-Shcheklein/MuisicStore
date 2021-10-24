import React, { FC, useEffect, useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material/';
import { useLazyQuery } from '@apollo/client';
import { CHECK_USER_NAME } from '../../graphQL/queries';
import PasswordForm from './PasswordForm';

const AuthForm: FC = () => {

  const [userName, setUserName] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [correctLogin, setCorrectLogin] = useState(false);
  const [noLogin, setNoLogin] = useState(false)


  const [checkUserName, { error, loading, data }] = useLazyQuery(
    CHECK_USER_NAME,
  );

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
    } else if (data?.checkUserName?.length === 0) {
      setNoLogin(true)
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
    return <PasswordForm userName={userName} />
  }

  return (
    <Box
      // className={classes.root}
      component="div"
    >
      <div
      //  className={classes.wrapper}
      >
        <Typography
          variant="h5"
        // className={classes.title}
        >
          Please enter a login
          {error ? <p
          //  className={classes.danger}
          >Oh no! Something went wrong, please try it again</p> : null}
        </Typography>
      </div>
      <div
      //  className={classes.wrapper}
      >
        <TextField
          // className={classes.input}
          id="outlined-login"
          label="Enter a login"
          value={userName}
          onChange={handleChangeName}
        />
        <div
        //  className={classes.validError}
        >
          {loading && <small>Checking a login &nbsp;</small>}
          {noLogin && <small>Login does not exist &nbsp;</small>}
        </div>
      </div>
      <Button
        onClick={handleSearch}
        // className={classes.button}
        disabled={isDisable}
        variant="contained"
      >Continue</Button>
    </Box >
  )
}

export default AuthForm;