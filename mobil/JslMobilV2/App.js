import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";
function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
export default App;
