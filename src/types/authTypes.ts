export enum AuthActionsTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}
export interface AuthState {
  login: boolean;
}

export interface UserLogin {
  type: AuthActionsTypes.USER_LOGIN,
  payload: boolean,
}
export interface UserLogout {
  type: AuthActionsTypes.USER_LOGOUT,
  payload: boolean,
}


export type AuthAction = UserLogin | UserLogout;