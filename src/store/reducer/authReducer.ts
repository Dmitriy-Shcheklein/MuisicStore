import { AuthAction, AuthActionsTypes, AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  login: false,
  userName: null,
}

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {

  switch (action.type) {
    case AuthActionsTypes.USER_LOGIN:
      localStorage.setItem('auth', 'true' );
      return {
        login: true,
        userName: action.payload,
      };
    case AuthActionsTypes.USER_LOGOUT:
      return {
        login: false,
        userName: null,
      }
    default:
      return state
  }
}

export {
  authReducer
};