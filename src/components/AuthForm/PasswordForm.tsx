import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import useStyles from './styles';
import { useLazyQuery } from '@apollo/client';
import { CHECK_USER_PASSWORD } from '../../graphQL/queries';
import { Redirect } from 'react-router-dom';
import { useAuthActions } from '../../hooks/useActions';

interface PassFormProps {
  userName: string;
}

const PasswordForm: FC<PassFormProps> = (props) => {

  const { userName } = props

  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [correctPass, setCorrectPass] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const { userLogin } = useAuthActions();

  const [checkUserPassword, { error, loading, data, called }] = useLazyQuery(
    CHECK_USER_PASSWORD,
  );

  const classes = useStyles();

  useEffect(() => {
    if (password.length > 5) {
      setIsDisable(false)
    } else {
      setIsDisable(true);
    }
  }, [password]);
  useEffect(() => {
    if (data?.checkUserPassword?.length) {
      setCorrectPass(true);
      userLogin(userName);
      localStorage.setItem('userName', userName)
    } else if (data?.checkUserPassword?.length === 0) {
      console.log("Length =0")
      setValidPass(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])


  const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSearch = () => {
    checkUserPassword({ variables: { password }, });
  }

  if (correctPass) {
    return <Redirect to='albums' />
  }

  return (
    <Box className={classes.root}
      component="div">
      <div className={classes.wrapper}>
        <Typography
          variant="h5"
          className={classes.title}>
          Please enter a password
          {error ? <p className={classes.danger}>Oh no! Something went wrong, please try it again</p> : null}
        </Typography>
      </div>
      <div className={classes.wrapper}>
        <TextField
          className={classes.input}
          id="outlined-password"
          label="Enter a password"
          value={password}
          onChange={handleChangePass}
        />
        <div className={classes.validError}>
          {loading && <small>Checking password &nbsp;</small>}
          {validPass && <small>Invalid password &nbsp;</small>}
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

export default PasswordForm;
