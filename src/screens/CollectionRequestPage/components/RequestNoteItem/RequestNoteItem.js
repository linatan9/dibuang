import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getCategoryIconByName, wordToWordWithFirstCapital } from '../../../../helpers/helper';
import {images, icons, colors} from '../../../../constants';
import { MAX_TRASH_WEIGHT, MIN_TRASH_WEIGHT, WEIGHT_TRASH_STEP } from '../../../../constants/data';
import { MainInput } from '../../../../components/MainInput/MainInput';

export const RequestNoteItem = ({memberNotes, onChange}) => {
  const [isShowInput, setIsShowInput] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={() => setIsShowInput(!isShowInput)}>
        <Text style={styles.titleText}>{!isShowInput ? 'Tulis pesan tambahan': 'Pesan Tambahan'}</Text>
      </TouchableOpacity>
      {
        isShowInput ?
          <MainInput value={memberNotes} onChange={onChange} style={{marginTop: 10, borderColor: colors.mainMediumGreen}}/>
        : null
      }
    </View>
  )
};
