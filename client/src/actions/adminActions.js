import axios from "axios";


import { GET_ERRORS, CITY , CATEGORY } from "./types";

// Register User
export const registerCity = (userData) => dispatch => {
  axios
    .post("/api/admin/postCity", userData)
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
  
  export const getCatgory = () => dispatch => {
    axios
      .get("/api/admin/getCatgory")
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
    
  };

  export const postCategory = (userData) => dispatch => {
    axios
      .post("/api/admin/postCategory", userData)
      .then(res => 
          dispatch({
              type: CATEGORY,
              payload: res.data
            }))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  
