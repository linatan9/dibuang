import React, {useEffect} from 'react';
import { View, Linking } from 'react-native';
import styles from './styles';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import Geolocation from '@react-native-community/geolocation';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';
import { WareHouseItem } from './WareHouseItem';


export const WareHousePage = (props) => {

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      if (!props.wareHouses) {
        try {
          Geolocation.getCurrentPosition(pos => {
              const {longitude, latitude} = pos.coords;
              if (longitude && latitude) {
                props.getWareHouses({longitude, latitude});
              }
            },
            err => console.log(err),
            {timeout: 60000, maximumAge: 0, enableHighAccuracy: true});
        } catch (e) {
          alert(`Can't fetch location`);
        }
      }
    });
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);

  const openNavigation = (address) => {
    const iosUrl = `maps://app?daddr=${address}`;
    const androidUrl = `google.navigation:q=${address}`;
    Linking.canOpenURL(androidUrl).then(() => {
      Linking.openURL(androidUrl)
    }).catch(() => {
      Linking.openURL(iosUrl);
    })
  };

  return (
    <PageContainer title={'Lokasi Pembuangan'} {...props}>
      <View style={styles.container}>
        {
          props.isLoading ? (
            <ModalLoader isLoading={props.isLoading}/>
          ) : (
            <>
              {
                props.wareHouses?.map((wareHouse, i) => (
                  <WareHouseItem onPress={openNavigation} key={i} wareHouse={wareHouse} />
                ))
              }
            </>
          )
        }
      </View>
    </PageContainer>
  )
};
