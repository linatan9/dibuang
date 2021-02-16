import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {colors, icons} from '../../constants';

export const MainSelect = ({
  style, onChange, value, valuesList, placeholder, isInvalid, isValid, isRequired, disabled, fieldName, clearValue, onOpen
}) => {
  const [isShowDropDownBody, setIsShowDropDownBody] = useState(false);
  const onClick = (newValue) => {
    onDropDownChangeStatus(false);
    onChange(newValue, fieldName);
  };
  const onDropDownChangeStatus = (status) => {
    onOpen && onOpen(status);
    setIsShowDropDownBody(status);
  };
  return (
    <>
      <TouchableOpacity onPress={() => onDropDownChangeStatus(true)} style={{width: '100%', height: 50 }}>
        <View style={[styles.container, [style, isInvalid ? styles.invalidContainer : {}]]}>
          {
            !(value) ? (
              <View style={[styles.inputContainer, {backgroundColor: disabled ? colors.borderInputGrayColor : 'white'}]}>
                <Text style={styles.placeholer}>{placeholder}</Text>
                <icons.ArrowDown/>
              </View>
            ) : (
              <View style={[styles.dropDownItem, {paddingRight: 0, paddingLeft: 0}]}>
                  {value.icon || null}
                  <Text style={styles.dropDowItemText}>
                    {value.name}
                  </Text>
                <TouchableOpacity onPress={() => onClick(null)} style={{flex: 1, alignItems: 'flex-end'}}>
                  <icons.RedCloseIcon/>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
        {isRequired && isInvalid && <Text style={styles.requiredText}>Bidang wajib diisi*</Text>}
      </TouchableOpacity>
      {
        isShowDropDownBody ? <View style={styles.dropDownBody}>
          {
            valuesList?.length ? valuesList.map((listValue, i) => (
              <TouchableOpacity key={i} onPress={() => onClick(listValue)} style={styles.dropDownItem}>
                {listValue.icon || null}
                <Text style={styles.dropDowItemText}>
                  {listValue.name}
                </Text>
              </TouchableOpacity>
            )) : null
          }
        </View> : null
      }
    </>
  )
};
