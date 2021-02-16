import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.borderInputGrayColor,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  detailsInfoContainer: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  categoryNameText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  categoryPricePerKg: {
    fontSize: 11,
    color: colors.lightGray,
    marginTop: 5,
  },
  totalPriceText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.mainMediumGreen,
    marginTop: 5,
  },
  totalWeightContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 10,
    flexDirection: 'row'
  },
  weightText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 15
  },
  weightTextKg: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});
