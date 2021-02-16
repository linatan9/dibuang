import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

export const AddressItem = ({address, isSingleAddress, index, onChangePrimary, onDelete, onEdit, onChoseAddress, navigation, isComeFromProfile}) => {
  const choseAddress = (address) => {
    onChoseAddress(address);
    navigation.goBack();
  };
  const Container = isComeFromProfile ? View : TouchableOpacity;
  return (
    <Container style={styles.addressItemContainer} onPress={() => choseAddress(address)}>
      <View style={styles.addressItemTitleContainer}>
        <Text style={styles.addressItemTitleText}>{address.label}</Text>
        <Switch
          trackColor={{ false: "#767577", true: colors.mainLightGreen }}
          thumbColor={address.isPrimary ? colors.mainMediumGreen : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => onChangePrimary(index, value)}
          value={address.isPrimary}
        />
      </View>
      <View style={styles.addressItemDetailsContainer}>
        <Text style={styles.addressItemTitleText}>{address.contactName}</Text>
        <Text style={styles.addressItemAddressDetailsText}>{address.fullAddress}</Text>
        <Text style={styles.addressItemAddressDetailsText}>Handphone: {address.contactNumber}</Text>
      </View>
      <View style={styles.addressItemActionContainer}>
        <TouchableOpacity style={[styles.addressItemActionButton, styles.addressItemFirstActionButton]} onPress={() => onEdit(index)}>
          <Text style={styles.addressItemActionButtonText}>Ubah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addressItemActionButton} onPress={() => onDelete(index)}>
          <Text style={styles.addressItemActionButtonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
};
