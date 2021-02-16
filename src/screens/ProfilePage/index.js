import {ProfilePage} from './ProfilePage';

import {connect} from 'react-redux';
import * as authActions from '../../redux/auth/action';


const mapStateToProps = state => ({
  userData: state.auth.userData,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    return dispatch(authActions.logout());
  },
  patchUserData: (userData) => {
    return dispatch(authActions.patchUserData(userData));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
