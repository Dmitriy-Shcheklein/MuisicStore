import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionsCreators from '../store/Actions/ActionsFetch';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch);
}