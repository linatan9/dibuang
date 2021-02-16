import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../../../constants';

const iamgeSize = ((Dimensions.get('window').width - 40) * 0.3111111);
const imageMarginRight = ((Dimensions.get('window').width - 40) * 0.03333333);

export default StyleSheet.create({
  photoRowContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
  },
  emptyPhotoContainer: {
    width: iamgeSize,
    height: iamgeSize,
    backgroundColor: colors.borderInputGrayColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: iamgeSize,
    height: iamgeSize,
    borderRadius: 10,
    marginRight: imageMarginRight,
  },
  emptyPhotoText: {
    fontSize: 11,
    color: colors.lightGray,
    marginTop: 10
  },
  removeIcon: {
    position: 'absolute',
    right: -5,
    top: -20,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
});
