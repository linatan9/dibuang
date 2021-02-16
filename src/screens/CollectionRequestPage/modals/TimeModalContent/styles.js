import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  rowContainer: {
   padding: 15,
   paddingLeft: 0,
   alignItems: 'flex-start',
   borderBottomColor: colors.borderInputGrayColor,
   borderBottomWidth: 1
  },
  timeText: {
    fontSize: 15
  }
});
