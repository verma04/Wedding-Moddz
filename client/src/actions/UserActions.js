import axios from "axios";


import {  CATEGORY  , CITY , GET_ERRORS} from "./types";

// Register User


  export const getCatgory = () => dispatch => {
    axios
      .get("/api/users/getCategoryHome")
      .then(res => 
        dispatch({
            type: CATEGORY,
            payload: res.data
          })
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
    console.log()
  };

  export const  getCity = () => dispatch => {
    axios
      .get("/api/users/getCity")
      .then(res => 
        dispatch({
            type: CITY,
            payload: res.data
          })
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
    
  };

