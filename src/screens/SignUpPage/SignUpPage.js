import React, {useState} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import { AuthTopTitle } from '../../components/AuthTopTitle/AuthTopTitle';
import { MainButton } from '../../components/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { MainInput } from '../../components/MainInput/MainInput';
import { RESPONSE_CODES } from '../../constants/data';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';

const defaultFormValue = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  isAcceptedTerm: false
};

const defaultDormState = {
  isValidName: true,
  isValidEmail: true,
  isValidPhoneNumber: true,
  isValidAcceptedTerm: true,
  isValidForm: true
};

export const SignUpPage = (props) => {
  const [userData, setUserData] = useState({...defaultFormValue, ...{phoneNumber: props.phoneNumber || ''}});
  const [formState, setFormState] = useState(defaultDormState);

  const validateForm = () => {
    const copyFormState = {...formState};
    const regExpEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const trimEmail = userData.emailAddress && userData.emailAddress.trim();
    if (!userData.fullName) {
      copyFormState.isValidName = false;
    }
    if (!trimEmail || !regExpEmail.test(trimEmail)) {
      copyFormState.isValidEmail = false;
    }
    if (!userData.phoneNumber) {
      copyFormState.isValidPhoneNumber = false;
    }
    if (!userData.isAcceptedTerm) {
      copyFormState.isValidAcceptedTerm = false;
    }
    copyFormState.isValidForm = copyFormState.isValidPhoneNumber && copyFormState.isValidEmail && copyFormState.isValidName && copyFormState.isValidAcceptedTerm;
    setFormState(copyFormState);
    return copyFormState.isValidForm;
  };

  const onRegister = () => {
    if(validateForm()) {
      const data = {...userData, ...{
        referralCode: "",
      }};
      props.sendSmsVerification(userData.phoneNumber).then(response => {
        if (response?.code === RESPONSE_CODES.SUCCESS) {
          props.navigation.navigate('OtpPage', {registrationData: data});
        }
      });
    }
  };

  const onChangeFormData = (key, newValue) => {
    setFormState(defaultDormState);
    setUserData({...userData, ...{[key]: newValue}});
  };

  return (
    <PageContainer title={'Daftar'} {...props}>
      <KeyboardAvoidingView style={{flex: 1}}>
        {
          props.isLoading ? (
            <ModalLoader isLoading={props.isLoading}/>
          ) : (
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.container}>
                <AuthTopTitle
                  title={'Daftar'}
                  subTitle={'Silahkan daftar untuk segera mulai memilah sampah Anda.'}
                />
                <View style={styles.formContainer}>
                  <MainInput
                    style={styles.input}
                    placeholder={'Nama Pengguna*'}
                    value={userData.fullName}
                    onChange={newName => onChangeFormData('fullName', newName)}
                    isRequired
                    isInvalid={!formState.isValidName}
                  />
                  <MainInput
                    style={styles.input}
                    placeholder={'Email*'}
                    value={userData.emailAddress}
                    onChange={newEmail => onChangeFormData('emailAddress', newEmail)}
                    isRequired
                    isInvalid={!formState.isValidEmail}
                  />
                  <MainInput
                    style={styles.input}
                    keyboardType={'phone-pad'}
                    placeholder={'Nomor Ponsel*'}
                    value={userData.phoneNumber}
                    onChange={newUserName => onChangeFormData('phoneNumber', newUserName)}
                    isRequired
                    isInvalid={!formState.isValidPhoneNumber}
                  />
                  <View style={styles.termsContainer}>
                    <CheckBox
                      disabled={false}
                      tintColors={{false: !formState.isValidAcceptedTerm ? '#f00' : ''}}
                      value={userData.isAcceptedTerm}
                      onValueChange={(newValue) => onChangeFormData('isAcceptedTerm', newValue)}
                    />
                    <View style={styles.termsTextContainer}>
                      <Text style={styles.termsGrayText}>Dengan mendaftar, saya setuju pada </Text>
                      <Text style={styles.termsGreenText}>Syarat & </Text>
                      <Text style={styles.termsGreenText}>Ketentuan </Text>
                      <Text style={styles.termsGrayText}>dan </Text>
                      <Text style={styles.termsGreenText}>Kebijakan Privasi </Text>
                      <Text style={styles.termsGrayText}>Dibuang.</Text>
                    </View>
                  </View>
                </View>
                <MainButton onPress={onRegister} title={'Daftar'}/>
              </View>
            </ScrollView>
          )
        }
      </KeyboardAvoidingView>
    </PageContainer>
  )
};
