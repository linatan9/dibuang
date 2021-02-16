import {OtpPage} from './OtpPage';

import {connect} from 'react-redux';
import * as authActions from '../../redux/auth/action';

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  phoneNumber: state.auth.phoneNumber,
});

const mapDispatchToProps = dispatch => ({
  verifySms: (data) => {
    return dispatch(authActions.verifySms(data));
  },
  setUserData: (userData) => {
    dispatch(authActions.setUserData(userData));
  },
  signUp: (data) => {
    return dispatch(authActions.signUp(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtpPage);
