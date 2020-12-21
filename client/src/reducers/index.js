import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import AdminReducer from './AdminReducer'
import UserReducer from './UserReducer'
import vendorReducer from './vendorReducer'
import alert from "./alertReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  admin: AdminReducer,
  user:UserReducer,
  vendors:vendorReducer,
  alert,
});
