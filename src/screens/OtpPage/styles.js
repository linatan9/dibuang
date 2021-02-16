import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  codeInputHighlightStyle: {
    backgroundColor: '#F5F5F5',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  codeInputFieldStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    height: 55,
    width: 55,
    borderRadius: 5
  },
  resendCodeText: {
    color: colors.mainMediumGreen,
    fontSize: 14,
  }
});
