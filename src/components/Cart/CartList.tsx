import useTypeSelector from "../../hooks/usetypeSelector";
import { useActions } from "../../hooks/useActions";
import CartTable from "./CartTable";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {

  const { cartList, total } = useTypeSelector(state => state.albums);

  const { cleanCart } = useActions();

  if (!cartList.length) return <EmptyCart />

  return (
    <CartTable
      total={total}
      cartList={cartList}
      cleanCart={cleanCart}
    />
  )
}

export default CartContainer;