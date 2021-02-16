import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../constants';

const iamgeSize = ((Dimensions.get('window').width - 40) * 0.3111111);
const imageMarginRight = ((Dimensions.get('window').width - 40) * 0.03333333);
export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    padding: 20,
  },
 statusContainer: {
    width: '100%',
   padding: 20,
   flexDirection: 'row',
   alignItems: 'center',
   height: 100,
 },
  orderStatusTitleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  orderStatusText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    lineHeight: 17,
  },
  orderStatusTextContainer: {
    width: '80%',
    marginRight: '5%'
  },
  orderNumberContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  orderNumberTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  orderNumberText: {
    fontSize: 20,
    marginTop: 5,
  },
  notesContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  notesTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoRowContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
  },
  image: {
    width: iamgeSize,
    height: iamgeSize,
    borderRadius: 10,
    marginRight: imageMarginRight,
  },
  reviewContainer: {
    borderTopWidth: 1,
    borderColor: colors.borderInputGrayColor,
    position: 'relative',
    width: '100%',
    alignItems: 'center'
  },
  reviewInputTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
    marginTop: 15,
  }
});
