import {WareHousePage} from './WareHousePage';

import {connect} from 'react-redux';
import * as additionalInfoActions from '../../redux/additionalInfo/action';

const mapStateToProps = state => ({
  isLoading: state.additionalInfo.isLoading,
  wareHouses: state.additionalInfo.wareHouses,
});

const mapDispatchToProps = dispatch => ({
  getWareHouses: (longlat) => {
    return dispatch(additionalInfoActions.getWareHouses(longlat));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WareHousePage);
