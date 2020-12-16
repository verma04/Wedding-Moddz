import {OTP, TYPE} from "../actions/types";




const initialState = {
 otp:null,
 type:null
};

export default function(state = initialState, action) {
  switch (action.type) {
 
      
    case OTP:
      return {
        ...state,
        loading: true,
        otp:action.payload
      };
      case TYPE:
        return {
          ...state,
          loading: true,
          type:action.payload
        };
    default:
      return state;
  }
}
