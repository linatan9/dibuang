import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getCategoryIconByName, wordToWordWithFirstCapital } from '../../../../helpers/helper';
import {images, icons} from '../../../../constants';
import { MAX_TRASH_WEIGHT, MIN_TRASH_WEIGHT, WEIGHT_TRASH_STEP } from '../../../../constants/data';

export const Category = ({category, weight, changeTrashWeight, deleteJunkCategory}) => {
  const ChangeWeight = ({weight}) => {
    return (
      <View style={styles.changeWeightContainer}>
        <TouchableOpacity
          disabled={weight === MIN_TRASH_WEIGHT}
          style={[styles.minusButton, {opacity: weight === MIN_TRASH_WEIGHT ? 0.5 : 1}]}
          onPress={() => changeTrashWeight(category, weight - WEIGHT_TRASH_STEP)}
        >
          <Text style={styles.minusButtonText}>—</Text>
        </TouchableOpacity>
        <Text>{weight/1000} kg</Text>
        <TouchableOpacity
          disabled={weight === MAX_TRASH_WEIGHT}
          style={[styles.plusButton, {opacity: weight === MAX_TRASH_WEIGHT ? 0.5 : 1}]}
          onPress={() => changeTrashWeight(category, weight + WEIGHT_TRASH_STEP)}
        >
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity style={styles.removeIcon} onPress={() => deleteJunkCategory(category)}>
        <icons.RedCloseIcon/>
      </TouchableOpacity>
      <View style={styles.iconNameTrashRow}>
          {getCategoryIconByName(category)}
        <Text  style={styles.trashActionNameText}>{wordToWordWithFirstCapital(category)}</Text>
      </View>
      <ChangeWeight weight={weight}/>
    </View>
  )
};
