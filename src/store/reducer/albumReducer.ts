import {
  UserState, AlbumAction,
  AlbumActionsTypes,
  CartAction,
  CleanCart
} from "../../types/albumsTypes";
import {
  cleanCart,
  fetchAlbumError, fetchAlbumLoading,
  fetchAlbumSuccess, setAlbumPage, updateCart,
} from "./auxillaryFunc/AlbumReducerFunc";

const initialState: UserState = {
  albums: [],
  loading: false,
  error: null,
  page: 1,
  limit: 4,
  cartList: [],
  totalPrice: null,
}

const albumReducer = (state = initialState, action: AlbumAction | CartAction | CleanCart): UserState => {

  switch (action.type) {
    case AlbumActionsTypes.FETCH_ALBUM_LOADING:
      return fetchAlbumLoading(state);
    case AlbumActionsTypes.FETCH_ALBUM_SUCCESS:
      return fetchAlbumSuccess(state, action);
    case AlbumActionsTypes.FETCH_ALBUM_ERROR:
      return fetchAlbumError(state, action);
    case AlbumActionsTypes.SET_ALBUM_PAGE:
      return setAlbumPage(state, action);
    case AlbumActionsTypes.ADD_ITEM_TO_CART:
      return updateCart(state, action, +1);
    case AlbumActionsTypes.DECREASE_ITEM_TO_CART:
      return updateCart(state, action, -1)
    case AlbumActionsTypes.DELETE_ITEM_TO_CART:
      const items = state.cartList.find(item => item.id === action.payload);
      if (!items) return state;
      return updateCart(state, action, -items.count);
    case AlbumActionsTypes.CLEAN_CART:
      return cleanCart(state)
    default:
      return state;
  }
}

export {
  albumReducer,
  initialState,
}