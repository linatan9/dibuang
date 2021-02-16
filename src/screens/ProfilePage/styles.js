import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 2,
  },
  balanceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  balanceTitleText: {
    color: colors.lightGray,
    fontSize: 15,
  },
  balanceValueText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  mainInfoContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  mainInfoBlock: {
    flexDirection: 'column',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  emailPhoneText: {
    color: colors.lightGray,
    fontSize: 12,
  },
  actionItemContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
  },
  actionTitleText: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  editProfileContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    height: 400,
    justifyContent: 'space-around',
  }
});
