import {RequestsPage} from './RequestsPage';

import {connect} from 'react-redux';
import * as callCarActions from '../../redux/callCar/action';
import * as additionalInfoActions from '../../redux/additionalInfo/action';

const mapStateToProps = state => ({
  isLoading: state.callCar.isLoading,
  showSuccessCreateOrderPopup: state.callCar.showSuccessCreateOrderPopup,
  checkedItemStatus: state.additionalInfo.checkedItemStatus,
});

const mapDispatchToProps = dispatch => ({
  getJunkCollectionOrdersList: (status) => {
    return dispatch(callCarActions.getJunkCollectionOrdersList(status));
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
)(RequestsPage);
