import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.mainMediumGreen,
    borderRadius: 5,
    marginBottom: 15,
    position: 'relative',
  },
  trashActionNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconNameTrashRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeIcon: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  changeWeightContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minusButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.borderInputGrayColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusButtonText: {
    color: colors.mainMediumGreen,
    fontWeight: 'bold',
  },
  plusButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.mainMediumGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
