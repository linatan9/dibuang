import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  wareHouseContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
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
  },
  wareHouseTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  wareHouseMainText: {
    fontSize: 14,
    marginTop: 10,
  },
  wareHouseTextWithIcon: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  }
});
