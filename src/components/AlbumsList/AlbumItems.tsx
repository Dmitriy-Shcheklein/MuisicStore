import { makeStyles, Button } from '@material-ui/core';
import { FC } from 'react';

interface CartItemProps {
  userId: number,
  id: number,
  title: string,
  price: number,
  addItemToCart: any,
}

const useStyles = makeStyles({
  root: {
    '& div': {
      width: '150px',
      height: '150px',
      backgroundColor: 'blue'
    }
  },
  button: {
    width: '50%',
    fontSize: '0,75rem',
    marginTop: '20px',

  }
})

const AlbumItems: FC<CartItemProps> = (props) => {

  const { userId, title, price, addItemToCart } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Musician: {userId}</h2>
      <p>Album name:<br /> {title}</p>
      <p><strong>Price: ${price}</strong></p>
      <div></div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={addItemToCart}
        type='button'
      >Add to cart</Button>
    </div>
  )
}

export default AlbumItems;
