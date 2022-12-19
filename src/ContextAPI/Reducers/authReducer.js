import { authActions } from "../config/constants";

export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        alert: {}
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        isLoading: false,
        navigation: '/',
        alert: {
          message:'You are logged in successfully',
          type: 'success'
        }
      };
    case authActions.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        alert: {
          message:'Please check your username and password',
          type: 'error'
        }
      };
    case authActions.LOGOUT:
      return {
        ...state,
        username: "",
        isLoggedIn: false,
        alert: {
          message:'You are logged out successfully',
          type: 'success'
        }
      };
    case authActions.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        alert: {}
      };
    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        isLoading: false,
        navigation: '/',
        alert: {
          message:'You are signed up successfully',
          type: 'success'
        }
      };
    case authActions.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        alert: {
          message:'Please try again later',
          type: 'error'
        }
      };
    default:
      throw new Error( `Unhandled action type: ${action.type}` );
  }
};