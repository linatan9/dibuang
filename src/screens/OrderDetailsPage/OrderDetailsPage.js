import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import {colors, icons} from '../../constants';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { OrderStatus } from './OrderStatus';
import { TrashItem } from './components/TrashItem/TrashItem';
import { RequestTotalPriceInfo } from '../CollectionRequestPage/components/RequestTotalPriceInfo/RequestTotalPriceInfo';
import { UserDetails } from './components/UserDetails/UserDetails';
import { MainButton } from '../../components/MainButton/MainButton';
import { ModalLoader } from '../../components/ModalLoader/ModalLoader';
import { MODAL_NAMES, ORDERS_STATUS_ITEMS, OREDER_STATUS, RESPONSE_CODES } from '../../constants/data';
import { CollectorItem } from './components/CollectorItem/CollectorItem';
import { AirbnbRating } from 'react-native-ratings';
import { MainInput } from '../../components/MainInput/MainInput';

export const OrderDetailsPage = (props) => {
  const [order, setOrder] = useState(props.route?.params?.order);
  const isShowCollectorInfo = order?.status !== OREDER_STATUS.PENDING && order?.status !== OREDER_STATUS.MEMBER_CANCELLED;
  const isShowRating = order?.status === OREDER_STATUS.STAFF_REDEEMED;
  const [isShowReviewContent, setIsSHowReviewContent] = useState(false);
  const [reviewData, setReviewData] = useState({
    collectorRating: 0,
    collectorReview: '',
  });

  const onChangeReviewData = (key, value) => {
    if (key === 'collectorRating') {
      setIsSHowReviewContent(true);
    }
    setReviewData({...reviewData, ...{[key]: value}});
  };

  const onSaveReviewData = () => {
    props.sendCollectorReview(order.id, reviewData).then(response => {
      if (response?.code === RESPONSE_CODES.SUCCESS) {
        setOrder(response.data);
      }
      setIsSHowReviewContent(false);
    })
  };

  const onCancelOrder = (orderId) => {
    props.cancelOrder(orderId).then(response => {
      if(response?.code === RESPONSE_CODES.SUCCESS) {
        Promise.resolve(props.navigation.goBack()).then(() => {
          props.setCheckedItemStatus(null);
          props.setCheckedItemStatus(OREDER_STATUS.MEMBER_CANCELLED);
          props.navigation.navigate('Pesanan');
        });
      }
    })
  };

  const onBackFromDetails = () => {
    Promise.resolve(props.navigation.goBack()).then(() => {
      props.setCheckedItemStatus(null);
      props.setCheckedItemStatus(order.status);
      props.navigation.navigate('Pesanan');
    });
  };
  return (
    <PageContainer customBackHandler={onBackFromDetails} horizontalPadding={0} title={'Detil Pesanan'} {...props} >
      {
        props.isLoading ? (
          <ModalLoader isLoading={props.isLoading}/>
        ) : null
      }
        <>
          {ORDERS_STATUS_ITEMS[order.status] ? <OrderStatus status={order.status}/> : null}
          <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
              {
                !isShowReviewContent ? <View style={styles.orderNumberContainer}>
                  <Text style={styles.orderNumberTitle}>Kode Pesanan</Text>
                  <Text style={styles.orderNumberText}>{order.code}</Text>
                </View> : null
              }
              {
                isShowRating ? (
                  <View style={styles.reviewContainer}>
                    {
                      order?.collectorRating ? <View
                        style={{height: '100%', width: '100%', position: 'absolute', backgroundColor: 'transparent', zIndex: 100}}
                      /> : null
                    }
                    <AirbnbRating
                      ratingCount={10}
                      imageSize={10}
                      reviews={[]}
                      defaultRating={order?.collectorRating || 0}
                      onFinishRating={rating => onChangeReviewData('collectorRating', rating)}
                    />
                  </View>
                ) : null

              }
              {
                isShowReviewContent ? (
                  <>
                    <Text style={styles.reviewInputTitle}>Bagaimana kolektornya?</Text>
                    <MainInput
                      placeholder={'Ada komentar mengenai kolektor?'}
                      style={{padding: 1}}
                      multiline
                      value={reviewData.collectorReview}
                      onChange={review => onChangeReviewData('collectorReview', review)}
                    />
                    <MainButton style={{marginTop: 20}} onPress={onSaveReviewData} title={'OK'}/>
                  </>
                ) : null
              }
              {
                !isShowReviewContent ? (
                  <>
                    {
                      isShowCollectorInfo ? (
                        <CollectorItem collector={order?.collector}/>
                      ) : null
                    }
                    {
                      order?.memberCategoryWeights?.map(category => (
                        <TrashItem categoryPrices={props.junkCategoryPrices} category={category}/>
                      ))
                    }
                    {
                      order.memberNotes ? <View style={styles.notesContainer}>
                        <Text style={styles.notesTitleText}>Pesan Tambahan</Text>
                        <Text style={{color: colors.lightGray}}>{order.memberNotes}</Text>
                      </View> : null
                    }
                    <RequestTotalPriceInfo checkedCategories={order?.memberCategoryWeights} categories={props.junkCategoryPrices}/>
                    {
                      order?.status === OREDER_STATUS.STAFF_REDEEMED ? <RequestTotalPriceInfo
                        redeemTotalPrice={order?.memberTotalRewardedPointInCents}
                        checkedCategories={order?.memberCategoryWeights}
                        categories={props.junkCategoryPrices}
                      /> : null
                    }
                    {
                      order.images?.length ? <View style={styles.photoRowContainer}>
                        {
                          order.images.map((image) => (
                            <View>
                              <Image
                                key={image}
                                style={styles.image}
                                source={{ uri: image.url }}
                              />
                            </View>
                          ))
                        }
                      </View> : null
                    }
                    <UserDetails order={order}/>
                    {
                      order.status === OREDER_STATUS.PENDING || order.status === OREDER_STATUS.COLLECTOR_ACCEPTED ?
                      <MainButton title={'Batalkan'} style={{marginTop: 20}} onPress={() => onCancelOrder(order.id)}/> : null
                    }
                  </>
                ) : null
              }
            </View>
          </ScrollView>
        </>
    </PageContainer>
  )
};
