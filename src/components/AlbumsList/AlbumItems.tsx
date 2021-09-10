import { makeStyles } from '@material-ui/core';
import { FC, MouseEventHandler } from 'react';

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
  }
})

const AlbumItems: FC<CartItemProps> = (props) => {

  const { userId, title, price, addItemToCart } = props;

  const classes = useStyles();



  return (
    <div className={classes.root}>
      <h2>Musician: {userId}</h2>
      <p>Album name: {title}</p>
      <p><strong>Price: ${price}</strong></p>
      <div></div>
      <button
        onClick={addItemToCart}
        type='button'
      >Add to cart</button>
    </div>
  )
}

export default AlbumItems;
