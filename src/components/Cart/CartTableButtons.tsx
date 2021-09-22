
import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& Button': {
      marginLeft: '5px'
    }
  }
})

interface CartTableProps {
  cleanCart: MouseEventHandler
}

const CartTableButtons: FC<CartTableProps> = (props) => {

  const { login } = useTypeSelector(state => state.auth)

  const { cleanCart } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={cleanCart}
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
