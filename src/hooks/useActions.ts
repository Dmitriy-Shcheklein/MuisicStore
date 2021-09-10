import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionsCreators from '../store/Actions/ActionsFetch';
import * as cartActionsCreators from '../store/Actions/ActionsCart'


export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
}

export const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cartActionsCreators, dispatch)
}