import React, { useState } from 'react';
import styles from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const GoogleMaps = ({region, googleRefMap, onRegionChange}) => {

  const [marginPaddingMap, setMarginPaddingMap] = useState(1);

  const _onMapReady = () => {
    setTimeout(() => {
      setMarginPaddingMap(10);
    },3000);
  };
  return (
    <MapView
      style={[styles.map, {marginBottom: marginPaddingMap, paddingBottom: marginPaddingMap, height: '65%'}]}
      onMapReady={_onMapReady}
      ref={googleRefMap}
      region={region}
      provider={PROVIDER_GOOGLE}
      mapType={'standard'}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      onRegionChangeComplete={onRegionChange}
      showsScale
    >
    </MapView>
  )
};
