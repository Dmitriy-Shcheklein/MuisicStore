import { FC } from 'react';
import { Button } from '@material-ui/core';
import { CartItems } from '../../types/albumsTypes';
import { useActions } from '../../hooks/useActions';

interface RowTableProps {
  cartList: CartItems[]
}

const CartRowTable: FC<RowTableProps> = (props) => {

  const { cartList } = props;

  const { addItemToCart, deleteItemToCart, decreaseItemToCart } = useActions();

  return (
    <>
      {
        cartList.map((item, idx) => {
          return (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>{item.userId}{item.title}</td>
              <td>{item.totalPrice}</td>
              <td>{item.count}</td>
              <td>
                <Button
                  onClick={() => addItemToCart(item.id)}
                  type='button'
                >Add</Button>
                <Button
                  onClick={() => decreaseItemToCart(item.id)}
                  type='button'
                >Decrease</Button>
                <Button
                  onClick={() => deleteItemToCart(item.id)}
                  type='button'
                >Delete</Button>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}

export default CartRowTable;