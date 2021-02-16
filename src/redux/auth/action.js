import API, { setToken, deleteToken, setDefaultHeadersInit, setUserHeaderId } from '../../api';
import {store} from '../index';
import * as types from './types';
import * as errorAction from "../error/action";

// ACTIONS
const setDefaultHeadersAction = () => ({
  type: types.SET_DEFAULT_HEADERS,
});

const sendSmsVerificationAction = (phoneNumber) => ({
  type: types.SEND_SMS_VERIFICATION,
  payload: phoneNumber
});

const verifySmsAction = (authToken) => ({
  type: types.VERIFY_SMS,
  payload: authToken
});

const signUpAction = (data) => ({
  type: types.SET_REGISTRATION_DATA,
  payload: data
});

const setLoadingAction = (isLoading) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

const setUserDataAction = (code) => ({
  type: types.SET_USER_DATA,
  payload: code,
});

const editUserDataAction = (userData) => ({
  type: types.EDIT_USER_DATA,
  payload: userData,
});

const logOutAction = () => ({
  type: types.LOGOUT,
});


// METHODS

export const logout = () => dispatch => {
  dispatch(logOutAction());
};

export const getUserData = () => dispatch => {
  return API.get('/members/v1/me').then(response => {
    dispatch(editUserDataAction(response.data.data));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const patchUserData = (userData) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.patch('/members/v1/me', userData).then(response => {
    dispatch(editUserDataAction(response.data.data));
    dispatch(setLoadingAction(false));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return;
  })
};

export const setDefaultHeaders = () => dispatch => {
  setDefaultHeadersInit();
  dispatch(setDefaultHeadersAction())
};

export const sendSmsVerification = (phoneNumber) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.post('/v1/send-sms-verification', {phoneNumber}).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(sendSmsVerificationAction(phoneNumber));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const verifySms = (data) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.post('/members/v1/sms-login', data).then(response => {
    dispatch(setLoadingAction(false));
    setToken(response.data.data.authToken);
    setUserHeaderId(response.data.data.id);
    dispatch(setUserDataAction(response.data.data));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return(error);
  })
};

export const setUserData = (code) => dispatch =>(
  dispatch(setUserDataAction(code))
);

export const signUp = (data) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.post('/members/v1/sms-registration', data).then(response => {
    setToken(response?.data?.data?.authToken);
    setUserHeaderId(response.data.data.id);
    dispatch(setLoadingAction(false));
    dispatch(setUserDataAction(response.data.data));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return(error);
  })
};



export const refreshToken = () => dispatch => {
  deleteToken();
};

export const runError = (
  errorType,
  errorMessage,
  func = () => {},
) => dispatch => {
  if (errorMessage.message === 'Network Error') {
    func();
  } else if (errorMessage.response.status === 401) {
    dispatch(refreshToken());
  } else {
    console.log(errorMessage.response, 'errorMessage')
    const error = errorMessage.response?.data;
    dispatch(setError(errorType, error));
  }
};
