import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducer";

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypeSelector;