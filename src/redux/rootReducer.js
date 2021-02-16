import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import errorReducer from './error';
import authReducer from './auth';
import callCar from './callCar';
import additionalInfo from './additionalInfo';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'reportsLocal', 'settings', 'profile'],
  blacklist: ['error', 'reportsRemote'],
};

const rootReducer = combineReducers({
  error: errorReducer,
  auth: authReducer,
  callCar: callCar,
  additionalInfo: additionalInfo,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
