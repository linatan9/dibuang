import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  orderItemContainer: {
    width: '100%',
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    marginTop: 15,
  },
  orderItemDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderItemDateText: {
    marginLeft: 5,
    fontSize: 12,
  },
  orderItemAddress: {
    fontSize: 12,
    color: colors.lightGray,
    marginBottom: 15,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  username: {
    color: 'black',
    marginTop: 5,
  }
});
