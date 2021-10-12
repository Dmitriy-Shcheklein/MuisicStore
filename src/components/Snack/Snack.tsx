import { FC, MouseEventHandler } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface SnackProps {
  open: boolean;
  onClose: any;
}

const Snack: FC<SnackProps> = (props) => {

  const { open, onClose } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message="Note archived"
    >
      <Alert severity="info">Product add to cart!</Alert>
    </Snackbar>
  )
}

export default Snack
