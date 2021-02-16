import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
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

  trashActionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInputGrayColor,
    paddingBottom: 10,
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
  iconImage: {
    position: 'absolute',
    top: 5,
    left: 5,
  },

});
