import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#F2F2F3" translucent/>
      <Home/>
    </>
  );
}
