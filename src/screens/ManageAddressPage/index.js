import {ManageAddressPage} from './ManageAddressPage';

import {connect} from 'react-redux';
import * as authActions from '../../redux/auth/action';
import * as callCarActions from '../../redux/callCar/action';

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => ({
  verifySms: (data) => {
    return dispatch(authActions.verifySms(data));
  },
  setUserData: (smsCode) => {
    dispatch(authActions.setUserData(smsCode));
  },
  patchUserData: (userData) => {
    return dispatch(authActions.patchUserData(userData));
  },
  choseAddress: (address) => {
    return dispatch(callCarActions.choseAddress(address));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageAddressPage);
