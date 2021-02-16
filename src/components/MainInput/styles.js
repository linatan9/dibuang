import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderInputGrayColor,
    borderRadius: 5,
    width: '100%',
  },
  prefixContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.borderInputGrayColor,
    padding: 8,
  },
  prefixText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  inputContainer: {
    flex: 1,
    paddingLeft: 15,
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
  }
});
