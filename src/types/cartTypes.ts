export enum CartActiontypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DECREASE_ITEM_TO_CART = 'DECREASe_ITEM_TO_CART',
  CLEAN_CART = 'CLEAN_CART',
  DELETE_ITEM_TO_CART = 'DELETE_ITEM_TO_CART'
}

export interface CartItem {
  userId: number,
  id: number,
  title: string,
  price: number,
}

export interface CartState {
  cart: CartItem[],
  totalPrice: null | number,
}

export interface AddItemToCart {
  type: CartActiontypes.ADD_ITEM_TO_CART,
  payload: CartState,
}
export interface DecreseItemToCart {
  type: CartActiontypes.DECREASE_ITEM_TO_CART,
  payload: CartState,
}
export interface CleanCart {
  type: CartActiontypes.CLEAN_CART,
  payload: CartState,
}
export interface DeleteItemToCart {
  type: CartActiontypes.DELETE_ITEM_TO_CART,
  payload: CartState
}

export type CartAction = AddItemToCart | DecreseItemToCart |
  CleanCart | DeleteItemToCart