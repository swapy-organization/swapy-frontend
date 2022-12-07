export const initialState = {
  user: null,
  errorMessage: null,
  loading: false,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        errorMessage: null,
        loading: false,
      };
    case "LOGIN_FAILED":
      return {
        user: null,
        errorMessage: action.payload,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
