import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LoggedInTabStack from "./components/LoggedInTabStack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";
import { Provider, useSelector } from "react-redux";
import store from "./redux/configureStore";

const Stack = createStackNavigator();

function App() {

  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          headerMode="none"
          initialRouteName={token != null ? "Logged In" : "SignInSignUp"}
          animationEnabled={false}>
        <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
        <Stack.Screen component={LoggedInTabStack} name="Logged In" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

