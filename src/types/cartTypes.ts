export enum CartActiontypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DECREASE_ITEM_TO_CART = 'DECREASe_ITEM_TO_CART',
  CLEAN_CART = 'CLEAN_CART',
  DELETE_ITEM_TO_CART = 'DELETE_ITEM_TO_CART'
}

export interface CartItems {
  userId: number,
  id: number,
  title: string,
  price: number,
  count?: null | number
}

export interface CartState {
  cartList: CartItems[],
  totalPrice: null | number,
}

export interface AddItemToCart {
  type: CartActiontypes.ADD_ITEM_TO_CART,
  payload: number,
}
export interface DecreseItemToCart {
  type: CartActiontypes.DECREASE_ITEM_TO_CART,
  payload: number,
}
export interface CleanCart {
  type: CartActiontypes.CLEAN_CART,
}
export interface DeleteItemToCart {
  type: CartActiontypes.DELETE_ITEM_TO_CART,
  payload: number,
}

export type CartAction = AddItemToCart | DecreseItemToCart |
  CleanCart | DeleteItemToCart