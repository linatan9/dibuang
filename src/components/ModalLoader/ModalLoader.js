import React from 'react';
import ModalView from '../ModalView/ModalView';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../constants';

export const ModalLoader = ({isLoading}) => {
  return (
    <ModalView isLoader showModal={isLoading}>
      <ActivityIndicator  color={colors.mainMediumGreen} />
    </ModalView>
  )
};
