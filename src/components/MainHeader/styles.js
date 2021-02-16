import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center'
  },
  title: {
    paddingRight: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  backButtonContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
