import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import AuthService from "../services/auth.service";
export const register = (email, password, mobileno,username,country,otp,type) => (dispatch) => {
  return AuthService.register(email, password, mobileno,username,country,otp,type).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response.data },
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.msg,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.msg) ||
        error.msg ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      console.log(data)  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.msg) ||
        error.msg ||
        error.toString();
        console.log(message)
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};