import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import AdminReducer from './AdminReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  admin: AdminReducer
});
