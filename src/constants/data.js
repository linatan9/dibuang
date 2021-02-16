import React from 'react';
import {icons, colors} from './index';
import GoPay from '../assets/icons/gopay.svg';
import Dana from '../assets/icons/dana.svg';
import LinkAja from '../assets/icons/link-aja.svg';

export const RESPONSE_CODES = {
  SUCCESS: "SUCCESS",
  MEMBER_NOT_FOUND: "MEMBER_NOT_FOUND",
  JUNK_EMPTY_RESULT: "JUNK_EMPTY_RESULT",
  AUTHENTICATION_HEADERS_MISSING: "AUTHENTICATION_HEADERS_MISSING",
};

export const MODAL_CALL_CAR_NAMES = {
  TRASH: 'TRASH',
  LOCATION: 'LOCATION',
  CALENDAR: 'CALENDAR',
  CLOCK: 'CLOCK',
};

export const MODAL_NAMES = {
  SUCCESSFULL_ORDER_CREATE: 'SUCCESSFULL_ORDER_CREATE',
  COLLECTOR_REVIEW_MODAL: 'COLLECTOR_REVIEW_MODAL',
};

export const CALL_CAR_CATEGORIES_NAMES = {
  PAPER: 'PAPER',
  PLASTIC: 'PLASTIC',
};


// in grams
export const WEIGHT_TRASH_STEP = 500;
export const MIN_TRASH_WEIGHT = 500;
export const MAX_TRASH_WEIGHT = 10000;


export const COLLECTIONS_TIMES = {
  ANYTIME: 'Kapan saja',
  MORNING: 'Pagi (07:00 - 11:00)',
  NOON: 'Siang (11:00 - 14:00)',
  AFTERNOON: 'Sore (14:00 - 18:00)',
  EVENING: 'Malam (18:00 - 21:00)'
};

export const COLLECTIONS_TIMES_KEYS = {
  ANYTIME: 'ANYTIME',
  MORNING: 'MORNING',
  NOON: 'NOON',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

export const COLLECTION_JUNK_STATUSES_NAMES = {
  PENDING: 'Belum Diproses',
  COLLECTOR_ACCEPTED: 'Diproses',
  COLLECTOR_COLLECTED: 'Diambil',
  STAFF_REDEEMED: 'Selesai',
  MEMBER_CANCELLED: 'Dibatalkan',
};

export const OREDER_STATUS = {
  PENDING: 'PENDING',
  COLLECTOR_ACCEPTED: 'COLLECTOR_ACCEPTED',
  COLLECTOR_COLLECTED: 'COLLECTOR_COLLECTED',
  STAFF_REDEEMED: 'STAFF_REDEEMED',
  MEMBER_CANCELLED: 'MEMBER_CANCELLED',
};

export const ORDERS_STATUS_ITEMS = {
  [OREDER_STATUS.PENDING]: {
    title: 'Pesanan Belum Diproses',
    text: 'Kami sedang mencari collector barang Anda. Mohon menunggu.',
    icon: <icons.OrderPending/>,
    color: colors.orderPendingColor,
  },
  [OREDER_STATUS.COLLECTOR_ACCEPTED]: {
    title: 'Pesanan Sedang Diproses',
    text: 'Saat ini collector kami sedang menuju lokasi Anda.',
    icon: <icons.OrderAccepted/>,
    color: colors.orderAcceptedColor,
  },
  [OREDER_STATUS.COLLECTOR_COLLECTED]: {
    title: 'Pesanan Diambil',
    text: 'Collector kami saat ini dalam perjalanan menuju lokasi bank sampah.',
    icon: <icons.OrderCollected/>,
    color: colors.orderCollectedColor,
  },
  [OREDER_STATUS.STAFF_REDEEMED]: {
    title: 'Pesanan Selesai Diambil',
    text: 'Uang sudah dikirimkan. Terima kasih sudah menggunakan Dibuang!',
    icon: <icons.OrderRedeemed/>,
    color: colors.orderRedeemedColor,
  },
  [OREDER_STATUS.MEMBER_CANCELLED]: {
    title: 'Pesanan Dibatalkan',
    text: 'Barang tidak jadi diambil karena adanya pembatalan pemesanan.',
    icon: <icons.OrderCancelled/>,
    color: colors.mainRed,
  },
};

export const PAYMENTS_LIST = [
  {
    icon: <icons.Ovo/>,
    name: 'OVO',
    key: 'OVO',
  },
  {
    icon: <icons.GoPay/>,
    name: 'Gopay',
    key: 'GOPAY',
  },
  {
    icon: <icons.Dana/>,
    name: 'DANA',
    key: 'DANA',
  },
  {
    icon: <icons.LinkAja/>,
    name: 'LinkAja',
    key: 'LINKAJA',
  },
];

export const WITHDRAW_STATUS = {
  PENDING: 'TERTUNDA',
  PROCESSED: 'DIPROSES',
  SUCCESS: 'SUKSES',
  FAILED: 'GAGAL'
};

export const WITHDRAW_STATUS_COLORS = {
  PENDING: colors.mainYellow,
  PROCESSED: colors.mainLightBlue,
  SUCCESS: colors.mainDarkGreen,
  FAILED: colors.mainRed,
};
