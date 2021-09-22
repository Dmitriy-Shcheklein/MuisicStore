import { FC, MouseEventHandler } from "react"
import { CartItems } from "../../types/albumsTypes";
import CartRowTable from "./CartRowTable";
import CartTableButtons from "./CartTableButtons";

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
          <CartRowTable
            cartList={cartList}
          />
        </tbody>
      </table>
      {
        (cartList.length) && (<CartTableButtons
          cleanCart={cleanCart}
        />)
      }
    </>
  )
}

export default CartTable