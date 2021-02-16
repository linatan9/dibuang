import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getCategoryIconByName, wordToWordWithFirstCapital } from '../../../helpers/helper';
import {images, icons} from '../../../constants';
import { MAX_TRASH_WEIGHT, MIN_TRASH_WEIGHT, WEIGHT_TRASH_STEP } from '../../../constants/data';
import { MainButton } from '../../../components/MainButton/MainButton';
import ModalView from '../../../components/ModalView/ModalView';

export const SucessModal = ({onConfirm, onCancel, isShowModal}) => {

  return (
    <ModalView onHideModal={onConfirm} modalHeaderText="Konfirmasi" showModal={isShowModal}>
      <View style={styles.categoryContainer}>
        <Text style={styles.subTitle}>Mohon tempelkan kode pesanan ke semua sampah Anda</Text>
        <View style={styles.buttonContainer}>
          <MainButton style={{width: '45%'}} title={'OK'} onPress={onConfirm}/>
        </View>
      </View>
    </ModalView>
  )
};
