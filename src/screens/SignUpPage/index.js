import {SignUpPage} from './SignUpPage';
import * as authActions from '../../redux/auth/action';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
  phoneNumber: state.auth.phoneNumber,
});

const mapDispatchToProps = dispatch => ({
  signUp: (data) => {
    return dispatch(authActions.signUp(data));
  },
  setUserData: (data) => {
    return dispatch(authActions.setUserData(data));
  },
  sendSmsVerification: (phoneNumber) => {
    return dispatch(authActions.sendSmsVerification(phoneNumber));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);
