
export enum AlbumActionsTypes {
  FETCH_ALBUM_LOADING = 'FETCH_ALBUM_LOADING',
  FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS',
  FETCH_ALBUM_ERROR = 'FETCH_ALBUM_ERROR',
  SET_ALBUM_PAGE = 'SET_ALBUM_PAGE',
}

export interface CartItems {
  userId: number,
  id: number,
  title: string,
  price: number,
  count?: null | number
}

export interface Albums {
  userId: number,
  id: number,
  title: string,
  price: number,
}

export interface UserState {
  albums: Albums[],
  loading: boolean,
  error: null | string,
  page: number,
  limit: number,
  cartList: CartItems[],
  totalPrice: null | number,
}

export interface FetchAlbumLoading {
  type: AlbumActionsTypes.FETCH_ALBUM_LOADING
}
export interface FetchAlbumSuccess {
  type: AlbumActionsTypes.FETCH_ALBUM_SUCCESS,
  payload: Albums[],
}
export interface FetchAlbumError {
  type: AlbumActionsTypes.FETCH_ALBUM_ERROR,
  payload: string
}
export interface SetAlbumPage {
  type: AlbumActionsTypes.SET_ALBUM_PAGE,
  payload: number,
}

export type AlbumAction = FetchAlbumLoading | FetchAlbumSuccess |
  FetchAlbumError | SetAlbumPage;