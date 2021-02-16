import ErrorBoundary from './ErrorBoundary';

import {connect} from 'react-redux';

import {clearError} from '../../redux/error/action';
import * as authActions from '../../redux/auth/action';


const mapStateToProps = state => {
  return {
    errorType: state.error.type,
    errorMessage: state.error.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearError: () => {
      dispatch(clearError());
    },
    logout: () => {
      return dispatch(authActions.logout());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBoundary);
