import {
  CartAction, CartActiontypes,
} from "../../types/cartTypes"


const addItemToCart = (productId: number): CartAction => {
  return {
    type: CartActiontypes.ADD_ITEM_TO_CART,
    payload: productId,
  }
}

export {
  addItemToCart
}