import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import styles from './styles';
import { MainButton } from '../../components/MainButton/MainButton';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import {colors, images, icons} from '../../constants';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import ModalView from '../../components/ModalView/ModalView';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ManageAddressForm } from './ManageAddressForm';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';
import { AddressItem } from './AddressItem';
import { RESPONSE_CODES } from '../../constants/data';
import { GoogleMaps } from './GoogleMaps';
import Geolocation from '@react-native-community/geolocation';

const ADDRESS_NAMES = {
  region: 'administrative_area_level_1',
  city: 'administrative_area_level_2',
  district: 'administrative_area_level_3',
  subDistrict: 'administrative_area_level_4',
  fullAddress: 'formatted_address',
  streetName: 'route',
  streetNumber: 'street_number',
  country: 'country'

};

const defaultAddressDataForm = {
  label: '', //optional
  contactName: '',  //optional
  contactNumber: '',  //optional
  longLat: [0, 0],
  postalCode: '',
  country: '',
  city: '',
  district: '',
  subDistrict: '',
  streetName: '',
  streetNumber: '',
  fullAddress: '',
  notes: '',
  region: '',
  isPrimary: false,
};

const defaultPos = {
  latitude: -6.121435,
  longitude: 106.774124,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export const ManageAddressPage = (props) => {
  const [isShowManageForm, setIsShowManageForm] = useState(false);
  const [isFocusAutoComplete, setIsFocusAutoComplete] = useState(false);
  const [addressFormData, setAddressFormData] = useState(defaultAddressDataForm);
  const [addressFromSearch, setAddressFromSearch] = useState(null);
  const googleRef = useRef(null);
  const googleRefMap = useRef(null);
  const [isShowMap, setIsShowMap] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [region, setRegion] = useState(defaultPos);
  const isComeFromProfile = props.route?.params?.isComeFromProfile;
  const [editAddressIndex, setEditAddresIndex] = useState(null);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      try {
        Geolocation.getCurrentPosition(pos => {
            const {longitude, latitude} = pos.coords;
            setRegion({
              ...defaultPos,
              ...{longitude: longitude, latitude: latitude}
            });
          },
          err => console.log(err),
          {timeout: 60000, maximumAge: 0, enableHighAccuracy: true});
      } catch (e) {
        alert(`Can't fetch location`);
      }
    });
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);

  const onChangeFormAddressData = (field, value) => {
    setAddressFormData({...addressFormData, ...{[field]: value}});
  };

  const onRegionChange = (newregion) => {
    if (newregion.longitude.toFixed(7) !== region?.longitude.toFixed(7) || newregion.latitudeDelta.toFixed(7) !== region?.latitudeDelta.toFixed(7)) {
      setRegion(newregion);
      setIsloading(true);
      setTimeout(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${newregion.latitude},${newregion.longitude}&key=AIzaSyCT0vl7uj-kObrVTLMYNccxtz--4ZVWPqM`)
          .then((response) => response.json())
          .catch(err => console.log(err,' EROR FETC ADDRESS'))
          .then((responseJson) => {
            const address_components = responseJson?.results[0]?.address_components;
            if (address_components) {
              const addressdata = {};
              Object.keys(ADDRESS_NAMES).map(key => {
                const addressNew = getPartAddressByKey(address_components, ADDRESS_NAMES[key]);
                if (addressNew) {
                  addressdata[key] = addressNew.long_name
                }
              })
              addressdata.fullAddress = responseJson?.results[0]?.formatted_address;
              addressdata.longLat = [+region.longitude, +region.latitude];
              setAddressFromSearch(addressdata);
            }
            setIsloading(false);
          });
      }, 300)
    }
  };

  const onChooseAutoCompleteAddress = (data) => {
    googleRef?.current?.setAddressText('');
    googleRef?.current.blur();
    setTimeout(() => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.description}&key=AIzaSyDymfgoewMv7skZaoWudEo5F_oN7zpChd0`)
        .then((response) => response.json())
        .catch(err => console.log(err,' EROR FETC ADDRESS'))
        .then((responseJson) => {
          if (responseJson.results[0]?.geometry?.location) {
            const lattitude = responseJson.results[0]?.geometry?.location.lat;
            const longitude = responseJson.results[0]?.geometry?.location.lng;
            const newRegion = {
              latitude: lattitude,
              longitude: longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            };
            const timeOut = setTimeout(() => {
              clearTimeout(timeOut);
              setRegion(newRegion);
            }, 800)
          }
        });

    }, 500)
  };

  const getPartAddressByKey = (address_components, key) => {
    return address_components.find(address => {
      if (address.types.includes(key)) {
        return address;
      }
    });
  };

  const chooseAddress = () => {
    setAddressFormData({...addressFormData, ...addressFromSearch});
    setIsShowMap(false);
  };

  const addAddress = () => {
    let addressesCopy = [...props.userData.addresses];
    if(addressFormData.isPrimary) {
      addressesCopy = addressesCopy.map(address => {
        address.isPrimary = false;
        return address;
      });
    }
    if(editAddressIndex){
      addressesCopy[editAddressIndex] = addressFormData;
    } else {
      addressesCopy.push(addressFormData);
    }
    props.patchUserData({addresses: addressesCopy}).then(response => {
      if(response?.code === RESPONSE_CODES.SUCCESS) {
        setAddressFromSearch(null);
        setAddressFormData(defaultAddressDataForm);
        setIsShowManageForm(false);
        setEditAddresIndex(null);
      }
    });
  };

  const onChangePrimary = (index, value) => {
    const addressesCopy = [...props.userData.addresses].map((address, i) => {
      if (i !== index && address.isPrimary && value) {
        address.isPrimary = false;
      } else if (i === index){
        address.isPrimary = value;
      }
      return address;
    });
    props.patchUserData({addresses: addressesCopy});
  };

  const onDeleteAddress = (index) => {
    if (props.userData.addresses?.length === 1) {
      props.patchUserData({addresses: []});
    } else {
      const addressesCopy = [...props.userData.addresses].splice(index, 1);
      props.patchUserData({addresses: addressesCopy});
    }
  };

  const onEditAddress = (index) => {
    setEditAddresIndex(index);
    const address = props.userData.addresses[index];
    setAddressFormData(address);
    const adressSearch = {};
    Object.keys(ADDRESS_NAMES).map(key => {
      adressSearch[key] = address[key];
    });
    const newRegion = {...defaultPos, ...{latitude: address.longLat[1], longitude: address.longLat[0]}};
    setRegion(newRegion);
    setAddressFromSearch(adressSearch);
    setIsShowManageForm(true);
  };

  const onCancelSearch = () => {
    googleRef?.current?.setAddressText('');
    googleRef?.current.blur();
    const timeOut = setTimeout(() => {
      setIsShowMap(false);
      clearTimeout(timeOut);
    }, 300);
  };

  return (
    <PageContainer title={'Pilih Alamat'} {...props}>
      {
        <>
        {(props.isLoading || isLoading) && <ModalLoader isLoading={props.isLoading || isLoading}/>}

            {
              !isShowMap ? (
                <ScrollView keyboardShouldPersistTaps='handled'>
                  <View style={styles.container}>

                    {
                      !props.userData?.addresses?.length && !isShowManageForm ? (
                        <View style={styles.emptyAddressesContainer}>
                          <images.ManageAddress/>
                          <Text style={styles.emptyAddressesTitle}>Tidak Ada Alamat</Text>
                          <Text style={styles.emptyAddressesSubTitle}>Anda belum pernah memasukkan alamat</Text>
                        </View>
                      ) : !isShowManageForm ? (
                        props.userData?.addresses.map((address, i) => (
                          <AddressItem
                            onEdit={onEditAddress}
                            onDelete={onDeleteAddress}
                            onChangePrimary={onChangePrimary}
                            index={i}
                            key={i}
                            address={address}
                            onChoseAddress={props.choseAddress}
                            navigation={props.navigation}
                            isComeFromProfile={isComeFromProfile}
                          />
                        ))
                      ) : null
                    }
                    {
                      isShowManageForm ?
                        <ManageAddressForm
                          onChangeFormAddressData={onChangeFormAddressData}
                          addressFormData={addressFormData}
                          setIsShowMap={setIsShowMap}
                        />
                        : null
                    }
                    {
                      !isShowManageForm ? (
                        <MainButton
                          onPress={() =>  setIsShowManageForm(true)}
                          title={'Tambah Alamat'}
                          style={{width: !props.userData?.addresses?.length ? '60%' : '100%', marginTop: 20}}
                        />
                      ) : (
                        <MainButton
                          onPress={addAddress}
                          title={'Simpan'}
                          style={{width: !props.userData?.addresses?.length ? '60%' : '100%', marginTop: 20}}
                        />
                      )
                    }
                  </View>

                </ScrollView>
              ) : null
            }
            <ModalView fullSize={true} onHideModal={() => setIsShowMap(false)} showModal={isShowMap}>
              {
                !isFocusAutoComplete ?
                  <GoogleMaps
                    googleRefMap={googleRefMap}
                    onRegionChange={onRegionChange}
                    region={region}
                  />
                 : null
              }
              <View style={{height: isFocusAutoComplete ? '100%' : '45%', top: isFocusAutoComplete ? '-5%' : '50%', borderTopRightRadius: 15, borderTopLeftRadius: 15, backgroundColor: 'white', padding: 20, justifyContent: 'space-between'}}>
                <Text style={styles.autoCompleteTitle}>Pilih titik lokasi</Text>
                <GooglePlacesAutocomplete
                  ref={googleRef}
                  placeholder={'Cari Alamat'}
                  minLength={2} // minimum length of text to search
                  autoFocus={false}
                  textInputProps={{
                    onFocus: () => {setIsFocusAutoComplete(true)},
                    onBlur: () => {setIsFocusAutoComplete(false)},
                  }}
                  returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                  keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                  keyboardShouldPersistTaps="always"
                  numberOfLines={3}
                  listViewDisplayed='false'    // true/false/undefined
                  fetchDetails={true}
                  renderDescription={row => row.description} // custom description render
                  onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  }}
                  renderRow={rowProps => (
                    <TouchableOpacity {...rowProps} onPress={() => onChooseAutoCompleteAddress(rowProps)}>
                      <Text style={[styles.searchRow, {marginBottom: 5, fontWeight: 'bold'}]}>{rowProps.terms[0].value}</Text>
                      <Text style={styles.searchRow}>{rowProps.description.replace(`${rowProps.terms[0].value}, `, '')}</Text>
                    </TouchableOpacity>
                  )}
                  getDefaultValue={() => ''}
                  query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyCT0vl7uj-kObrVTLMYNccxtz--4ZVWPqM',
                    language: 'en', // language of the results
                    region: "IDN",
                    components: 'country:idn'
                  }}
                  styles={{
                    listView: {

                    },
                    row: {
                      backgroundColor: 'white',
                    },
                    textInput: {
                      borderColor: colors.lightGray,
                      borderWidth: 1
                    }
                  }}
                  nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                  GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                  }}
                  GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    type: 'cafe'
                  }}
                  GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'formatted_address',
                  }}
                  debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                />
                {
                  addressFromSearch?.fullAddress ? <View>
                    <Text style={styles.streetNameText}>{addressFromSearch?.streetName}</Text>
                    <Text style={styles.fullAddressText}>{addressFromSearch?.fullAddress}</Text>
                  </View> : null
                }
                <View style={styles.autoCompleteActionsRow}>
                  <MainButton title={'Gunakan Lokasi'} style={{marginTop: 20, width: '45%'}} onPress={chooseAddress}/>
                  <MainButton isNonFill title={'Cancel'} style={{marginTop: 20, width: '45%'}} onPress={onCancelSearch}/>
                </View>
              </View>
              {
                !isFocusAutoComplete ? <>
                  <icons.LocationOnMap style={{ alignSelf: 'center', width: 20, height: 20, position: 'absolute', top: '29%', left: '48%', zIndex: 10000}}/>
                  <TouchableOpacity style={styles.backMapButtonContainer} onPress={() => setIsShowMap(false)}>
                    <icons.BackButtonAndroid style={{width: 15, height: 15}}/>
                  </TouchableOpacity>
                </> : null
              }
            </ModalView>

        </>
      }
    </PageContainer>
  )
};
