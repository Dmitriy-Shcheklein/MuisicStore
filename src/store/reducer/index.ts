import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";
import { authReducer } from "./authReducer";
import { findAndFilterReducer } from "./findAndFilterReducer";

const rootReducer = combineReducers({
  albums: albumReducer,
  auth: authReducer,
  findAndFilter: findAndFilterReducer
})

type RootState = ReturnType<typeof rootReducer>

export {
  rootReducer,
}

export type {
  RootState,
}