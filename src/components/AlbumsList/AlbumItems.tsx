import React from 'react';
import { Button } from '@mui/material';
import { FC } from 'react';
import { useSnackbar } from 'notistack';

interface CartItemProps {
  userId: number,
  id: number,
  title: string,
  price: number,
  addItemToCart: any,
}

// const useStyles = makeStyles({
//   root: {
//     margin: '1rem 0',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     border: '2px solid #3f51b5',
//     borderRadius: '1rem',
//     boxShadow: '0px 0px 1rem 0px rgba(53, 147, 220, 0.6)',
//     backgroundColor: '#accdea',
//     '& div': {
//       width: '150px',
//       height: '150px',
//       backgroundColor: 'blue',
//     }
//   },
//   button: {
//     width: '10rem',
//     fontSize: '0,75rem',
//     margin: '1rem 0',

//   }
// })

const AlbumItems: FC<CartItemProps> = (props) => {

  const { userId, title, price, addItemToCart } = props;

  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    addItemToCart();
    enqueueSnackbar(`${title.toUpperCase()} added to cart`, {
      variant: 'success',
    })
  }

  return (
    <div
    // class root
    >
      <h2>Musician: {userId}</h2>
      <p>Album name:<br /> {title}</p>
      <p><strong>Price: ${price}</strong></p>
      <Button
        variant="contained"
        color="primary"
        //class button
        onClick={handleClick}
        type='button'
      >Add to cart</Button>
    </div>
  )
}

export default AlbumItems;
