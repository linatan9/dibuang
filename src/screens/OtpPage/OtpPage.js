import React, {useState, useRef, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import styles from './styles';
import { AuthTopTitle } from '../../components/AuthTopTitle/AuthTopTitle';
import { MainButton } from '../../components/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { RESPONSE_CODES } from '../../constants/data';
import colors from '../../constants/colors';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';

export const OtpPage = (props) => {
  const [code, setCode] = useState('');
  const [fcmToken, setFcmToken] = useState(null);
  const otpInputRef = useRef(null);
  const registrationData = props.route?.params?.registrationData;

  useEffect(() => {
    requestUserPermission();
    setTimeout(() => {
      // otpInputRef?.current?.focusField(0)
    }, 700)

  }, [otpInputRef]);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      await getFcmToken();
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      setFcmToken(fcmToken);
    }
  };

  const confirmCode = () => {
    if (code) {
      const data = {
        phoneNumber: props.phoneNumber,
        smsCode: `${code}`,
        deviceToken: fcmToken,
        deviceDescription: "deviceDescription"
      };
      if (registrationData) {
        registrationData.smsCode = code;
        props.signUp(registrationData).then(response => {
          if(response?.code === RESPONSE_CODES.SUCCESS) {
            props.setUserData(response?.data);
            props.navigation.navigate('MainTabs');
          } else {
            otpInputRef?.current?.blurAllFields();
            otpInputRef?.current?.clearAllFields();
          }
        });
      } else {
        props.verifySms(data).then(response => {
          if (response?.response?.data?.code === RESPONSE_CODES.MEMBER_NOT_FOUND) {
            props.navigation.navigate('SignUpPage');
            props.setUserData(data);
          } else if (response?.code === RESPONSE_CODES.SUCCESS) {
            props.setUserData(response?.data);
            props.navigation.navigate('MainTabs');
          } else {
            otpInputRef?.current?.clearAllFields();
            otpInputRef?.current?.blurAllFields();
          }
        });
      }
    }
  };

  return (
    <PageContainer title={'OTP'} {...props}>
        <View style={styles.container}>
          {
            props.isLoading ? (
              <ModalLoader isLoading={props.isLoading}/>
            ) : (
              <>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <AuthTopTitle
                    title={'Masukkan Kode Verifikasi'}
                    subTitle={'Mohon masukkan kode verifikasi yang sudah kami kirimkan ke ponsel Anda.'}
                  />
                  <OTPInputView
                    ref={otpInputRef}
                    style={{width: '80%', height: 150, justifyContent: 'center', alignItems: 'center'}}
                    pinCount={4}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.codeInputFieldStyle}
                    codeInputHighlightStyle={styles.codeInputHighlightStyle}
                    onCodeFilled = {setCode}
                  />
                  <TouchableOpacity>
                    <Text style={styles.resendCodeText}>Kirim ulang kode</Text>
                  </TouchableOpacity>
                </View>
                <MainButton onPress={confirmCode} title={'Kirim Kode'}/>
              </>
            )
          }
        </View>
    </PageContainer>
  )
};
