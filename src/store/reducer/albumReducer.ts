import {
  UserState, AlbumAction,
  AlbumActionsTypes
} from "../../types/albumsTypes";
import {
  fetchAlbumError, fetchAlbumLoading,
  fetchAlbumSuccess, setAlbumPage
} from "./auxillaryFunc/AlbumReducerFunc";

const initialState: UserState = {
  albums: [],
  loading: false,
  error: null,
  page: 1,
  limit: 4,
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
      return setAlbumPage(state, action)
    default:
      return state;
  }
}

export {
  albumReducer,
  initialState,
}