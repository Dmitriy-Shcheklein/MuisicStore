import axios from "axios"
import { Dispatch } from "react"
import {
  AlbumAction, AlbumActionsTypes, Albums,
  CartAction,
  CleanCart,
  FetchAlbumError,
  FetchAlbumLoading, FetchAlbumSuccess
} from "../../types/albumsTypes";

const filterProduct = (data: Albums[], productName: string) => {
  return data.filter(item => {
    return (item.title.toLowerCase().includes(productName.toLowerCase()) ||
      item.userId.toString().toLowerCase().includes(productName.toLowerCase())
    )
  })
}

const dispatchLoading = (): FetchAlbumLoading => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_LOADING
  }
}

const dispatchSuccess = (data: Albums[], productName: string): FetchAlbumSuccess => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_SUCCESS,
    payload: filterProduct(data, productName),
  }
}

const dispatchError = (errorTxt: string): FetchAlbumError => {
  return {
    type: AlbumActionsTypes.FETCH_ALBUM_ERROR,
    payload: errorTxt,
  }
}

const fetchAlbums = (page = 1, limit = 4, productName: string) => {

  const errorTxt = ' Что то пошло не так!'

  return async (dispatch: Dispatch<AlbumAction>) => {
    try {
      dispatch(dispatchLoading());
      setTimeout(async () => {
        let response;
        if (productName.length) {
          response = await axios.get('https://jsonplaceholder.typicode.com/albums')
        } else {
          response = await axios.get('https://jsonplaceholder.typicode.com/albums',
            {
              params: {
                _page: page,
                _limit: limit,
              }
            });
        }
        dispatch(dispatchSuccess(response.data, productName))
      }, 3000)
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

const addItemToCart = (productId: number): CartAction => {
  return {
    type: AlbumActionsTypes.ADD_ITEM_TO_CART,
    payload: productId,
  }
}

const decreaseItemToCart = (productId: number): CartAction => {
  return {
    type: AlbumActionsTypes.DECREASE_ITEM_TO_CART,
    payload: productId
  }
}

const deleteItemToCart = (productId: number): CartAction => {
  return {
    type: AlbumActionsTypes.DELETE_ITEM_TO_CART,
    payload: productId
  }
}

const cleanCart = (): CleanCart => {
  return {
    type: AlbumActionsTypes.CLEAN_CART,
  }
}

export {
  fetchAlbums,
  setAlbumPage,
  addItemToCart,
  decreaseItemToCart,
  deleteItemToCart,
  cleanCart,
}