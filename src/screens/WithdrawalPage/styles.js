import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    height: '100%',
    position: 'relative',
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
  },
  dataContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    marginBottom: 40,
  },
  dataTitle: {
    fontSize: 15,
    color: colors.lightGray,
  },
  amountText: {
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 15,
  }
});
