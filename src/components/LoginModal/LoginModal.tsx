import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@mui/material/Modal';
import { NavLink, Redirect } from 'react-router-dom';
import { FC } from 'react';
import { style, useStyles } from './styles'
import useTypeSelector from '../../hooks/usetypeSelector';
import { useAuthActions } from '../../hooks/useActions';

const LoginModal: FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState('')

  const classes = useStyles()

  const [authForm, setAuthForm] = useState(false);

  const { userName, login } = useTypeSelector(state => state.auth)
  const { userLogout } = useAuthActions()

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
    if (userName) {
      setUser(userName)
    }
  }, [userName])

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleOpen}>{login ? `Welcome ${user ? user : ''}` : 'SIGN-IN'}</Button>
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