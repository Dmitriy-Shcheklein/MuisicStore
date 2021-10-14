import { FC, MouseEventHandler } from "react"
import { Container, Table, TextField } from "../../styled/styled";
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
    <Container fldir='column'>
      <TextField as='h2'>Total price</TextField>
      <TextField as='p'>{total}$</TextField>
      <Table>
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
      </Table>
      {
        (cartList.length) && (<CartTableButtons
          cleanCart={cleanCart}
        />)
      }
    </Container>
  )
}

export default CartTable