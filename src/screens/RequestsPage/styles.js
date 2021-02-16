import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 20,
  },
  requestItemsRow: {
    position: 'relative',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white'
  },
  statusItem: {
    padding: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusItemText: {
    fontWeight: 'bold',
  },
  checkedStatusLine: {
    position: 'absolute',
    bottom: 0,
    left: '40%',
    width: 50,
    height: 4,
    borderRadius: 5,
    backgroundColor: colors.mainDarkGreen,
  },
  emptyOrdersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyOrdersTitle: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 20,
  },
  emptyOrdersSubTitle: {
    marginTop: 10,
    fontSize: 14,
    color: colors.lightGray,
    textAlign: 'center',
  },
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
    fontSize: 11,
  },
  orderItemAddress: {
    fontSize: 12,
    color: 'black',
    marginTop: 15,
  },
  orderItemDetailsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  orderItemPrice: {
    fontWeight: 'bold',
  },
  orderItemsDetailsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  orderItemsDetailsButtonText: {
    color: colors.mainMediumGreen,
    fontWeight: 'bold',
  },
  orderItemCodeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  orderItemCodeTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 5,
  },
  orderItemCode: {
    fontSize: 13,
  },
  coverTopShadow: {
    position: 'absolute',
    width: '100%',
    height: 5,
    top: -5,
    backgroundColor: 'white',
  },
});
