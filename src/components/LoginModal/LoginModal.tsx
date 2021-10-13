import { FC } from 'react';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import useTypeSelector from '../../hooks/usetypeSelector';
import { useAuthActions } from '../../hooks/useActions';

import Button from '@material-ui/core/Button';
import Modal from '@mui/material/Modal';
import { Container, ModalContainer, StyledLink, TextField } from '../../styled/styled';

const Styledbutton = styled(Button)`
  width: 50%;
  height: 5rem;
  span {
    font-size: 2rem;
  }
`;

const LoginModal: FC = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState('')

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
    <>
      <Button
        color="inherit"
        onClick={handleOpen}>{login ? `Welcome ${user ? user : ''}` : 'SIGN-IN'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          {login && <TextField
            size='2rem'
            transform='uppercase'
          >Press the button to exit</TextField>}
          {!login && <TextField
            size='2rem'
            transform='uppercase'
          >Press the button to sign-in</TextField>}
          <Container>
            {!login && <Styledbutton
              disabled={login}
              variant="contained"
              onClick={() => setAuthForm(true)}
              color="primary">Sign-In</Styledbutton>}
            {authForm ? <Redirect to='/auth' /> : null}
            {login && <Styledbutton
              onClick={logout}
              disabled={!login}
              variant="contained"
              color="primary">LogOut</Styledbutton>}
          </Container>
          {!login && <TextField
            transform='uppercase'
            size='1.5rem'>
            New customers?&nbsp;
            <StyledLink
              size='1.5rem'
              linebottom='underline'
              transform='none'
              onClick={handleClose}
              to='/registration' exact>Start here</StyledLink>
          </TextField>}
        </ModalContainer>
      </Modal>
    </>
  );
}

export default LoginModal;