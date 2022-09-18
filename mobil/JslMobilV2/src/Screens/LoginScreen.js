import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CustomButton from "../Components/CustomButton";
import InputField from "../Components/InputField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("emrecanbalgun");
  const [password, setPassword] = useState("123123");
  const { isLoading, login } = useContext(AuthContext);

  console.log("Request", username, password);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ImageBackground
        source={require("../../src/assets/images/background/home-about-bg.png")}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            {/*    <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          /> */}
          </View>

          <Text
            style={{
              // fontFamily: 'Roboto-Medium',
              fontSize: 28,
              fontWeight: "500",
              color: "#ffff",
              marginBottom: 30,
            }}>
            Giriş
          </Text>

          <InputField
            label={"Kullanıcı Adı"}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#ffff"
                style={{ marginRight: 5 }}
              />
            }
            value={username}
            onChangeText={(text) => setUsername(text)}
            //keyboardType=""
          />

          <InputField
            label={"Şifre"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#ffff"
                style={{ marginRight: 5 }}
              />
            }
            inputType="password"
            fieldButtonLabel={"Şifremi Unuttum?"}
            fieldButtonFunction={() => {}}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <CustomButton
            label={"Giriş"}
            onPress={() => {
              login(username, password);
            }}
          />

          {/*   <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
          Or, login with ...
        </Text>   */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
            }}>
            <Text style={{ color: "white", fontWeight: "700" }}>
              Hesabınız Yok mu?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
                {" "}
                Kayıt
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
