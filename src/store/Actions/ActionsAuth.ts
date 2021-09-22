import { AuthAction, AuthActionsTypes } from "../../types/authTypes";


const userLogin = (): AuthAction => {
  return ({
    type: AuthActionsTypes.USER_LOGIN,
    payload: true,
  })
}

const userLogout = (): AuthAction => {
  return ({
    type: AuthActionsTypes.USER_LOGOUT,
    payload: false,
  })
}

export {
  userLogin,
  userLogout,
}