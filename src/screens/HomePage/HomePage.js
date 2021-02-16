import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, AppState, Dimensions } from 'react-native';
import messaging from "@react-native-firebase/messaging";
import firebase from "@react-native-firebase/app";
import { PageContainer } from '../../components/PageContainer/PageContainer';
import styles from './styles';
import {images, colors} from '../../constants';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { priceConverter } from '../../helpers/helper';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

const iamgeSizeheight = Dimensions.get('window').width - 40;


export const HomePage = (props) => {
  const [isGrantedPermission, setIsGrantedPermission] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => props.getUserData());
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);

  const getWarehouses = () => {
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
  };

  useEffect(() => {
    createNotificationListeners();
    const _handleAppStateChange = (nextAppState) => {
      if (nextAppState.match(/active/)) {
        props.getUserData();
      }
      setAppState(nextAppState);
    };
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    }
  }, []);


  useEffect(() => {
    if(!props.additionalInfo.banners?.length) {
      props.getBanners();
    }
    if (!props.junkCategoryPrices) {
      props.getJunkCollection();
    }
    // props.getUserData();
  }, [props.additionalInfo.banners]);

  const createNotificationListeners = async () => {
    /*
    * Triggered when a particular notification has been received in foreground
    * */

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      const { title, body } = remoteMessage.notification;
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    messaging().onNotificationOpenedApp((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    firebase.messaging().getInitialNotification().then(initialMessage => {
    });
    /*
    * Triggered for data only payload in foreground
    * */
    messaging().onMessage(async (message) => {
      //process data message
      const { title, body } = message.data;
    }, err => console.log(err, 'ERROR'));
  };

  useEffect(() => {
    const checkLocationPermission = () => {
      if (Platform.OS === 'ios') {
        check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
          .then((result) => {
            switch (result) {
              case RESULTS.DENIED:
                request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((newResult) => {
                  if(newResult === RESULTS.GRANTED) {
                    setIsGrantedPermission(true);
                    getWarehouses();
                  }
                });
                break;
              case RESULTS.GRANTED:
                getWarehouses();
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
            }
          })
          .catch((error) => {});
      } else {
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
          .then((result) => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                console.log(
                  'This feature is not available (on this device / in this context)',
                );
                break;
              case RESULTS.DENIED:
                request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((newResult) => {
                  if(newResult === RESULTS.GRANTED) {
                    setIsGrantedPermission(true);
                    getWarehouses();
                  }
                }).catch(err => console.log(err, '======'));
                break;
              case RESULTS.GRANTED:
                getWarehouses();
                console.log('The permission is granted');
                break;
              case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
            }
          })
          .catch((error) => {
            console.log(error,' ERORO CHECK')
          });
      }
    };
    if(!isGrantedPermission) {
      checkLocationPermission();
    }
  }, [isGrantedPermission]);
  const MainInfo = () => (
    <View style={styles.mainInfoContainer}>
      <View>
        <Text style={styles.nameText}>Hai, {props.userData?.fullName}</Text>
        <Text style={styles.balanceText}>Balance Anda</Text>
      </View>
      <Text style={styles.balanceValueText}>Rp {priceConverter(props.userData.balanceInCents / 100, '.')}</Text>
    </View>
  );
  const MainAction = ({image, image2, color, title, routeName}) => (
    <TouchableOpacity style={styles.mainActionContainer} onPress={() => routeName && props.navigation.navigate(routeName)}>
      <View style={{position: 'relative'}}>
        {image}
      </View>
      <Text style={[styles.mainActionTitleText, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );

  const onPress = (banner) => {
    props.navigation.navigate('BannersListPage', {mainBanner: banner})
  };

  const renderBannerItem = ({item, index}) => {
    console.log(item, 'ITEM=====');
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <Image
          key={index}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{uri: item.image?.url}}
        />
      </TouchableOpacity>
    )
  };

  return (
    <PageContainer {...props} isHomePage={true}>
      <View style={styles.container}>
        <MainInfo/>
        <View style={styles.mainActionsRow}>
          <MainAction routeName={'CollectionRequestPage'} title="Panggil" color={colors.mainDarkGreen} image={<images.CallCar/>}/>
          <MainAction routeName={'WithdrawalPage'} title="Penarikan" color={colors.mainOrange} image={<images.Withdraw/>}/>
          <MainAction routeName={'WareHousePage'}title="Lokasi Buang" color={colors.mainBlue} image={<images.DumpLocation/>}/>
        </View>
        {
          props.additionalInfo?.banners?.length ?
            <View style={styles.bannerImageSize}>
              <View style={styles.promotionTitlesRow}>
                <Text style={styles.promotionTitleText}>Promosi</Text>
              </View>
                {
                  props.additionalInfo?.banners ?
                 <Carousel
                   layoutCardOffset={3}
                   layout={'default'}
                   data={props.additionalInfo?.banners}
                   renderItem={renderBannerItem}
                   sliderWidth={iamgeSizeheight}
                   itemWidth={iamgeSizeheight * 0.8}
                 /> : null
                }
            </View> : null
        }
      </View>
    </PageContainer>
  )
};
