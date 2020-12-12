import { CATEGORY, CITY , CURRENT_CITY , VENUE} from "../actions/types";



const initialState = {

    category:null,
    city: null,
    current:null,
    venue:null
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
              case VENUE:
                return {
                  ...state,
              venue:  action.payload,
               
                };
            
          
      
   
    default:
      return state;
  }
}
