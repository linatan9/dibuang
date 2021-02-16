import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Linking, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './styles';
import {colors, icons} from '../../constants';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { priceConverter } from '../../helpers/helper';
import AsyncStorage from '@react-native-community/async-storage';
import { MainInput } from '../../components/MainInput/MainInput';
import { MainButton } from '../../components/MainButton/MainButton';
import { RESPONSE_CODES } from '../../constants/data';

const ActionItem = ({icon, title, color, link, logout, routeName, navigation}) => (
  <TouchableOpacity
    onPress={() => routeName ? navigation.navigate(routeName, {isComeFromProfile: true}) : logout ? logout() : Linking.openURL(link)}
    style={styles.actionItemContainer}
  >
    {icon}
    <Text style={[styles.actionTitleText, {color: color}]}>{title}</Text>
  </TouchableOpacity>
);

const EditProfileItem = ({fullName, emailAddress, onChange, onSave, onCancel}) => {
  return (
    <View style={styles.editProfileContainer}>
      <MainInput isInvalid={!fullName} onChange={value => onChange('fullName', value)} isRequired placeholder={''} value={fullName}/>
      <MainInput isInvalid={!emailAddress} onChange={value => onChange('emailAddress', value)} isRequired placeholder={''} value={emailAddress}/>
      <MainButton isNonFill title="Membatalkan" onPress={onCancel}/>
      <MainButton isGrayDisabled={!emailAddress || !fullName} title="Menyimpan" onPress={onSave}/>
    </View>
  )
};
export const ProfilePage = (props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editUserData, setEditUserData] = useState({
    fullName: props.userData?.fullName,
    emailAddress: props.userData.emailAddress,
  });
  const logout = () => {
    AsyncStorage.clear().then(() => {
      props.logout();
      const timeOute = setTimeout(() => {
        clearTimeout(timeOute);
        props.navigation.navigate('Login');
      }, 200);
    })
  };
  const onEditUserData = (field, value) => {
    setEditUserData({...editUserData, [field]: value});
  };

  const onCancelEdit = () => {
    setEditUserData({
      fullName: props.userData?.fullName,
      emailAddress: props.userData.emailAddress,
    });
    setIsEditMode(false);
  };

  const onSaveUserData = () => {
    props.patchUserData(editUserData).then((response) => {
      if(response?.code === RESPONSE_CODES.SUCCESS) {
        setIsEditMode(false);
      }
    })
  };

  return (
    <PageContainer title={'Profil'} {...props} isBackButton={false}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            {
              isEditMode ? (
                <EditProfileItem
                  {...editUserData}
                  onChange={onEditUserData}
                  onCancel={onCancelEdit}
                  onSave={onSaveUserData}
                />
              ) : (
                <>
                 <View style={styles.balanceContainer}>
                   <Text style={styles.balanceTitleText}>Balance Anda</Text>
                   <Text style={styles.balanceValueText}>Rp {priceConverter(props.userData.balanceInCents / 100, '.')}</Text>
                 </View>
                  <View style={styles.mainInfoContainer}>
                    <View style={styles.mainInfoBlock}>
                      <Text style={styles.nameText}>{props.userData?.fullName}</Text>
                      <Text style={styles.emailPhoneText}>{props.userData.emailAddress}</Text>
                      <Text style={styles.emailPhoneText}>{props.userData.phoneNumber}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsEditMode(true)}>
                      <icons.EditProfile/>
                    </TouchableOpacity>
                  </View>
                  <ActionItem link="https://dibuang.com/terms" icon={<icons.TermsCond/>} title="Syarat dan Ketentuan"/>
                  <ActionItem link="https://dibuang.com/privacy" icon={<icons.PrivacyPolicy/>} title="Kebijakan Privasi"/>
                  <ActionItem link="https://dibuang.com/faq" icon={<icons.GeneralQuestions/>} title="Pertanyaan Umum"/>
                  <ActionItem routeName={'ManageAddressPage'} navigation={props.navigation} icon={<icons.Home style={{width: 20, height: 20}} color={'black'}/>} title="Alamat"/>
                  <ActionItem logout={logout} icon={<icons.Logout/>} title="Keluar" color={colors.mainMediumGreen}/>
                </>
              )
            }
          </View>

        </ScrollView>

      </KeyboardAvoidingView>
    </PageContainer>
  )
};
