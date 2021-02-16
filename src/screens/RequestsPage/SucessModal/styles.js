import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../constants';


export default StyleSheet.create({
  categoryContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    position: 'relative',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 25,
    paddingRight: 10,
    paddingLeft: 10,
  }
});
