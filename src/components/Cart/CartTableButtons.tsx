import { Button } from '@mui/material/';
import React, { FC, MouseEventHandler } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';
import { useSnackbar } from 'notistack';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     '& Button': {
//       marginLeft: '5px'
//     }
//   }
// })

interface CartTableProps {
  cleanCart: MouseEventHandler
}

const CartTableButtons: FC<CartTableProps> = (props) => {

  const { login } = useTypeSelector(state => state.auth);

  const { enqueueSnackbar } = useSnackbar();

  const { cleanCart } = props;

  const cleaningCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    cleanCart(e);
    enqueueSnackbar(`The cart is cleared`, {
      variant: 'error'
    })
  }

  return (
    <div
    // className={classes.root}
    >
      <Button
        onClick={cleaningCart}
        variant='contained'
        color='warning'
        type='button'
      >Clean Cart</Button>
      {login && (<Button
        onClick={() => alert("Did not work")}
        variant='contained'
        color='success'
        type='button'>
        Buy
      </Button>)}
    </div>
  )
}

export default CartTableButtons;
