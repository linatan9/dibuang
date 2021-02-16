import React, {useState, useEffect, useMemo} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';
import styles from './styles';
import {images, icons, colors} from '../../constants';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { TrashModalContent } from './modals/TrashModalContent/TrashModalContent';
import {
  COLLECTIONS_TIMES,
  MAX_TRASH_WEIGHT,
  MIN_TRASH_WEIGHT,
  MODAL_CALL_CAR_NAMES, OREDER_STATUS, RESPONSE_CODES,
  WEIGHT_TRASH_STEP,
} from '../../constants/data';
import { Category } from './components/Category/Category';
import { MainActionItem } from './components/MainActionItem/MainActionItem';
import { TimeModalContent } from './modals/TimeModalContent/TimeModalContent';
import { RequestNoteItem } from './components/RequestNoteItem/RequestNoteItem';
import { RequestTotalPriceInfo } from './components/RequestTotalPriceInfo/RequestTotalPriceInfo';
import { MainButton } from '../../components/MainButton/MainButton';
import { ManagePhoto } from './components/ManagePhoto/ManagePhoto';

const defaultJunkCollectionRequest = {
  collectionAddress: null,
  collectionDate: null,
  collectionTimeOfDay: null,
  memberCategoryWeights: [],
  images: [],
  memberNotes: ''
};

export const CollectionRequestPage = (props) => {
  const [visibleModalName, setVisibleModalName] = useState(null);
  const [junkCollectionRequestData, setJunkCollectionRequestData] = useState(defaultJunkCollectionRequest);

  const getPrimaryLocation = () => {
    return props.userData?.addresses?.find(address => address.isPrimary);
  };

  useEffect(() => {
    setJunkCollectionRequestData({
      ...defaultJunkCollectionRequest,
      ...{
        collectionDate: moment.parseZone(new Date()).format('D MMMM YYYY'),
        collectionAddress: getPrimaryLocation(),
      },
    });
  }, []);

  useEffect(() => {
    setJunkCollectionRequestData({
      ...junkCollectionRequestData,
      ...{
        collectionDate: moment.parseZone(new Date()).format('D MMMM YYYY'),
        collectionAddress: props.callCar.junkCollectionRequest.collectionAddress || getPrimaryLocation(),
      },
    });

  }, [props.callCar.junkCollectionRequest.collectionAddress]);

  const checkIsAllDataFilled = () => {
    return !!junkCollectionRequestData.collectionAddress && !!Object.keys(junkCollectionRequestData.collectionAddress).length
           && !!junkCollectionRequestData.collectionAddress && !!junkCollectionRequestData.collectionTimeOfDay
           && !!junkCollectionRequestData.memberCategoryWeights?.length
  };

  const isAllDataFilled = useMemo(() => checkIsAllDataFilled(), [junkCollectionRequestData]);

  const addJunkCategory = (category) => {
    const memberCategoryWeights = [...junkCollectionRequestData.memberCategoryWeights];
    if (!category.weightInGrams) {
      category.weightInGrams = MIN_TRASH_WEIGHT;
    }
    memberCategoryWeights.push(category);
    setJunkCollectionRequestData({...junkCollectionRequestData, ...{memberCategoryWeights: memberCategoryWeights}});
    setVisibleModalName(null);
  };

  const deleteJunkCategory = (category) => {
    const memberCategoryWeights = [...junkCollectionRequestData.memberCategoryWeights];
    const categoryIndex = memberCategoryWeights.findIndex(cat => cat.category === category);

    if (categoryIndex >= 0) {
      memberCategoryWeights.splice(categoryIndex, 1);
    }
    setJunkCollectionRequestData({...junkCollectionRequestData, ...{memberCategoryWeights: memberCategoryWeights}});
  };

  const changeTrashWeight = (category, weight) => {
    if (weight === MIN_TRASH_WEIGHT - WEIGHT_TRASH_STEP || weight === MAX_TRASH_WEIGHT + WEIGHT_TRASH_STEP) {
      return;
    }
    const memberCategoryWeights = [...junkCollectionRequestData.memberCategoryWeights].map(cat => {
      if (category === cat.category) {
        cat.weightInGrams = weight;
      }
      return cat
    });
    setJunkCollectionRequestData({...junkCollectionRequestData, ...{memberCategoryWeights: memberCategoryWeights}});
  };

  const choseTimeSlot = (timeEnum) => {
    setJunkCollectionRequestData({...junkCollectionRequestData, ...{collectionTimeOfDay: timeEnum}});
    setVisibleModalName(null);
  };

  const onChangeMemberNotes = (value) => {
    setJunkCollectionRequestData({...junkCollectionRequestData, ...{memberNotes: value}});
  };

  const createOrderCollection = () => {
    junkCollectionRequestData.images = props.callCar?.junkCollectionRequest?.images?.length ?
      props.callCar?.junkCollectionRequest?.images.map(imageUrl => ({url: imageUrl})) : [];
    props.createOrderCollection({...junkCollectionRequestData}).then(response => {
      if (response?.code === RESPONSE_CODES.SUCCESS) {
        Promise.resolve(props.navigation.goBack()).then(() => {
          props.setCheckedItemStatus(null);
          props.setCheckedItemStatus(OREDER_STATUS.PENDING);
          props.showSuccessCreateOrder(true);
          props.navigation.navigate('OrderDetailsPage', {order: response.data})
        });
      }
    });
  };

  return (
    <PageContainer title={'Pesanan Saya'} {...props} horizontalPadding={0}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {
            junkCollectionRequestData.memberCategoryWeights?.map((memberCategory, i) => (
              <Category
                key={i}
                deleteJunkCategory={deleteJunkCategory}
                weight={memberCategory?.weightInGrams || MIN_TRASH_WEIGHT}
                changeTrashWeight={changeTrashWeight}
                category={memberCategory?.category}
              />
            ))
          }
          <MainActionItem
            setVisibleModalName={setVisibleModalName}
            isAddedAnyMemberCategoryWeights={junkCollectionRequestData.memberCategoryWeights?.length}
            icon={<icons.Trash color={junkCollectionRequestData.memberCategoryWeights?.length ? colors.mainMediumGreen : 'black'}/>}
            title={junkCollectionRequestData.memberCategoryWeights?.length ? "Tambah Jenis Buangan" : "Jenis Buangan" }
            modalName={MODAL_CALL_CAR_NAMES.TRASH}
          />
          {
            junkCollectionRequestData.memberCategoryWeights?.length ?
              <RequestNoteItem onChange={onChangeMemberNotes} memberNotes={junkCollectionRequestData.memberNotes}/>
            : null
          }
          {
            junkCollectionRequestData.memberCategoryWeights?.length ? (
              <RequestTotalPriceInfo checkedCategories={junkCollectionRequestData.memberCategoryWeights} categories={props.callCar.junkCategoryPrices}/>
            ) : null
          }
          {
            <ManagePhoto
              removePhoto={props.removePhoto}
              images={props.callCar?.junkCollectionRequest?.images || []}
              isLoading={props.isLoading}
              uploadPhoto={props.uploadPhoto}
            />
          }
          {
            junkCollectionRequestData.collectionAddress ? (
              <TouchableOpacity style={styles.chckedLocationContainer} onPress={() => props.navigation.navigate('ManageAddressPage')}>
                <View style={styles.chckedLocationTitleContainer}>
                  <icons.Location color={colors.mainMediumGreen}/>
                  <Text style={styles.chekedLocationTitle}>{junkCollectionRequestData.collectionAddress.label}</Text>
                </View>
                <View style={styles.checkedLocationDetailsContainer}>
                  <Text style={styles.checkedLocationDetailsTitle}>{junkCollectionRequestData.collectionAddress.contactName}</Text>
                  <Text style={styles.checkedLocationDetailsText}>{junkCollectionRequestData.collectionAddress.fullAddress}</Text>
                  <Text style={styles.checkedLocationDetailsText}>{junkCollectionRequestData.collectionAddress.contactNumber}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <MainActionItem
                navigation={props.navigation}
                routeName={'ManageAddressPage'}
                icon={<icons.Location color={junkCollectionRequestData.collectionAddress ? colors.mainMediumGreen : 'black'}/>}
                title="Lokasi Pengambilan"
              />
            )
          }
          {
            junkCollectionRequestData.collectionDate ? (
              <View style={styles.dateContainer}>
                <icons.Calendar color={colors.mainMediumGreen}/>
                <Text style={styles.dateText}>{junkCollectionRequestData.collectionDate}</Text>
              </View>
            ) : (
              <MainActionItem icon={<icons.Calendar/>} title="Tanggal Pengambilan"/>
            )
          }
          <MainActionItem
            setVisibleModalName={setVisibleModalName}
            modalName={MODAL_CALL_CAR_NAMES.CLOCK}
            isGreenBorder={!!junkCollectionRequestData.collectionTimeOfDay}
            icon={<icons.Clock color={junkCollectionRequestData.collectionTimeOfDay ? colors.mainMediumGreen : 'black'}/>}
            title={COLLECTIONS_TIMES[junkCollectionRequestData.collectionTimeOfDay] || "Waktu Pengambilan"}
          />
          <MainButton onPress={createOrderCollection} isGrayDisabled={!isAllDataFilled} title={'Cari Collector'} style={{marginTop: 20}}/>
        </View>
        <TimeModalContent
          isShowModal={visibleModalName === MODAL_CALL_CAR_NAMES.CLOCK}
          onHideModal={() => setVisibleModalName(null)}
          choseTime={choseTimeSlot}
        />
        <TrashModalContent
          junkCategoryPrices={props?.callCar?.junkCategoryPrices}
          checkedCategories={junkCollectionRequestData.memberCategoryWeights}
          isShowModal={visibleModalName === MODAL_CALL_CAR_NAMES.TRASH}
          onHideModal={() => setVisibleModalName(null)}
          addJunkCategory={addJunkCategory}
        />
      </ScrollView>
    </PageContainer>
  )
};
