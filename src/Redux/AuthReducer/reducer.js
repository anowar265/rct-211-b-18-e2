import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        token: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
