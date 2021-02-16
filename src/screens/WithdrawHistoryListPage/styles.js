import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    height: '100%',
    position: 'relative',
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
  withdrawItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInputGrayColor,
  },
  withdrawItemDetailsContainer: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  withdrawItemStatusContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  withdrawItemAmountText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  withdrawItemPhoneText: {
    marginTop: 2,
    fontWeight: 'bold',
  },
  withdrawItemDateText: {
    marginTop: 5,
    color: colors.lightGray,
    fontSize: 12,
  },
  withdrawItemStatusText: {
    fontWeight: 'bold',
  }
});
