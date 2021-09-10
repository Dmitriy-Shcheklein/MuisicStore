import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { cartReducer } from "./CartReducer";


const rootReducer = combineReducers({
  albums: albumReducer
  // cartList: cartReducer,
})

type RootState = ReturnType<typeof rootReducer>

export {
  rootReducer,
}

export type {
  RootState,
}