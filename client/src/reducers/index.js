import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import AdminReducer from './AdminReducer'
import UserReducer from './UserReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  admin: AdminReducer,
  user:UserReducer
});
