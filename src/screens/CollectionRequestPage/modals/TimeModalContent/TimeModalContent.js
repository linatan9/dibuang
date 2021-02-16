import React from 'react';
import ModalView from '../../../../components/ModalView/ModalView';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import {images, icons} from '../../../../constants';
import { COLLECTIONS_TIMES, COLLECTIONS_TIMES_KEYS } from '../../../../constants/data';
import moment from 'moment';


export const TimeModalContent = ({isShowModal, onHideModal, choseTime}) => {

  const isShowTime = (dayPart) => {
    const currentHours = moment().hour();
    switch (dayPart) {
      case COLLECTIONS_TIMES_KEYS.MORNING:
        return currentHours < 11;
      case COLLECTIONS_TIMES_KEYS.NOON:
        return currentHours < 14;
      case COLLECTIONS_TIMES_KEYS.AFTERNOON:
        return currentHours < 18;
      case COLLECTIONS_TIMES_KEYS.EVENING:
        return currentHours < 21;
      default: return true;
    }
  };
  return (
    <ModalView onHideModal={onHideModal} modalHeaderText="Pilih waktu pengambilan" showModal={isShowModal}>
      {
        Object.keys(COLLECTIONS_TIMES).map((key, i) => (
          !!isShowTime(key) ? <TouchableOpacity key={i} onPress={() => choseTime(key)} style={styles.rowContainer}>
            <Text style={styles.timeText}>{COLLECTIONS_TIMES[key]}</Text>
          </TouchableOpacity> : null
        ))
      }
    </ModalView>
  )
};
