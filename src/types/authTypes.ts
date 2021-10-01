export enum AuthActionsTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}
export interface AuthState {
  login: boolean;
  userName: string | null,
}

export interface UserLogin {
  type: AuthActionsTypes.USER_LOGIN,
  payload: string,
}
export interface UserLogout {
  type: AuthActionsTypes.USER_LOGOUT,
}

export type AuthAction = UserLogin | UserLogout;