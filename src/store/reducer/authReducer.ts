import { AuthAction, AuthActionsTypes, AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  login: false,
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {

  switch (action.type) {
    case AuthActionsTypes.USER_LOGIN:
      return {
        login: true,
      };
    case AuthActionsTypes.USER_LOGOUT:
      return {
        login: false
      }
    default:
      return state
  }
}

export {
  authReducer
};