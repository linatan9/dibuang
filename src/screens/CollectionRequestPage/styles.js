import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
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
  dateContainer: {
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.mainMediumGreen,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  dateText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chckedLocationContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.mainMediumGreen,
    borderRadius: 5,
    width: '100%',
    marginTop: 15,
  },
  chckedLocationTitleContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.mainMediumGreen,
    borderBottomWidth: 1,
  },
  chekedLocationTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
  checkedLocationDetailsContainer: {
    flexDirection: 'column',
    padding: 15,
  },
  checkedLocationDetailsTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  checkedLocationDetailsText: {
    fontSize: 12,
    color: colors.lightGray,
    marginTop: 5,
  }
});
