import API, {setToken, deleteToken} from '../../api';
import {store} from '../index';
import * as types from './types';
import * as errorAction from '../error/action';
import moment from 'moment';


const getJunkCollectionAction = (junkCategoryPrices) => ({
  type: types.GET_JUNK_COLLECTION,
  payload: junkCategoryPrices
});

const setLoadingAction = (isLoading) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

const uploadPhotoAction = (photo) => ({
  type: types.UPLOAD_PHOTO,
  payload: photo,
});

const choseAddressAction = (address) => ({
  type: types.CHOSE_ADDRESS,
  payload: address,
});

const setDefaultOrderAction = () => ({
  type: types.SET_DEFAULT_ORDER,
});

const removePhotoAction = (index) => ({
  type: types.REMOVE_PHOTO,
  payload: index,
});

const cancelOrderAction = () => ({
  type: types.CANCEL_ORDER,
});

const createOrderCollectionAction = (orderData) => ({
  type: types.CREATE_ORDER_COLLECTION,
  payload: orderData,
});

const getJunkCollectionOrdersListAction = (list) => ({
  type: types.GET_JUNKS_COLLECTION_ORDERS_LIST,
  payload: list,
});

const showSuccessCreateOrderPopupAction = (isShow) => ({
  type: types.SHOW_SUCCESS_ORDER_CREATE_POPUP,
  payload: isShow,
});

const sendCollectorReviewAction = () => ({
  type: types.SEND_COLLECTOR_REVIEW,
});

export const sendCollectorReview = (orderId, reviewData) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.patch(`members/v1/junks?id=${orderId}`, reviewData).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(sendCollectorReviewAction());
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return;
  })
};


export const showSuccessCreateOrder = (isShow) => dispatch => {
  dispatch(showSuccessCreateOrderPopupAction(isShow));
};

export const choseAddress = (address) => dispatch => {
  dispatch(choseAddressAction(address));
};

export const removePhoto = (index) => dispatch => {
  dispatch(removePhotoAction(index));
};

export const cancelOrder = (orderId) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.patch(`members/v1/junks/cancel?id=${orderId}`).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(cancelOrderAction());
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return;
  })
};

export const uploadPhoto = (photo) => dispatch => {
  dispatch(setLoadingAction(true));
  const formData = new FormData();
  formData.append('file', photo);
  return API.post('/members/v1/upload-file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(uploadPhotoAction(response?.data?.data));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};


export const getJunkCollectionOrdersList = (status) => dispatch => {
  dispatch(setLoadingAction(true));
  return API.get(`members/v1/junks?statuses=${status}&sortAttributes=createdDate&sortDirection=DESC`).then(response => {
    dispatch(setLoadingAction(false));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
    return;
  })
};

export const refreshToken = () => dispatch => {
  deleteToken();
};

export const createOrderCollection = (orderData) => dispatch => {
  orderData.collectionDate = moment(orderData.collectionDate).format('YYYY-MM-DD');
  dispatch(setLoadingAction(true));
  return API.post('/members/v1/junks', orderData).then(response => {
    dispatch(setLoadingAction(false));
    dispatch(setDefaultOrderAction())
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};

export const getJunkCollection = () => dispatch => {
  dispatch(setLoadingAction(true));
  return API.get('/v1/junk-categories-prices').then(response => {
    dispatch(setLoadingAction(false));
    dispatch(getJunkCollectionAction(response?.data?.data?.junkCategoryPrices));
    return response.data;
  }).catch(error => {
    dispatch(setLoadingAction(false));
    dispatch(errorAction.runError('error', error));
  })
};
