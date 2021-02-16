import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from './styles';
import {images,colors} from '../../constants';
import NetInfo from "@react-native-community/netinfo";


const welcomeConfigs = [
  {
    title: 'Jual Sampah Dapat Uang',
    subTitle: 'Solusi untuk melestarikan lingkungan dan mengubah sampah menjadi uang',
    buttonText: 'Daftar Sekarang',
    underButtonText: 'Sudah punya akun? Login',
    slideNumber: 1
  },
  {
    title: 'Daur Ulang untuk Lingkungan',
    subTitle: 'Kumpulkan dan pilah sampah untuk di jemput oleh para kolektor sampah di sekitarmu',
    buttonText: 'Daftar Sekarang',
    underButtonText: 'Sudah punya akun? Login',
    slideNumber: 2
  },
  {
    title: 'Mari Mulai Sekarang!',
    subTitle: 'Ayo mulai jual sampahmu dan dapatkan uang dari penjualan secara langsung!',
    buttonText: 'Daftar Sekarang',
    underButtonText: 'Sudah punya akun? Login',
    slideNumber: 3
  },
];



export const WelcomePage = (props) => {
  const [isStartDrag, setIsStartDrag] = useState(false);
  const [welcomeData, setWelcomeData] = useState(welcomeConfigs[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        alert('Internet Anda terputus');
      }
    });
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);
  const welcomeMainView = (welcomeObj, index) => {
    return (

        index === 1 ? <images.WelcomeImage1/> : index === 2 ? <images.WelcomeImage2/> : <images.WelcomeImage3/>

    )
  };

  return (
    <View style={[styles.mainContainer, styles[`background${activeIndex + 1}`]]}>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{welcomeData.title}</Text>
        <Text style={styles.subTitle}>{welcomeData.subTitle}</Text>
      </View>
      <Swiper
        onMomentumScrollEnd={(e, state, contex) => {
          if (activeIndex === 2) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
        }}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        index={activeIndex}
        onIndexChanged={index => {
          setActiveIndex(index);
          setWelcomeData(welcomeConfigs[index]);
        }}
      >
        {
          welcomeConfigs.map((welcomeObj, i) => (
            <View key={i} style={styles.slide1}>
                {welcomeMainView(welcomeObj, i)}
            </View>
          ))
        }
      </Swiper>
      <View style={styles.bottomActionContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUpPage')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>{welcomeData.buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.navigation.navigate('Login')} >
          <Text style={styles.subTitle}>{welcomeData.underButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
