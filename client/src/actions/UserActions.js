import axios from "axios";


import {  CATEGORY  , CITY ,VENUE, GET_ERRORS, CURRENT_CITY , VENDOR_DET , VENDOR_LIST} from "./types";

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

  export const  city = (data) => dispatch => {
    axios
      .post("/api/users/currentCity" , data)
      .then(res =>
        dispatch({
            type: CURRENT_CITY,
            payload: res.data
          })
        )
      .catch(err =>
       console.log(err)
      );

  };


  export const  topsearch = (data) => dispatch => {
    axios
      .post("/api/users/topsearch" , data)
      .then(res =>
        dispatch({
            type: VENUE,
            payload: res.data
          })
        )
      .catch(err =>
       console.log(err)
      );

  };
  export const  vendorList = (data , se, se2) => dispatch => {

    console.log(se , se2)
    axios
      .post("/api/users/vendorList" , data)
      .then(res =>

      


        dispatch({
          type: VENDOR_LIST,
          payload: res.data
        })
        )
      .catch(err =>
       console.log(err)
      );

  };

  export const  vendorDetials = (data , se, se2) => dispatch => {

    console.log(se , se2)
    axios
      .post("/api/users/vendorDetials" , data)
      .then(res =>
        dispatch({
          type: VENDOR_DET,
          payload: res.data
        })
        )
      .catch(err =>
       console.log(err)
      );

  };

  