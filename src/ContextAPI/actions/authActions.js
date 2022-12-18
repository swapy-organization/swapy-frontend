import axios from "axios";
import { authActions } from "../config/constants";
import base64 from "base-64";

export const signUpAction = async ( dispatch, user ) => {
  dispatch( {
    type: authActions.SIGNUP_REQUEST,
  } );
  try {
    const response = await axios.post( `${process.env.REACT_APP_BACKEND_LINK}/signup`,
      user,
    );
    const { token } = response.data;
    const { id } = response.data.user;
    const userName = response.data.user.username;
    localStorage.setItem( "token", token );
    localStorage.setItem( "id", id );
    localStorage.setItem( "username", userName );
    localStorage.setItem( "isAuth", true );
    console.log('response', response.data.user.avatar)
    dispatch( {
      type: authActions.SIGNUP_SUCCESS,
      payload: {
        username: response.data.user.username,
      },
    } );
  } catch ( error ) {
    localStorage.setItem( "isAuth", false );
    dispatch( {
      type: authActions.SIGNUP_FAILURE,
      payload: {
        error: error,
      },
    } );
  }
};

export const loginAction = async ( dispatch, user ) => {
  dispatch( {
    type: authActions.LOGIN_REQUEST,
  } );
  const { username, password } = user;
  const encoded = base64.encode( `${username}:${password}` );
  const basicAuth = `Basic ${encoded}`;
  try {
    const response = await axios.post( `${process.env.REACT_APP_BACKEND_LINK}/signin`,
      {},
      {
        headers: {
          Authorization: basicAuth,
        },
      },
    );
    const { token } = response.data;
    const { id } = response.data.user;
    const userName = response.data.user.username;
    localStorage.setItem( "token", token );
    localStorage.setItem( "id", id );
    localStorage.setItem( "username", userName );
    localStorage.setItem("isAuth", true)
    dispatch( {
      type: authActions.LOGIN_SUCCESS,
      payload: {
        username: response.data.user.username,
      },
    } );
  } catch ( error ) {
    localStorage.setItem("isAuth", false)
    dispatch( {
      type: authActions.LOGIN_FAILURE,
      payload: {
        error: error,
      },
    } );
  }
};