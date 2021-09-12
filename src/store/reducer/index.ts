import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";

const rootReducer = combineReducers({
  albums: albumReducer
})

type RootState = ReturnType<typeof rootReducer>

export {
  rootReducer,
}

export type {
  RootState,
}