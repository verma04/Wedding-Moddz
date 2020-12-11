import axios from "axios";

import { GET_ERRORS , OTP} from "./types";
export const verifyOtp = (userData , history) => dispatch => {
    axios
      .post("/api/vendor/verifyOtp", userData)
      .then(res => 
         
           history.push('/vendor/dashboard')
        )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
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