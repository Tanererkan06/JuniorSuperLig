import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Checkbox from 'expo-checkbox';


import CustomButton from '../Components/CustomButton';
import InputField from '../Components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [isChecked, setChecked] = useState(false);

  const [dobLabel, setDobLabel] = useState('Date of Birth');
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ImageBackground source={require('../../src/assets/images/background/home-about-bg.png')} resizeMode="cover" style={styles.image}>
        <ScrollView style={{ paddingHorizontal: 15, marginTop: 150 }}>



          <View >
            <View style={{ alignItems: 'center' }}>
              {/*    <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
            </View>

            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                //  marginBottom: 30,
              }}>
              Adı ve Soyadı
            </Text>

            <InputField
              label={'Kullanıcı Adı'}

              keyboardType="email-address"
            />
            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                // marginBottom: 30,
              }}>
              Şehir
            </Text>
            <InputField
              label={'Şifre'}

            //inputType="password"
            // fieldButtonLabel={"Şifremi Unuttum?"}
            // fieldButtonFunction={() => { }}
            />

            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                //  marginBottom: 30,
              }}>
              Kullanıcı Adı
            </Text>

            <InputField
              label={'Kullanıcı Adı'}

              keyboardType="email-address"
            />
            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                // marginBottom: 30,
              }}>
              Email
            </Text>
            <InputField
              label={'Şifre'}

            //inputType="password"
            // fieldButtonLabel={"Şifremi Unuttum?"}
            // fieldButtonFunction={() => { }}
            />

            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                //  marginBottom: 30,
              }}>
              Şifre
            </Text>

            <InputField
              label={'Kullanıcı Adı'}

              keyboardType="email-address"
            />
            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                // marginBottom: 30,
              }}>
              Üyelik Tipi

            </Text>
            <InputField
              label={'Şifre'}

            //inputType="password"
            // fieldButtonLabel={"Şifremi Unuttum?"}
            // fieldButtonFunction={() => { }}
            />

            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                //  marginBottom: 30,
              }}>
              Telefon Numarası
            </Text>

            <InputField
              label={'Kullanıcı Adı'}

              keyboardType="email-address"
            />
            <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                // marginBottom: 30,
              }}>
              Doğrulama Kodu
            </Text>
            <InputField
              label={'Şifre'}

            //inputType="password"
            // fieldButtonLabel={"Şifremi Unuttum?"}
            // fieldButtonFunction={() => { }}
            />

        
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
              <Text
              style={{
                // fontFamily: 'Roboto-Medium',
                fontSize: 12,
                fontWeight: '500',
                color: '#ffff',
                // marginBottom: 30,
              }}>
              Gizlilik Sözleşmesi          </Text>
            </View>
            
          
 


            <CustomButton label={'Kayıt'} onPress={() => { }} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Zaten Hesabınız Var mı ?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: 'white', fontWeight: '700' }}> Giriş</Text>
              </TouchableOpacity>
            </View>





          </View>


        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
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
    backgroundColor: "white"
  }
});