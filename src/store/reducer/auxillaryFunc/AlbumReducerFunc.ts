import {
  UserState, FetchAlbumSuccess,
  FetchAlbumError, SetAlbumPage
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

export {
  fetchAlbumLoading,
  fetchAlbumSuccess,
  fetchAlbumError,
  setAlbumPage,
}