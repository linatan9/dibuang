import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants';

const {width, height} = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

const scaledHeight = componentHeight =>
  Math.ceil(componentHeight * scale);

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBackround,
    justifyContent: 'center',
    position: 'relative',
  },
  modalBecksideContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWindow: {
    backgroundColor: 'white',
    padding: windowWidth * 0.05,
    marginHorizontal: windowWidth * 0.035,
    borderRadius: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: scaledHeight(20),
  },
  fullSizeModal: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 8,
  }
});
