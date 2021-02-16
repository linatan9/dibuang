import {CollectionRequestPage} from './CollectionRequestPage';

import {connect} from 'react-redux';
import * as callCarActions from '../../redux/callCar/action';
import * as additionalInfoActions from '../../redux/additionalInfo/action';


const mapStateToProps = state => ({
  isLoading: state.callCar.isLoading,
  callCar: state.callCar,
  userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => ({
  getJunkCollection: () => {
    dispatch(callCarActions.getJunkCollection());
  },
  createOrderCollection: (orderData) => {
    return dispatch(callCarActions.createOrderCollection(orderData));
  },
  uploadPhoto: (orderData) => {
    return dispatch(callCarActions.uploadPhoto(orderData));
  },
  removePhoto: (index) => {
    return dispatch(callCarActions.removePhoto(index));
  },
  setCheckedItemStatus: (status) => {
    return dispatch(additionalInfoActions.setCheckedItemStatus(status));
  },
  showSuccessCreateOrder: (isShow) => {
    return dispatch(callCarActions.showSuccessCreateOrder(isShow));
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CollectionRequestPage);
