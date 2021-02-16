import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {images, colors, icons} from '../../constants';
import { AuthTopTitle } from '../../components/AuthTopTitle/AuthTopTitle';
import { MainButton } from '../../components/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { MainInput } from '../../components/MainInput/MainInput';
import { PAYMENTS_LIST, RESPONSE_CODES } from '../../constants/data';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';
import { MainSelect } from '../../components/MainSelect/MainSelect';
import { priceConverter } from '../../helpers/helper';
import { PrefixInput } from '../../components/PrefixInput/PrefixInput';

const defaulFormData = {
  amountInCents: 0,
  financialProvider: null,
  accountNumber: ''
};

const defaultValidState = {
  isValidAccount: true,
  isValidAmount: true,
  isValidProvider: true,
  isValidForm: true,
};

export const WithdrawalPage = (props) => {
  const [withdrawalFormData, setWithdrawalFormData] = useState(defaulFormData);
  const [validFormState, setValidFormState] = useState(defaultValidState);
  const [isShowDropDownBody, setIsShowDropDownBody] = useState(false);

  useEffect(() => {
    props.getUserData();
  }, []);

  const validateForm = () => {
    const copyState = {...validFormState};
    if(!withdrawalFormData.financialProvider) {
      copyState.isValidProvider = false;
    }
    if(!withdrawalFormData.amountInCents || withdrawalFormData.amountInCents === 0) {
      copyState.isValidAmount = false;
    }
    if(!withdrawalFormData.accountNumber) {
      copyState.isValidAccount = false;
    }
    copyState.isValidForm = copyState.isValidProvider && copyState.isValidAmount && copyState.isValidAccount;
    setValidFormState(copyState);
    return copyState.isValidForm;
  };

  const onChangeFormData = (value, field) => {
    if (field === 'amountInCents') {
      value = priceConverter(value, '.');
    }
    setWithdrawalFormData({...withdrawalFormData, ...{[field]: value}});
  };

  const onWithdraw = () => {
    if (validateForm()) {
      const copyData = {
        ...withdrawalFormData,
        ...{
          accountNumber: withdrawalFormData.accountNumber.toString(),
          financialProvider: withdrawalFormData.financialProvider.key,
          amountInCents: withdrawalFormData.amountInCents.replace(/\./g, '') * 100,
        }
      };
      props.withdraw(copyData).then(response => {
        if(response?.code === RESPONSE_CODES.SUCCESS) {
          setWithdrawalFormData(defaulFormData);
          props.navigation.navigate('WithdrawHistoryListPage');
        }
      })
    }
  };

  return (
    <PageContainer iconRoute={'WithdrawHistoryListPage'} icon={<icons.WithdrawalHistory/>} title={'Penarikan'} {...props}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.dataContainer}>
              <Text style={styles.dataTitle}>Balance Anda</Text>
              <Text style={styles.amountText}>Rp {priceConverter(props.userData.balanceInCents / 100, '.')}</Text>
            </View>
            <MainSelect
              onChange={onChangeFormData}
              fieldName={'financialProvider'}
              value={withdrawalFormData.financialProvider}
              valuesList={PAYMENTS_LIST}
              placeholder={'Bank'}
              isRequired
              isInvalid={!validFormState.isValidProvider}
              onOpen={status => setIsShowDropDownBody(status)}
            />
            {
              !isShowDropDownBody ? (
                <>
                  <MainInput
                    style={{marginTop: 15}}
                    isRequired
                    isInvalid={!validFormState.isValidAccount}
                    value={withdrawalFormData.accountNumber}
                    placeholder={'Account Number'}
                    keyboardType={'numeric'}
                    onChange={value => onChangeFormData(value, 'accountNumber')}
                  />
                  <PrefixInput
                    keyboardType={'decimal-pad'}
                    style={{marginTop: 15, width: '100%'}}
                    isRequired
                    isInvalid={!validFormState.isValidAmount}
                    value={withdrawalFormData.amountInCents}
                    prefix={'Rp'}
                    placeholder={'Jumlah Uang'}
                    onChange={value => onChangeFormData(value, 'amountInCents')}
                    example={'Min. penarikan Rp 50.000, maks. penarikan Rp 1.000.000'}
                  />
                </>
              ) : null
            }
            <View style={{flex: 1, width: '100%', justifyContent: 'flex-end'}}>
              <MainButton style={{marginTop: 50}} onPress={onWithdraw} title={'Tarik'}/>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </PageContainer>
  )
};
