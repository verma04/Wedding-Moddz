import { CITY } from "../actions/types";



const initialState = {
    citis:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CITY:
      return {
        ...state,
    cities:  action.payload,
     
      };
   
    default:
      return state;
  }
}
