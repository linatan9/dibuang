import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import { MainHeader } from '../MainHeader/MainHeader';
import { HomeHeader } from '../HomeHeader/HomeHeader';

export const PageContainer = (props) => {
  return (
    <SafeAreaView style={[styles.container, {paddingRight: props.horizontalPadding ===0 ? 0 : 20, paddingLeft: props.horizontalPadding ===0 ? 0 : 20}]}>
      {
        props.isHomePage ? (
          <HomeHeader horizontalPadding={props.horizontalPadding}/>
        ) : (
          <MainHeader
            iconRoute={props.iconRoute}
            icon={props.icon}
            horizontalPadding={props.horizontalPadding}
            isBackButton={props.isBackButton}
            title={props.title}
            navigation={props.navigation}
            customBackHandler={props.customBackHandler}
          />
        )
      }
      {props.children}
    </SafeAreaView>
  )
};
