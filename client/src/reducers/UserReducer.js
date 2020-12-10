import { CATEGORY, CITY} from "../actions/types";



const initialState = {

    category:null,
    city: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    
      case CATEGORY:
        return {
          ...state,
      category:  action.payload,
       
        };
        case CITY:
            return {
              ...state,
          city:  action.payload,
           
            };
          
      
   
    default:
      return state;
  }
}
