import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { style, useStyles } from './styles'

interface LoginModalProps {
  login: boolean;
  userLogin: Function;
  userLogout: Function;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles()

  const { login, userLogin, userLogout } = props;

  const logout = () => {
    userLogout();
    handleClose()
  }

  const signIn = () => {
    userLogin();
    handleClose();
  }

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleOpen}>{login ? 'Welcome' : 'SIGN-IN'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.bntContainer}>
            <Button
              onClick={signIn}
              disabled={login}
              variant="contained"
              color="primary">Sign-In</Button>
            <Button
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
    </div>
  );
}

export default LoginModal;