import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionsCreators from '../store/Actions/ActionsFetch';
import * as authActionsCreatos from '../store/Actions/ActionsAuth';
import * as findAndFilterCreators from '../store/Actions/ActionsFindAndFilter'

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
}

export const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authActionsCreatos, dispatch)
}

export const useFindAndFilterActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(findAndFilterCreators, dispatch)
}