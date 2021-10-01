import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@mui/material/Modal';
import { NavLink, Redirect } from 'react-router-dom';
import { FC } from 'react';
import { style, useStyles } from './styles'

interface LoginModalProps {
  login: boolean;
  userLogin: Function;
  userLogout: Function;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userName, setUserName] = useState('')

  const classes = useStyles()

  const { login, userLogout } = props;

  const [authForm, setAuthForm] = useState(false);

  const logout = () => {
    userLogout();
    localStorage.clear();
    handleClose()
  }

  useEffect(() => {
    handleClose();
    setAuthForm(false)
  }, [authForm]);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name)
    }
  }, [userName])

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleOpen}>{login ? `Welcome ${userName ? userName : ''}` : 'SIGN-IN'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.bntContainer}>
            <Button
              disabled={login}
              variant="contained"
              onClick={() => setAuthForm(true)}
              color="primary">Sign-In</Button>
            {authForm ? <Redirect to='/auth' /> : null}
            < Button
              onClick={logout}
              disabled={!login}
              variant="contained"
              color="primary">LogOut</Button>
          </div>
          <Typography className={classes.txt}>
            New customers?
            <NavLink
              onClick={handleClose}
              to='/registration' exact>Start here</NavLink>
          </Typography>
        </Box>
      </Modal>
    </div >
  );
}

export default LoginModal;