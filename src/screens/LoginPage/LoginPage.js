import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import styles from './styles';
import { AuthTopTitle } from '../../components/AuthTopTitle/AuthTopTitle';
import { PrefixInput } from '../../components/PrefixInput/PrefixInput';
import { MainButton } from '../../components/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { RESPONSE_CODES } from '../../constants/data';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';


export const LoginPage = (props) => {
  const [phone, setPhone] = useState('');
  const [isInvalidPhone, setIsInvalidPhone] = useState(false);
  const prefix = '+62';

  const onChangePhone = (newPhone) => {
    if (isInvalidPhone) {
      setIsInvalidPhone(false);
    }
    setPhone(newPhone);
  };

  const onContinue = () => {
    if (!phone) {
      setIsInvalidPhone(true);
      return;
    }
    props.sendSmsVerification(`${prefix}${phone}`).then(response => {
      if (response?.code === RESPONSE_CODES.SUCCESS) {
       props.navigation.navigate('OtpPage');
      }
    });
  };

  useEffect(() => {
    props.setDefaultHeaders();
  }, []);

  return (
    <PageContainer title={'Login'} {...props}>
      <View style={styles.container}>
        {
          props.isLoading ? (
            <ModalLoader isLoading={props.isLoading}/>
          ) : (
            <>
              <View>
                <AuthTopTitle
                  title={'Login'}
                  subTitle={'Masukkan nomor ponsel Anda. Kami akan mengirimkan kode verifikasi.'}
                />
                <PrefixInput
                  style={{marginTop: 20}}
                  prefix={prefix}
                  value={phone}
                  onChange={onChangePhone}
                  placeholder={'Nomor telepon*'}
                  isInvalid={isInvalidPhone}
                  keyboardType={'phone-pad'}
                  isRequired
                />
              </View>
              <MainButton onPress={onContinue} title={'Lanjut'}/>
            </>
          )
        }
      </View>
    </PageContainer>
  )
};
