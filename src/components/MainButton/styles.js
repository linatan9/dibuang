import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.mainMediumGreen,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  nonFill: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.mainMediumGreen,
  },
  titleText: {
    color: colors.buttonTextTitleColor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleTextGreen: {
    color: colors.mainMediumGreen,
    fontWeight: 'bold',
    fontSize: 14,
  },
  isGrayDisabled: {
    width: '100%',
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  }
});
