import { FC } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, Typography } from '@mui/material';
import useTypeSelector from '../../hooks/usetypeSelector';

const RegistrationForm: FC = () => {

  const [email, setEmail] = React.useState('Enter your email');
  const [password, setPassword] = React.useState('Enter a password');
  const [checked, setChecked] = React.useState(false);
  const { login } = useTypeSelector(state => state.auth)


  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-email"
        label="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <TextField
        id="outlined-password"
        label="password"
        value={password}
        onChange={handleChangePassword}
      />
      <Typography>
        <Checkbox
          checked={checked}
          onChange={handleChangeChecked}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        Remember me
      </Typography>
      <Button disabled={login} variant="contained">Sign-In</Button>
      <Button disabled={!login} variant="contained">Exit</Button>

    </Box>
  )
}

export default RegistrationForm;