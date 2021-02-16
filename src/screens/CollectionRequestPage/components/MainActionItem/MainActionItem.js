import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getCategoryIconByName, wordToWordWithFirstCapital } from '../../../../helpers/helper';
import {images, icons} from '../../../../constants';
import { MAX_TRASH_WEIGHT, MIN_TRASH_WEIGHT, WEIGHT_TRASH_STEP } from '../../../../constants/data';
import colors from '../../../../constants/colors';

export const MainActionItem = ({icon, title, modalName, isAddedAnyMemberCategoryWeights, setVisibleModalName, isGreenBorder, navigation, routeName}) => (
  <TouchableOpacity
    style={[
      styles.mainActionContainer,
      {backgroundColor: isAddedAnyMemberCategoryWeights && colors.mainMediumGreen, borderColor: isAddedAnyMemberCategoryWeights || isGreenBorder ? colors.mainMediumGreen : colors.borderInputGrayColor}
    ]}
    onPress={ () => {
      if(routeName) {
        navigation.navigate(routeName);
      } else {
        setVisibleModalName(modalName)
      }
    }}
  >
    {!isAddedAnyMemberCategoryWeights && icon}
    <Text style={[styles.mainActionTitleText, {color: isAddedAnyMemberCategoryWeights ? 'white' : 'black'}]}>{title}</Text>
  </TouchableOpacity>
);
