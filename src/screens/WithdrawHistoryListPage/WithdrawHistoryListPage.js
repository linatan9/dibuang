import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, RefreshControl } from 'react-native';
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

const WithDrawItem = ({withdraw}) => {
  const withdrawIconObj = PAYMENTS_LIST.find(payment => payment.key === withdraw.financialProvider)
  const offset = new Date().getTimezoneOffset() * -1;
  return (
    <View style={styles.withdrawItemContainer}>
      <View style={{marginTop: 5}}>
        {withdrawIconObj.icon}
      </View>
      <View style={styles.withdrawItemDetailsContainer}>
        <Text style={styles.withdrawItemAmountText}>Rp {priceConverter(withdraw.oyDisbursement.amount, '.')}</Text>
        <Text style={styles.withdrawItemPhoneText}>{withdraw.accountNumber}</Text>
        <Text style={styles.withdrawItemDateText}>{moment(withdraw.createdDate).add(offset / 60, 'h').format('D MMM, YYYY HH:mm')}</Text>
      </View>
      <View style={styles.withdrawItemStatusContainer}>
        <Text style={[styles.withdrawItemStatusText, {color: WITHDRAW_STATUS_COLORS[withdraw?.status]}]}>{WITHDRAW_STATUS[withdraw?.status]}</Text>
      </View>
    </View>
  )
};

export const WithdrawHistoryListPage = (props) => {
  const [withdrawsList, setWithDrwasList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    setRefreshing(true);
    props.getWitdraws().then(response => {
      if (response?.code === RESPONSE_CODES.SUCCESS) {
        setWithDrwasList(response.data);
      }
      setRefreshing(false);
    })
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    props.getWitdraws().then(response => {
      if (response?.code === RESPONSE_CODES.SUCCESS) {
        setRefreshing(false);
        setWithDrwasList(response.data);
      }
    });
  }, []);

  return (
    <PageContainer horizontalPadding={0} title={'Riwayat Penukaran'} {...props}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {
            refreshing ? (
              null
            ) : (
              <View style={styles.container}>
                {
                  !withdrawsList?.length ? (
                      <EmptyWitdraw/>
                  ) : (
                    withdrawsList.map(withdraw => (
                       <WithDrawItem withdraw={withdraw}/>
                    ))
                  )
                }
              </View>
            )
          }
        </ScrollView>
      </KeyboardAvoidingView>
    </PageContainer>
  )
};
