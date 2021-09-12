import AlbumItems from "../../../components/AlbumsList/AlbumItems"
import {
  UserState, FetchAlbumSuccess,
  FetchAlbumError, SetAlbumPage, AddItemToCart, CartItems,
  Albums
} from "../../../types/albumsTypes"

const fetchAlbumLoading = (state: UserState): UserState => {
  return {
    ...state,
    albums: [],
    loading: true,
    error: null,
  }
}

const fetchAlbumSuccess = (state: UserState, action: FetchAlbumSuccess): UserState => {
  return {
    ...state,
    albums: action.payload,
    loading: false,
    error: null,
  }
}

const fetchAlbumError = (state: UserState, action: FetchAlbumError): UserState => {
  return {
    ...state,
    albums: [],
    loading: false,
    error: action.payload,
  }
}

const setAlbumPage = (state: UserState, action: SetAlbumPage): UserState => {
  return {
    ...state,
    page: action.payload,
  }
}

const updateCartItems = (cartList: CartItems[], item: CartItems, itemIdx: number) => {

  if (itemIdx === -1) {
    return [
      ...cartList,
      item,
    ]
  } else {
    return [
      ...cartList.slice(0, itemIdx),
      item,
      ...cartList.slice(itemIdx + 1)
    ]
  }
}

const updateItem = (album: Albums, item: CartItems) => {

  if (item) {
    return {
      ...item,
      count: item.count + 1,
      totalPrice: item.totalPrice + item.price
    }
  } else {
    return {
      userId: album.userId,
      id: album.id,
      title: album.title,
      price: 10,
      count: 1,
      totalPrice: album.price
    }
  }
}

const updateCart = (state: UserState, action: AddItemToCart): UserState => {
  const productId = action.payload;
  const album = state.albums.find(album => album.id === productId);
  if (!album) return {
    ...state,
    cartList: [],
  }
  const newTotalPrice = (state: UserState) => state.cartList
    .reduce((prev, current) => prev + current.price, 0);
  const itemIdx = state.cartList.findIndex(album => album.id === productId);
  const item = state.cartList[itemIdx];

  let newItem: CartItems = updateItem(album, item);

  return {
    ...state,
    cartList: updateCartItems(state.cartList, newItem, itemIdx),
    totalPrice: newTotalPrice(state),
  }
}


export {
  fetchAlbumLoading,
  fetchAlbumSuccess,
  fetchAlbumError,
  setAlbumPage,
  updateCart,
}