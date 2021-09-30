import { FC, MouseEventHandler, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '30vh',
    backgroundColor: '#ffffff',
    border: '2px solid #3f50b5',
    borderRadius: '3% 3% 3% 3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    textAlign: 'center',
  },
  btnWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& button': {
      fontSize: '1rem'
    }
  }
})

interface AfterRegModalProps {
  handleCloseModal: MouseEventHandler;
  openModal: boolean;
}

const AfterRegModal: FC<AfterRegModalProps> = (props) => {

  const { handleCloseModal, openModal } = props;
  const [redirectProfile, setRedirectProfile] = useState(false);
  const [redirectShop, setRedirectShop] = useState(false);


  const classes = useStyles();

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.root}>
        <Typography id="modal-modal-title" variant="h5" component="h2" className={classes.title}>
          Registration was successful!
        </Typography>
        <div className={classes.btnWrapper}>
          <Button onClick={() => setRedirectProfile(true)}>Go to your personal account</Button>
          <Button onClick={() => setRedirectShop(true)}>Go to shopping</Button>
        </div>
        {redirectProfile && <Redirect to='/profile' />}
        {redirectShop && <Redirect to='/albums' />}
      </Box>
    </Modal>

  );
}

export default AfterRegModal;
