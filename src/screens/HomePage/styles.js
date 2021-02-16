import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';

const iamgeSizeheight = ((Dimensions.get('window').width - 40) / 1.77777);

const dotMargin = Dimensions.get('window').width * 0.03333333;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  mainInfoContainer: {
    width: '100%',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceText: {
    fontSize: 12,
    color: colors.lightGray,
  },
  balanceValueText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  mainActionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 80
  },
  mainActionTitleText: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  mainActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
  },
  promotionContainer: {
    width: '100%',
    flexDirection: 'column',
    height: '100%',
  },
  promotionTitlesRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5,
  },
  promotionTitleText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  seeAllText: {
    color: colors.mainMediumGreen,
    fontSize: 11,
    fontWeight: 'bold',
  },
  iconImage: {
    position: 'absolute',
    top: 20,
    left: 25,
  },
  bannerImageSize: {
    height: iamgeSizeheight,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  dotStyle: {
    height: 8,
    width: 8,
    backgroundColor: 'white',
    opacity: 0.6,
    marginBottom: dotMargin
  },
  activeDotStyle: {
    width: 20,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: dotMargin
  }
});
