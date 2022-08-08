//Write the ActionCreator functions here

import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const getLoginToken = (params) => (dispatch) => {
  console.log(params);
  dispatch(loginRequest());
  axios
    .post("https://reqres.in/api/login", params)
    .then((r) => dispatch(loginSuccess(r.data)))
    .catch((err) => dispatch(loginFailure()));
};
