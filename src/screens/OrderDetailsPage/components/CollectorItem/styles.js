import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.borderInputGrayColor,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  infoContainer: {
    marginLeft: 15,
  },
  nameText: {
    fontWeight: 'bold',
  },
  phoneContainer: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  transportationIdText: {
    fontSize: 12,
  }
});
