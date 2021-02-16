import {OrderDetailsPage} from './OrderDetailsPage';

import {connect} from 'react-redux';
import * as callCarActions from '../../redux/callCar/action';
import * as additionalInfoActions from '../../redux/additionalInfo/action';


const mapStateToProps = state => ({
  userData: state.auth.userData,
  isLoading: state.callCar.isLoading,
  junkCategoryPrices: state.callCar.junkCategoryPrices,
});

const mapDispatchToProps = dispatch => ({
  cancelOrder: (orderId) => {
    return dispatch(callCarActions.cancelOrder(orderId));
  },
  setCheckedItemStatus: (status) => {
    return dispatch(additionalInfoActions.setCheckedItemStatus(status));
  },
  sendCollectorReview: (orderId, reviewData) => {
    return dispatch(callCarActions.sendCollectorReview(orderId, reviewData));
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderDetailsPage);
