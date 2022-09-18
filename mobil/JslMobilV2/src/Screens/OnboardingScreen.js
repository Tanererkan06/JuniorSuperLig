import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, StyleSheet, } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Gaming from '../assets/images/misc/gaming.svg';
const image = { uri: "https://reactjs.org/logo-og.png" };

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../src/assets/images/background/home-about-bg.png')} resizeMode="cover" style={styles.image}>
        <View style={{ marginTop: 20 }}>

        </View>
        <Text
          style={{
            //fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            fontSize: 30,
            color: 'white',
            //fontFamily: 'Roboto-MediumItalic',
          }}>
          Küçük Adımlarla, BÜYÜK HEDEFLERE...

        </Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              //fontFamily: 'Inter-Bold',
              fontWeight: 'bold',
              fontSize: 30,
              color: 'white',
            }}>
            JUNIOR SÜPER LIG

          </Text>
          <Text
            style={{
              //fontFamily: 'Inter-Bold',
              fontWeight: 'bold',
              fontSize: 12,
              color: 'white',
            }}>
            2022 yılında Sakarya'da kurulan ve Türkiye'de ilk olan Junior Süper Lig kurulduğu il olan Sakarya'nın çocuklarına yönelik başlattığı U9, U10 ve U11 ligleri ile birlikte Türkiye'deki futbol camiası tarafından tanınmıştır.

            Çocukların ve gençlerin geleceğine yön vermeyi hedefliyor ve gelişimlerini gururla takip ediyoruz.

            Ülke genelinde hedeflediğimiz liglerin oluşumu için çalışmalarımızı tüm hızıyla sürdürmekteyiz.

          </Text>
          {/*  <Gaming
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        /> */}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
             // fontFamily: 'Roboto-MediumItalic',
            }}>
            Hadi Başlayalım
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});