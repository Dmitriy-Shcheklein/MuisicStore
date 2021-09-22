import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { FC } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  bntContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    margin: '0 auto',
  },
  txt: {
    textAlign: 'center'
  }
})

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
              to='/' exact>Start here</NavLink>
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;