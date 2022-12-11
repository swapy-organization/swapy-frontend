import { authActions } from "../config/constants";

export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case authActions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        isLoading: false,
      };
    case authActions.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case authActions.LOGOUT:
      return {
        ...state,
        username: "",
        isLoggedIn: false,
      };
    case authActions.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case authActions.SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
        isLoading: false,
      };
    case authActions.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      throw new Error( `Unhandled action type: ${action.type}` );
  }
};
