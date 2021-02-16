import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 25,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceText: {
    fontWeight: 'bold',
  },
  totalContainerBorder: {
    borderTopColor: colors.borderInputGrayColor,
    borderTopWidth: 1,
    paddingTop: 10,
  }
});
