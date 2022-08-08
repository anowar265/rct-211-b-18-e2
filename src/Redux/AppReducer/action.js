//Write the ActionCreator functions here
import axios from "axios";

import {
  GET_WATCHES_DATA_FAILURE,
  GET_WATCHES_DATA_REQUEST,
  GET_WATCHES_DATA_SUCCESS,
} from "./actionType";

export const getWatchesDataRequest = () => ({
  type: GET_WATCHES_DATA_REQUEST,
});

export const getWatchesDataSuccess = (payload) => ({
  type: GET_WATCHES_DATA_SUCCESS,
  payload,
});

export const getWatchesDataFailure = () => ({
  type: GET_WATCHES_DATA_FAILURE,
});

export const getWatchesData = (params) => (dispatch) => {
  dispatch(getWatchesDataRequest());
  axios
    .get("/watches", params)
    .then((r) => dispatch(getWatchesDataSuccess(r.data)))
    .catch((err) => dispatch(getWatchesDataFailure()));
};
