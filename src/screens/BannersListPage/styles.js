import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 5,
  },
  emptyWIthdrawsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '25%'
  },
  emptyWithdrawTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
  },
  emptyWithdrawSubTitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginTop: 10,
  },
  bannerItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
  },
  bannerNumberContainer: {
    left: -1,
    top: -1,
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: colors.mainMediumGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bannerDescription: {
    textAlign: 'center',
    marginTop: 10,
  },
  bannerNumber: {
    color: 'white',
    fontWeight: 'bold',
  }
});
