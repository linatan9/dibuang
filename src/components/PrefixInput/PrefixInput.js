import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {colors} from '../../constants';

export const PrefixInput = ({
  style, onChange, value, prefix, maxLength, placeholder, isInvalid, isRequired, keyboardType = 'default', example
}) => {
  return (
    <View>
      <View style={[styles.container, [style, isInvalid ? styles.invalidContainer : {}]]}>
        <View style={[styles.prefixContainer, isInvalid ? styles.invalidPrefix : {}]}>
          <Text style={styles.prefixText}>{prefix}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={colors.lightGray}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            maxLength={maxLength || 20}
            keyboardType={keyboardType}
          />
        </View>
      </View>
      {isRequired && isInvalid && <Text style={styles.requiredText}>Bidang wajib diisi*</Text>}
      {example && <Text style={styles.exampleText}>{example}</Text>}
    </View>
  )
};
