import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { CartItems } from '../../types/albumsTypes';

import { Button } from '@material-ui/core';
import { useSnackbar, VariantType } from 'notistack';

interface RowTableProps {
  cartList: CartItems[]
}

const CartRowTable: FC<RowTableProps> = (props) => {

  const { cartList } = props;

  const { addItemToCart, deleteItemToCart, decreaseItemToCart } = useActions();

  const { enqueueSnackbar } = useSnackbar();

  const doNotify = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, {
      variant,
    })
  }

  const manageGoods = (doSomeThingGoods: Function, id: number,
    message: string, variant: VariantType) => {
    doSomeThingGoods(id);
    doNotify(message, variant)
  }

  return (
    <>
      {
        cartList.map((item, idx) => {
          return (
            <tr key={item.id}>
              <td>{idx + 1}</td>
              <td>{item.userId}-{item.title}</td>
              <td>${item.totalPrice}</td>
              <td>{item.count}</td>
              <td>
                <Button
                  style={{ margin: '0 0.5rem' }}
                  color='primary'
                  variant='contained'
                  onClick={() => manageGoods(addItemToCart, item.id,
                    `${item.userId}-${item.title.toUpperCase()} added to cart`,
                    `success`)}
                  type='button'
                >Add</Button>
                <Button
                  style={{ margin: '0 0.5rem' }}
                  color='default'
                  variant='contained'
                  onClick={() => manageGoods(decreaseItemToCart, item.id,
                    `${item.userId}-${item.title.toUpperCase()} decreased to cart`,
                    `warning`)}
                  type='button'
                >Decrease</Button>
                <Button
                  style={{ margin: '0 0.5rem' }}
                  color='secondary'
                  variant='contained'
                  onClick={() => manageGoods(deleteItemToCart, item.id,
                    `${item.userId}-${item.title.toUpperCase()} deleted from cart`,
                    `error`)}
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