import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  mainActionContainer: {
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  mainActionTitleText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
});
