import API, {setToken, deleteToken} from '../../api';
import {store} from '../index';
import * as types from './types';

export const setError = (errorType, errorMessage) => ({
  type: types.SET_ERROR,
  errorType,
  errorMessage,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});

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
  } else if (errorMessage.status === 401) {
    dispatch(refreshToken());
  } else {
    console.log(errorMessage.response, 'errorMessage')
    const error = errorMessage.response?.data;
    dispatch(setError(errorType, error));
  }
};
