import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import { GET_ERRORS, CITY , REQUEST ,CITYPROFILE, CATEGORY } from "./types";

// Register User
export const addCity = (userData , toggle) => async  dispatch => {

try {
  const res = await  axios.post("/api/admin/addCity", userData);
    
   await toggle()
   await  toast.success("City Added");

  
   
        dispatch({
            type: CITY,
            payload: res.data
          })
}
    catch(err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
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

  export const  deleteCity = (id, history) => async dispatch => {
   try {
         const res = await  axios.get(`/api/admin/deleteCity/${id}`);

         console.log(res.data)

        await history.push('/admin/cities')

         await toast.success('City Deleted')

         dispatch({
          type: CITY,
          payload: res.data
        })

   }
   catch(err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
   }
  };

  export const  getCityProfile = (userdata) => dispatch => {
    console.log(userdata)
    axios
      .get(`/api/admin/getCityProfile/${userdata}`)
      .then(res => 
        dispatch({
            type: CITYPROFILE,
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

  export const addCategory = (userData , toggle) =>  async dispatch => {

    try {
      const res = await  axios.post("/api/admin/addCategory", userData)
      await toast.success('Categoty Added')
      await toggle()

      dispatch({
        type: CATEGORY,
        payload: res.data
      })

    }
catch(err) {
 dispatch({
   type: GET_ERRORS,
   payload: err.response.data
 })
}
};



export const getvendor = ( ) =>  async dispatch => {

  try {
    const res = await  axios.get("/api/admin/getvendor")

   

    dispatch({
      type: REQUEST,
      payload: res.data
    })

  }
catch(err) {
dispatch({
 type: GET_ERRORS,
 payload: err.response.data
})
}
};





