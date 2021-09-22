import { FC, MouseEventHandler } from "react"
import { useActions } from "../../hooks/useActions";
import { CartItems } from "../../types/albumsTypes";
import { Button } from '@material-ui/core';

interface CartTableProps {
  total: number | null,
  cartList: CartItems[],
  cleanCart: MouseEventHandler,
}

const CartTable: FC<CartTableProps> = (props) => {

  const { total, cartList, cleanCart } = props;

  return (
    <>
      <h2>Total price</h2>
      <p>{total}</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RowTable
            cartList={cartList}
          />
        </tbody>
      </table>
      {
        (cartList.length > 0) && (<button
          onClick={cleanCart}
          type='button'
        >Clean Cart</button>)
      }
    </>
  )
}

export default CartTable

interface RowTableProps {
  cartList: CartItems[]
}

const RowTable: FC<RowTableProps> = (props) => {

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