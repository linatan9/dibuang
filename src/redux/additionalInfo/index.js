import * as types from './types';
import { OREDER_STATUS } from '../../constants/data';

const initState = {
  wareHouses: null,
  isLoading: false,
  banners: null,
  checkedItemStatus: OREDER_STATUS.PENDING,
};

const additionalInfo = (state = initState, action) => {
  switch (action.type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case types.GET_BANNERS: {
      return {
        ...state,
        banners: action.payload,
      };
    }
    case types.SET_CHECKED_ITEM_STATUS: {
      return {
        ...state,
        checkedItemStatus: action.payload,
      };
    }
    case types.GET_WAREHOUSES: {
      return {
        ...state,
        wareHouses: action.payload,
      };
    }
    case types.GET_WITHDRAWS: {
      return {
        ...state,
      };
    }
    case types.WITHDRAW: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default additionalInfo;
