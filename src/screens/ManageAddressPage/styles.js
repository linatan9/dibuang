import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  emptyAddressesContainer: {
    marginTop: '20%',
    alignItems: 'center',
  },
  emptyAddressesTitle: {
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  emptyAddressesSubTitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginTop: 5,
  },
  addAddressButton: {
    backgroundColor: colors.mainMediumGreen,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  manageAddressFormContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  defaultAddressContainer: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  defaultAddressText: {
    fontWeight: 'bold',
  },
  locationContainer: {
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    padding: 12,
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
  },
  addPointText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom:  15,
  },
  fieldsMarginTop: {
    marginTop: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
  },
  backMapButtonContainer: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15
  },
  autoCompleteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  streetNameText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  fullAddressText: {
    color: colors.lightGray,
    fontSize: 12,
    marginTop: 5,
  },
  addressItemContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    flexDirection: 'column',
    borderRadius: 5,
    marginTop: 15,
  },
  addressItemTitleContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInputGrayColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressItemTitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  addressItemDetailsContainer: {
    flexDirection: 'column',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInputGrayColor,
  },
  addressItemAddressDetailsText: {
    fontSize: 12,
    color: colors.lightGray,
    marginTop: 5,
  },
  addressItemActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressItemActionButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addressItemActionButtonText: {
    color: colors.mainMediumGreen,
    fontWeight: 'bold',
  },
  addressItemFirstActionButton: {
    borderRightColor: colors.borderInputGrayColor,
    borderRightWidth: 1,
  },
  fullAddressContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    borderRadius: 5,
    marginTop: 10,
  },
  searchRow: {
    width: (Dimensions.get('window').width - 80),
    flexWrap: 'wrap'
  },
  autoCompleteActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
