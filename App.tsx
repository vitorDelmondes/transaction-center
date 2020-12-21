import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Lato_400Regular, Lato_700Bold, useFonts } from '@expo-google-fonts/lato';

import Home from './src/pages/Home';

export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }


  return (
    <>
      <StatusBar style="auto" backgroundColor="#F2F2F3" translucent/>
      <Home/>
    </>
  );
}
