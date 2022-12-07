import axios from "axios";

export const login = (dispatch, payload) => {
  dispatch({ type: "LOGIN_START" });

  axios
    .post(
      `${process.env.REACT_APP_HEROKU_URL}/signin`,
      {},
      {
        headers: {
          Authorization: `Basic ${payload}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "LOGIN_FAILED", payload: err });
    });
};
