import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    borderRadius: 5,
    width: '100%',
    padding: 15,
    height: 50,
  },
  prefixContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.borderInputGrayColor,
    padding: 8,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invalidContainer: {
    borderColor: colors.mainRed,
  },
  invalidPrefix: {
    borderRightColor: colors.mainRed,
  },
  requiredText: {
    color: colors.mainRed,
    fontSize: 10,
    marginTop: 2,
  },
  exampleText: {
    color: colors.lightGray,
    fontSize: 10,
    marginTop: 2,
  },
  placeholer: {
    fontSize: 15,
    color: colors.lightGray,
  },
  dropDownBody: {
    position: 'absolute',
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
  },
  dropDownItem: {
    width: '100%',
    minHeight: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDowItemText: {
    marginLeft: 15,
    fontSize: 15
  }
});
