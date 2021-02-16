import {LoginPage} from './LoginPage';

import * as authActions from '../../redux/auth/action';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = dispatch => ({
  setDefaultHeaders: () => {
    dispatch(authActions.setDefaultHeaders());
  },
  sendSmsVerification: (phoneNumber) => {
    return dispatch(authActions.sendSmsVerification(phoneNumber));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
