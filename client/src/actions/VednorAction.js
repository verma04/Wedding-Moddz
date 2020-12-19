import axios from "axios";

import { GET_ERRORS , OTP , TYPE} from "./types";
export const verifyOtp = (userData , history) => dispatch => {
    axios
      .post("/api/vendor/verifyOtp", userData)
      .then(res => 
         
           history.push('/vendor/dashboard')
        )
      .catch(err =>
        console.log(err)
      );
  };

  export const getVerfication = () => dispatch => {
    axios
      .get("/api/vendor/getVerfication")
      .then(res => 
         
        dispatch({
            type: OTP,
            payload:  res.data
          })
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


  export const getVenueVendor = () => dispatch => {
    axios
      .get("/api/vendor/getVenueVendor" )
      .then(res => 
         
        dispatch({
            type: TYPE,
            payload:  res.data
          })
        )
      .catch(err =>
        console.log(err)
      );
  };
 

  export const VenueVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/VenueVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const caterersVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/caterersVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const panditsVendor  = (data , history) => dispatch => {
    axios
      .post("/api/vendor/panditsVendor " , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const decoratorsVendor  = (data , history) => dispatch => {
    axios
      .post("/api/vendor/decoratorsVendor " , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const mehendiVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/mehendiVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const jewelleryVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/jewelleryVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };


  export const musicVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/musicVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const photographersVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/photographersVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const wediingInvVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/wediingInvVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };

  export const bridalVendor = (data , history) => dispatch => {
    axios
      .post("/api/vendor/bridalVendor" , data)
      .then(res => 
           history.push('/vendor/dashboard')
        )
      .catch(err =>
       console.log(err)
      );
  };