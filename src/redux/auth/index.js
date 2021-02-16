import * as types from './types';

const initState = {
  isLoading: null,
  phoneNumber: null,
  userData: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_DEFAULT_HEADERS: {
      return state;
    }
    case types.SEND_SMS_VERIFICATION: {
      return {
        ...state,
        phoneNumber: action.payload,
      };
    }
    case types.SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case types.ADD_USER_ADDRESS: {
      const newUserData = {...state.userData, ...{addresses: action.payload}};
      return {
        ...state,
        userData: newUserData,
      };
    }
    case types.EDIT_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        userData: {},
        phoneNumber: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
