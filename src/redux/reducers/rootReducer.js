import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import NewReducer from "./NewReducer";
import UserReducer from "./UserReducer";

// root Reducer là một cái reducer lớn quản lý các reducer con
export const rootReducer = combineReducers({
  CartReducer,
  ProductReducer,
  UserReducer,
  NewReducer,
});
