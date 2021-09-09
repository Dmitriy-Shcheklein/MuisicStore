import axios from "axios"
import { Dispatch } from "react"
import {
  AlbumAction, AlbumActionsTypes, Albums,
  FetchAlbumError,
  FetchAlbumLoading, FetchAlbumSuccess
} from "../../types/albumsTypes"

const dispatchLoading = (): FetchAlbumLoading => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_LOADING
  }
}

const dispatchSuccess = (data: Albums[]): FetchAlbumSuccess => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_SUCCESS,
    payload: data,
  }
}

const dispatchError = (errorTxt: string): FetchAlbumError => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_ERROR,
    payload: errorTxt,
  }
}

const fetchAlbums = (page = 1, limit = 4) => {

  const errorTxt = ' Что то пошло не так!'

  return async (dispatch: Dispatch<AlbumAction>) => {
    try {
      dispatch(dispatchLoading());
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums',
        {
          params: {
            _page: page,
            _limit: limit,
          }
        });
      dispatch(dispatchSuccess(response.data))
    } catch (error) {
      dispatch(dispatchError(errorTxt))
    }
  }
}

const setAlbumPage = (page: number): AlbumAction => {
  return {
    type: AlbumActionsTypes.SET_ALBUM_PAGE,
    payload: page,
  }
}

export {
  fetchAlbums,
  setAlbumPage
}