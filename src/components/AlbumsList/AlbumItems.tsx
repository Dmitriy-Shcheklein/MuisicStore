import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';

interface CartItemsProps {
  userId: number,
  title: string,
  price: number,
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

const AlbumItems: FC<CartItemsProps> = (props) => {

  const { userId, title, price } = props;

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>Musician: {userId}</h2>
      <p>Album name: {title}</p>
      <p><strong>Price: ${price}</strong></p>
      <div></div>
    </div>
  )
}

export default AlbumItems;
