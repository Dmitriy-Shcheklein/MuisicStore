import { AuthAction, AuthActionsTypes } from "../../types/authTypes";


const userLogin = (userName: string): AuthAction => {
  return ({
    type: AuthActionsTypes.USER_LOGIN,
    payload: userName,
  })
}

const userLogout = (): AuthAction => {
  return ({
    type: AuthActionsTypes.USER_LOGOUT,
  })
}

export {
  userLogin,
  userLogout,
}