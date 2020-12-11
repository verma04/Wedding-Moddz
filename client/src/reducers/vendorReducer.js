import {OTP} from "../actions/types";



const initialState = {
 otp:null
};

export default function(state = initialState, action) {
  switch (action.type) {
 
      
    case OTP:
      return {
        ...state,
        loading: true,
        otp:action.payload
      };
    default:
      return state;
  }
}
