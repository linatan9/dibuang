import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%'
  },
  formContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20
  },
  input: {
    marginTop: 10
  },
  termsContainer: {
    flexDirection: 'row',
  },
  termsTextContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 25
  },
  termsGreenText: {
    color: colors.mainMediumGreen,
    fontSize: 12,
  },
  termsGrayText: {
    color: colors.lightGray,
    fontSize: 12,
  }
});
