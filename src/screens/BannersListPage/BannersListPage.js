import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, RefreshControl, Image, Dimensions } from 'react-native';
import styles from './styles';
import {images} from '../../constants';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { PAYMENTS_LIST, RESPONSE_CODES, WITHDRAW_STATUS, WITHDRAW_STATUS_COLORS } from '../../constants/data';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';
import { priceConverter } from '../../helpers/helper';
import moment from 'moment';

const EmptyWitdraw = () => {
  return (
    <View style={styles.emptyWIthdrawsContainer}>
      <images.EmptyWithdraws/>
      <Text style={styles.emptyWithdrawTitle}>Tidak Ada Riwayat</Text>
      <Text style={styles.emptyWithdrawSubTitle}>Anda belum pernah melakukan penukaran</Text>
    </View>
  )
};
const iamgeSizeheight = ((Dimensions.get('window').width - 40) * 0.75 * 0.6);
const BannerItem = ({banner, index}) => {
  return (
    <View style={styles.bannerItemContainer}>
      <View style={styles.bannerNumberContainer}>
        <Text style={styles.bannerNumber}>{index}</Text>
      </View>
      <Image
        resizeMode="contain"
        style={{
          width: '60%',
          height: iamgeSizeheight,
        }}
        source={{ uri: banner.image?.url }}
      />
      <Text style={styles.bannerDescription}>{banner.description}</Text>
    </View>
  )
};

export const BannersListPage = (props) => {
  const mainBanner =  props.route?.params?.mainBanner;
  return (
    <PageContainer title={mainBanner?.title} {...props}>
        <ScrollView
          style={{flex: 1}}
        >
          <View style={styles.container}>
            {
              mainBanner.contents?.map((banner, i) => (
                <BannerItem key={i} banner={banner} index={i + 1}/>
              ))
            }
          </View>
        </ScrollView>
    </PageContainer>
  )
};
