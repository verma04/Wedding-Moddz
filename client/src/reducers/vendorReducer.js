import {IMAGE, VEN_LIST} from "../actions/types";




const initialState = {
 list:'',

 
};

export default function(state = initialState, action) {
  switch (action.type) {
 
      
    case VEN_LIST:
      return {
        ...state,
        loading: true,
        list:action.payload
      };

      case IMAGE:
        return {
          ...state,
      
          image:action.payload
        };
    
    default:
      return state;
  }
}
