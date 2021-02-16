import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import {images, icons} from '../../../../constants';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export const EmptyPhotoItem = ({openModal}) => {
  const [isGrantedPermission, setIsGrantedPermission] = useState(false);
  useEffect(() => {
    const requestCameraPermission = () => {
      if (Platform.OS === 'ios') {
        request(PERMISSIONS.IOS.CAMERA).then((newResult) => {
          if(newResult === RESULTS.GRANTED) {
            setIsGrantedPermission(true);
          }
        }).catch(err => console.log(err, '======'));;
      } else {
        request(PERMISSIONS.ANDROID.CAMERA).then((newResult) => {
          if(newResult === RESULTS.GRANTED) {
            setIsGrantedPermission(true);
          }
        }).catch(err => console.log(err, '======'));
      }
    };
    const checkCameraPermissoin = () => {
      if (Platform.OS === 'ios') {
        check(PERMISSIONS.IOS.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.GRANTED:
                setIsGrantedPermission(true);
                break;
            }
          })
          .catch((error) => {});
      } else {
        check(PERMISSIONS.ANDROID.CAMERA)
          .then((result) => {
            switch (result) {
              case RESULTS.GRANTED:
                setIsGrantedPermission(true);
                break;
            }
          })
          .catch((error) => {
            console.log(error,' ERORO CHECK')
          });
      }
    };
    if(!isGrantedPermission) {
      checkCameraPermissoin();
    } else {
      requestCameraPermission();
    }
  }, []);

  return (
    <TouchableOpacity style={styles.emptyPhotoContainer} onPress={openModal}>
      <icons.Photo/>
      <Text style={styles.emptyPhotoText}>Maks. 3 photo</Text>
    </TouchableOpacity>
  )
};
