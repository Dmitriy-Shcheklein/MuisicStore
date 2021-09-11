import {
  UserState, AlbumAction,
  AlbumActionsTypes
} from "../../types/albumsTypes";
import {
  fetchAlbumError, fetchAlbumLoading,
  fetchAlbumSuccess, setAlbumPage,
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

const albumReducer = (state = initialState, action: AlbumAction): UserState => {

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
    default:
      return state;
  }
}

export {
  albumReducer,
  initialState,
}