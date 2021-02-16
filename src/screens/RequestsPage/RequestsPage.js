import React, {useState, useEffect, useMemo} from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import {images, icons} from '../../constants';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { RequestTitleStatuses } from './RequestTitleStatuses';
import { OREDER_STATUS, RESPONSE_CODES } from '../../constants/data';
import { EmptyOrdersList } from './EmptyOrdersList';
import { OrderItem } from './OrderItem';
import colors from '../../constants/colors';
import { SucessModal } from './SucessModal/SucessModal';

export const RequestsPage = (props) => {
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    const unsubscribeBlur = props.navigation.addListener('blur', () => {
      props.setCheckedItemStatus(OREDER_STATUS.PENDING);
    });

    return () => {
      unsubscribeBlur && unsubscribeBlur();
    }
  }, []);

  const getOrders = (status) => {
    if (status) {
      props.getJunkCollectionOrdersList(status).then(response => {
        if (response?.code === RESPONSE_CODES.JUNK_EMPTY_RESULT) {
          setOrdersList([]);
        } else if(response?.code === RESPONSE_CODES.SUCCESS){
          setOrdersList(response.data);
        }
      });
    }
  };

  useMemo(() => getOrders(props.checkedItemStatus), [props.checkedItemStatus]);


  return (
    <PageContainer horizontalPadding={0} title={'Pesanan Saya'} {...props} isBackButton={false}>
      <View style={styles.requestItemsRow}>
        <View style={styles.coverTopShadow}/>
        <RequestTitleStatuses onChange={props.setCheckedItemStatus} checkedStatus={props.checkedItemStatus}/>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
            {
              props.isLoading ? (
                <View style={{width: '100%', height: 300, alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator  color={colors.mainMediumGreen} />
                </View>
              ) : ordersList.length === 0 ? (
                <EmptyOrdersList/>
              ) : (
                ordersList.map((order, i) => (
                  <OrderItem key={i} order={order} navigation={props.navigation}/>
                ))
              )
            }
        </View>
      </ScrollView>
      <SucessModal
        isShowModal={props.showSuccessCreateOrderPopup}
        onConfirm={() => props.showSuccessCreateOrder(false)}
      />
    </PageContainer>
  )
};
