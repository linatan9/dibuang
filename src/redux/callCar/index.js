import * as types from './types';

const initState = {
  junkCategoryPrices: null,
  isLoading: null,
  junkCollectionRequest: {
    collectionAddress: null,
    collectionDate: null,
    collectionTimeOfDay: null,
    memberCategoryWeights: [],
    images: [],
    memberNotes: ''
  },
  showSuccessCreateOrderPopup: false,
};

const callCar = (state = initState, action) => {
  switch (action.type) {
    case types.GET_JUNK_COLLECTION: {
      return {
        ...state,
        junkCategoryPrices: action.payload,
      };
    }
    case types.SEND_COLLECTOR_REVIEW:
    case types.CANCEL_ORDER: {
      return {
        ...state,
      };
    }
    case types.SHOW_SUCCESS_ORDER_CREATE_POPUP: {
      return {
        ...state,
        showSuccessCreateOrderPopup: action.payload,
      };
    }
    case types.SET_DEFAULT_ORDER: {
      return {
        ...state,
        junkCollectionRequest: initState.junkCollectionRequest,
      };
    }
    case types.CHOSE_ADDRESS: {
      const copeJunkCollectionRequest = {...state.junkCollectionRequest};
      return {
        ...state,
        junkCollectionRequest: {...copeJunkCollectionRequest, ...{collectionAddress: action.payload}},

      };
    }
    case types.UPLOAD_PHOTO: {
      const copyRequest = {...state.junkCollectionRequest};
      const images = [].concat(copyRequest.images, [action.payload]);
      return {
        ...state,
        junkCollectionRequest: {...copyRequest, ...{ images: images}},
      };
    }
    case types.REMOVE_PHOTO: {
      const copyRequest = {...state.junkCollectionRequest};
      if (copyRequest.images?.length === 1) {
        copyRequest.images = [];
      } else {
        copyRequest.images.splice(action.payload, 1);
      }
      return {
        ...state,
        junkCollectionRequest: {...copyRequest, ...{ images: copyRequest.images}},
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default callCar;
