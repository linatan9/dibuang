import {WithdrawHistoryListPage} from './WithdrawHistoryListPage';
import * as authActions from '../../redux/auth/action';
import * as additionalInfoActions from '../../redux/additionalInfo/action';

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  userData: state.auth.userData,
  phoneNumber: state.auth.phoneNumber,
});

const mapDispatchToProps = dispatch => ({
  getWitdraws: () => {
    return dispatch(additionalInfoActions.getWithdraws());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithdrawHistoryListPage);
