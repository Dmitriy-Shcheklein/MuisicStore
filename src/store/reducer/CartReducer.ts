import { CartState } from "../../types/cartTypes"
import { CartActiontypes } from "../../types/cartTypes"

const initialState: CartState = {
  cart: [],
  totalPrice: null,
}


export const cartReducer = (state = initialState, action: any): void => {

  // switch (action.type) {
  //   case CartActiontypes.ADD_ITEM_TO_CART:
  //     return {
  //     }
  //   case CartActiontypes.DECREASE_ITEM_TO_CART:
  //     return
  //   case CartActiontypes.DELETE_ITEM_TO_CART:
  //     return
  //   case CartActiontypes.CLEAN_CART:
  //     return
  //   default:
  //     return state;
  // }

}