import {WithdrawalPage} from './WithdrawalPage';
import * as authActions from '../../redux/auth/action';
import * as additionalInfoActions from '../../redux/additionalInfo/action';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  userData: state.auth.userData,
  phoneNumber: state.auth.phoneNumber,
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => {
    return dispatch(authActions.getUserData());
  },
  withdraw: (data) => {
    return dispatch(additionalInfoActions.withdraw(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithdrawalPage);
