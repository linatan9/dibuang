import API, {setToken, deleteToken} from '../../api';
import {store} from '../index';
import * as types from './types';
import * as errorAction from '../error/action';
import { RESPONSE_CODES } from '../../constants/data';

const setLoadingAction = (isLoading) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

const getBannersAction = (banners) => ({
  type: types.GET_BANNERS,
  payload: banners,
});

export const getWareHousesAction = (warehouses) => ({
  type: types.GET_WAREHOUSES,
  payload: warehouses,
});

export const withdrawAction = () => ({
  type: types.WITHDRAW,
});

export const getWithdrawsAction = () => ({
  type: types.GET_WITHDRAWS,
});

export const setCheckedItemStatusAction = (status) => ({
  type: types.SET_CHECKED_ITEM_STATUS,
  payload: status,
});

export const setCheckedItemStatus = (status) => dispatch => (
  dispatch(setCheckedItemStatusAction(status))
);

export const getWithdraws = () => dispatch => {
  dispatch(setLoadingAction(true));
  return API.get(`members/v1/disbursements?sortAttributes=createdDate&sortDirection=DESC`).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(getWithdrawsAction());
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const withdraw = (data) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.post(`members/v1/disbursements`, data).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(withdrawAction());
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const getBanners = () => dispatch => {
  dispatch(setLoadingAction(true));
  return API.get(`members/v1/banner-images`).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(getBannersAction(response.data.data));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const getWareHouses = ({longitude, latitude}) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.get(`members/v1/warehouses?sortLongLat=${longitude}&sortLongLat=${latitude}`).then(response => {
    dispatch(setLoadingAction(false));
    if (response?.data?.code ===  RESPONSE_CODES.SUCCESS) {
      dispatch(getWareHousesAction(response.data.data));
    }
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};
