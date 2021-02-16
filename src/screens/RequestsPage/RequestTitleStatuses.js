import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Dimensions} from 'react-native';
import { COLLECTION_JUNK_STATUSES_NAMES, OREDER_STATUS } from '../../constants/data';
import styles from './styles';
import {colors} from '../../constants';


export const RequestTitleStatuses = ({onChange, checkedStatus}) => {
  const [checkedItem, setCheckedItem] = useState(COLLECTION_JUNK_STATUSES_NAMES[checkedStatus]);
  const scrollRef = useRef(null);

  useEffect(() => {
    setCheckedItem(COLLECTION_JUNK_STATUSES_NAMES[checkedStatus]);
    if (checkedStatus === OREDER_STATUS.MEMBER_CANCELLED) {
      scrollRef?.current?.scrollTo({x: 600, y: 0, animated: true})
    } else if ((checkedStatus === OREDER_STATUS.PENDING)){
      scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true})
    }
  }, [checkedStatus]);

  const changeStatus = (requestKey, status) => {
    onChange(status);
  };
  return (
    <ScrollView scrollToOverflowEnabled={true} ref={scrollRef} horizontal={true}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', minWidth: (Dimensions.get('window').width - 40)}}>
      {
        Object.keys(COLLECTION_JUNK_STATUSES_NAMES).map((key, i) => (
            <TouchableOpacity key={i} style={styles.statusItem} onPress={() => changeStatus(COLLECTION_JUNK_STATUSES_NAMES[key], key)}>
              <Text style={[styles.statusItemText, {color: checkedItem === COLLECTION_JUNK_STATUSES_NAMES[key] ? 'black' : colors.lightGray}]}>
                {COLLECTION_JUNK_STATUSES_NAMES[key]}
                </Text>
              {
                checkedItem === COLLECTION_JUNK_STATUSES_NAMES[key] ? (
                  <View style={styles.checkedStatusLine}/>
                ) : null
              }
            </TouchableOpacity>
        ))
      }
      </View>
    </ScrollView>
  )
};
