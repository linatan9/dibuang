import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {images, icons} from '../../../../constants';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { EmptyPhotoItem } from './EmptyPhotoItem';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ModalView from '../../../../components/ModalView/ModalView';
import { MainButton } from '../../../../components/MainButton/MainButton';
import { ModalLoader } from '../../../../components/ModalLoader/ModalLoader';

export const ManagePhoto = ({uploadPhoto, isLoading, images, removePhoto}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const onLaunchCamera = () => {
    let options = {
      quality: 0.1,
      includeBase64: true,
      mediaType: 'photo',
    };
    launchCamera(options, (response) => {
      request(PERMISSIONS.ANDROID.CAMERA).then((newResult) => {}).catch(err => console.log(err, '======'));
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        uploadPhoto({name: response.fileName, uri: response.uri, type: 'image/jpeg'})
        setIsShowModal(false);
      }
    });
  };

  const onLaunchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((newResult) => {}).catch(err => console.log(err, '======'));
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setIsShowModal(false);
        uploadPhoto({name: response.fileName, uri: response.uri, type: 'image/jpeg'});
      }
    });
  };

  const openModal = () => {
    setIsShowModal(true);
  };
  return (
    <View style={styles.photoRowContainer}>
      {
        isLoading ? (
          <ModalLoader isLoading={isLoading}/>
        ) : null
      }
      {
        images.map((image, i) => (
          <View>
            <TouchableOpacity style={styles.removeIcon} onPress={() => removePhoto(i)}>
              <icons.RedCloseIcon/>
            </TouchableOpacity>
            <Image
              key={image}
              style={styles.image}
              source={{ uri: image }}
            />
          </View>
        ))
      }
      {
        images?.length < 3 ? <EmptyPhotoItem openModal={openModal}/> : null
      }
      <ModalView showModal={isShowModal} onHideModal={() => setIsShowModal(false)}>
        <>
          <MainButton title={'CAMERA'} onPress={onLaunchCamera}/>
          <MainButton title={'LIBRARY'} style={{marginTop: 15}} onPress={onLaunchImageLibrary}/>
        </>
      </ModalView>
    </View>
  )
};
