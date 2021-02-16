import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {colors} from '../../constants';

export const MainInput = ({
  style, onChange, value, prefix, maxLength, placeholder, isInvalid, isValid, isRequired, keyboardType = 'default', example, disabled, multiline
}) => {
  return (
    <View style={{width: '100%'}}>
      <View style={[styles.container, [style, isInvalid ? styles.invalidContainer : {}]]}>
        <View style={[styles.inputContainer, {backgroundColor: disabled ? colors.borderInputGrayColor : 'white'}]}>
          <TextInput
            placeholderTextColor={colors.lightGray}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            maxLength={maxLength || 300}
            keyboardType={keyboardType}
            editable={!disabled}
            multiline={multiline}
          />
        </View>
      </View>
      {isRequired && isInvalid && <Text style={styles.requiredText}>Bidang wajib diisi*</Text>}
      {example && <Text style={styles.exampleText}>{example}</Text>}
    </View>
  )
};
