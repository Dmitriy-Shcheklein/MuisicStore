import { FC, MouseEventHandler } from 'react';
import useTypeSelector from '../../hooks/usetypeSelector';

interface CartTableProps {
  cleanCart: MouseEventHandler
}

const CartTableButtons: FC<CartTableProps> = (props) => {

  const { login } = useTypeSelector(state => state.auth)

  const { cleanCart } = props;

  return (
    <div>
      <button
        onClick={cleanCart}
        type='button'
      >Clean Cart</button>
      {login && (<button
        onClick={() => alert("Did not work")}
        type='button'>
        Buy
      </button>)}
    </div>
  )
}

export default CartTableButtons;
