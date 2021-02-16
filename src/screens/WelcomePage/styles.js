import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';


export default StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.mainMediumGreen
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.mainBlue
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.mainOrange
  },
  background1: {
    backgroundColor: colors.mainMediumGreen
  },
  background2: {
    backgroundColor: colors.mainBlue
  },
  background3: {
    backgroundColor: colors.mainOrange
  },
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  titlesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  subTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },
  bottomActionContainer: {
    width: '100%',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 20
  },
  loginButtonText: {
    fontWeight: 'bold'
  },
  dotStyle: {
    height: 8,
    width: 8,
    backgroundColor: 'white',
    opacity: 0.6,
    marginBottom: 20
  },
  activeDotStyle: {
    width: 20,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 20
  }
});
