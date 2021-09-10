import { UserState } from "../../types/albumsTypes";
import { CartAction, CartActiontypes } from "../../types/cartTypes";
import { initialState } from "./albumReducer";

export const cartReducer = (state: UserState = initialState, action: CartAction): UserState => {

  switch (action.type) {
    case CartActiontypes.ADD_ITEM_TO_CART:
      console.log(state)
      const productId = action.payload;
      const album = state.albums.find(album => album.id === productId)
      console.log(album)
      if (!album) return {
        ...state,
        cartList: [],
      }
      const newItem = {
        userId: album.userId,
        id: album.id,
        title: album.title,
        price: 10,
        count: 1,
      };
      return {
        ...state,
        cartList: [
          ...state.cartList,
          newItem,
        ],
        totalPrice: state.cartList.reduce((prev, current) => prev + current.price, 0),
      }
    // case CartActiontypes.DECREASE_ITEM_TO_CART:
    //   return {
    //     cartList: action.payload,
    //     totalPrice: action.payload,
    //   }
    // case CartActiontypes.DELETE_ITEM_TO_CART:
    //   return {
    //     cartList: action.payload,
    //     totalPrice: action.payload,
    //   }
    // case CartActiontypes.CLEAN_CART:
    //   return {
    //     cartList: action.payload,
    //     totalPrice: action.payload,
    //   }
    default:
      return state;
  }

}