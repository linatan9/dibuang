import React from 'react';
import { Switch, Text, View } from 'react-native';
import styles from './styles';
import { MainInput } from '../../components/MainInput/MainInput';
import {colors} from '../../constants';
import { MainButton } from '../../components/MainButton/MainButton';

export const ManageAddressForm = ({onChangeFormAddressData, addressFormData, setIsShowMap}) => {
  return (
    <View style={styles.manageAddressFormContainer}>
      <MainInput
        value={addressFormData.label}
        onChange={value => onChangeFormAddressData('label', value)}
        example={'Contoh: Rumah, Kantor'}
        placeholder={'Label Alamat'}
      />
      <View style={styles.defaultAddressContainer}>
        <Text style={styles.defaultAddressText}>Set as Default Address</Text>
        <Switch
          trackColor={{ false: "#767577", true: colors.mainLightGreen }}
          thumbColor={addressFormData.isPrimary ? colors.mainMediumGreen : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => onChangeFormAddressData('isPrimary', value)}
          value={addressFormData.isPrimary}
        />
      </View>
      <MainInput
        value={addressFormData.contactName}
        onChange={value => onChangeFormAddressData('contactName', value)}
        placeholder={'Nama Penerima'}
        style={styles.fieldsMarginTop}
      />
      <MainInput
        value={addressFormData.contactNumber}
        onChange={value => onChangeFormAddressData('contactNumber', value)}
        placeholder={'No. Telepon Penerima'}
        style={styles.fieldsMarginTop}
      />
      <View style={styles.locationContainer}>
        <Text style={styles.addPointText}>Titik Lokasi</Text>
        <MainButton onPress={() => setIsShowMap(true)} isNonFill title={'Tambah Titik Lokasi'}/>
      </View>
      <MainInput
        maxLength={200}
        multiline
        value={addressFormData.fullAddress}
        onChange={value => onChangeFormAddressData('fullAddress', value)}
        placeholder={'Alamat'}
        style={{marginTop: 10}}
      />
      <MainInput
        value={addressFormData.region}
        disabled
        onChange={value => onChangeFormAddressData('region', value)}
        placeholder={'Provinsi'}
        style={styles.fieldsMarginTop}
      />
      <MainInput
        value={addressFormData.city}
        disabled
        onChange={value => onChangeFormAddressData('city', value)}
        placeholder={'Kota/Kabupaten'}
        style={styles.fieldsMarginTop}
      />
      <MainInput
        value={addressFormData.district}
        disabled
        onChange={value => onChangeFormAddressData('district', value)}
        placeholder={'Kecamatan'}
        style={styles.fieldsMarginTop}
      />
      <MainInput
        value={addressFormData.subDistrict}
        disabled
        onChange={value => onChangeFormAddressData('subDistrict', value)}
        placeholder={'Kelurahan'}
        style={styles.fieldsMarginTop}
      />
    </View>
  )
};
