import React from 'react';
import ModalView from '../../../../components/ModalView/ModalView';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { getCategoryIconByName, priceConverter, wordToWordWithFirstCapital } from '../../../../helpers/helper';
import {images, icons} from '../../../../constants';


export const TrashModalContent = ({junkCategoryPrices, isShowModal, onHideModal, addJunkCategory, checkedCategories}) => {
  const isCategoryAlreadyAdded = (categoryObj) => {
    return checkedCategories.find(cat => cat.category === categoryObj.category);
  };
  const TrashActionItem = ({categoryObj}) => {
    return (
      <TouchableOpacity
        onPress={() => addJunkCategory({category: categoryObj.category})}
        style={[styles.trashActionItemContainer, {opacity: isCategoryAlreadyAdded(categoryObj) && 0.5}]}
        disabled={isCategoryAlreadyAdded(categoryObj)}
      >
        <View style={styles.iconNameTrashRow}>
          {getCategoryIconByName(categoryObj.category)}
          <Text  style={styles.trashActionNameText}>{wordToWordWithFirstCapital(categoryObj.category)}</Text>
        </View>
        <Text>Rp {priceConverter((categoryObj.priceInCentsPerGram / 100 * 1000), '.')}/kg</Text>
      </TouchableOpacity>
    )
  };
  return (
    <ModalView onHideModal={onHideModal} modalHeaderText="Pilih jenis buanganmu" showModal={isShowModal}>
      {
        junkCategoryPrices?.map(categoryObj => (
          <TrashActionItem key={categoryObj.category} categoryObj={categoryObj}/>
        ))
      }
    </ModalView>
  )
};
