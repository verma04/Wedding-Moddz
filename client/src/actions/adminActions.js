import axios from "axios";


import { GET_ERRORS, CITY } from "./types";

// Register User
export const registerCity = (userData) => dispatch => {
  axios
    .post("/api/users/postCity", userData)
    .then(res => 
        dispatch({
            type: CITY,
            payload: res.data
          }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const  getCity = () => dispatch => {
    axios
      .get("/api/admin/getCity")
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
  

  
