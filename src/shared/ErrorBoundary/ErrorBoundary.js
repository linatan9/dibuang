import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import styles from './styles';
import { RESPONSE_CODES } from '../../constants/data';
import AsyncStorage from "@react-native-community/async-storage";
import { deleteToken } from '../../api';

export const ErrorBoundary = (props) => {
  const {errorType, errorMessage, onClearError} = props;
  const dropDownAlertRef = useRef(null);

  useEffect(() => {
    if (props.errorMessage?.code === RESPONSE_CODES.AUTHENTICATION_HEADERS_MISSING || props.errorMessage?.status === 401) {
      AsyncStorage.clear().then(() => {
        props?.logout();
        deleteToken();
        props.navigationRef && props.navigationRef.navigate('Login');
      })
    }
    if (props.errorType === 'error' && props.errorMessage !== null) {
      dropDownAlertRef.current.alertWithType(
        errorType,
        errorMessage.title || 'Error',
        errorMessage.errors || errorMessage.message,
      );
    }

    if (props.errorType === 'success' && props.errorMessage !== null) {
      dropDownAlertRef.current.alertWithType(props.errorType, 'Success', props.errorMessage);
    }
    const t = setTimeout(() => {
      props.onClearError();
      clearTimeout(t);
    }, 3000);
  }, [props.errorType, props.errorMessage]);


  return (
    <View style={styles.container}>
      {props.children}
      <DropdownAlert
        containerStyle={{height: 200}}
        ref={dropDownAlertRef}
        updateStatusBar={false}
        action={'tap'}
      />
    </View>
  );
};

export default ErrorBoundary;
