import axios from "axios";
import { authActions } from "../config/constants";

export const signUpAction = async ( dispatch, user ) => {
  dispatch( {
    type: authActions.SIGNUP_REQUEST,
  } );
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_LINK}/signup`,
      user
    );
    console.log( response );
    dispatch( {
      type: authActions.SIGNUP_SUCCESS,
      payload: {
        username: response.data.username,
      },
    } );
  } catch ( error ) {
    dispatch( {
      type: authActions.SIGNUP_FAILURE,
      payload: {
        error: error.response.data.message,
      },
    } );
  }
};