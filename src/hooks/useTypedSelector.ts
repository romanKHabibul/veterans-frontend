import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector