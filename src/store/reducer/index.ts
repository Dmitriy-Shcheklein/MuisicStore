import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  albums: albumReducer,
  auth: authReducer,
})

type RootState = ReturnType<typeof rootReducer>

export {
  rootReducer,
}

export type {
  RootState,
}