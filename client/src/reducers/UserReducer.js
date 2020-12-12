import { CATEGORY, CITY , CURRENT_CITY} from "../actions/types";



const initialState = {

    category:null,
    city: null,
    current:null,
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
            case CURRENT_CITY:
              return {
                ...state,
            current:  action.payload,
             
              };
            
          
      
   
    default:
      return state;
  }
}
