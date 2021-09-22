import { FC, MouseEventHandler } from 'react';

interface CartTableProps {
  cleanCart: MouseEventHandler
}

const CartTableButtons: FC<CartTableProps> = (props) => {

  const { cleanCart } = props;

  return (
    <div>
      <button
        onClick={cleanCart}
        type='button'
      >Clean Cart</button>
      <button
        onClick={() => alert("Did not work")}
        type='button'>
        Buy
      </button>
    </div>
  )
}

export default CartTableButtons;
