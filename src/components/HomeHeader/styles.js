import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  logo: {
    marginLeft: 10
  },
  logoName: {
    marginBottom: 5
  }
});
