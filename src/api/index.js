import axios from 'axios';
import {data} from '../constants';
import { Platform } from 'react-native'


const api = axios.create({
  baseURL: data.BASE_URL,
});

export const setDefaultHeadersInit = () => {
  api.defaults.headers.common['X-Channel-Id'] = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
  api.defaults.headers.common['X-Request-Id'] = Math.random() * 10000;
  api.defaults.headers.common['Content-Type'] = 'application/json';
  api.defaults.headers.common['X-User-Type'] = 'MEMBER';
};

export const setToken = token => {
  api.defaults.headers.common['X-Authorization'] = token;
  //teslaApi.defaults.headers.common['Accept-Language'] = 'ru';
};

export const setUserHeaderId = userId => {
  api.defaults.headers.common['X-User-Id'] = userId;
};

export const deleteToken = () => {
  delete api.defaults.headers.common['X-Authorization'];
};

export default api;
