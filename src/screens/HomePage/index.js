import {HomePage} from './HomePage';
import {connect} from 'react-redux';
import * as additionalInfoActions from '../../redux/additionalInfo/action';
import * as callCarActions from '../../redux/callCar/action';
import * as authActions from '../../redux/auth/action';

const mapStateToProps = state => ({
  userData: state.auth.userData,
  additionalInfo: state.additionalInfo,
  junkCategoryPrices: state.callCar.junkCategoryPrices,
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(additionalInfoActions.getBanners());
  },
  getJunkCollection: () => {
    dispatch(callCarActions.getJunkCollection());
  },
  getUserData: () => {
    dispatch(authActions.getUserData());
  },
  getWareHouses: (longlat) => {
    return dispatch(additionalInfoActions.getWareHouses(longlat));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
