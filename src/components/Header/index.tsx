import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';

import { AntDesign as Icon } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';


const Header: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon name="arrowleft" onPress={() => { navigation.goBack() }} color="#6045AF" size={26} />
      <Text style={styles.regularText}>Nova Transação</Text>
      <Icon name="arrowleft" color="#F2F2F3" size={26} />
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    paddingHorizontal: 16,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: '8%',
    overflow: "scroll",
    backgroundColor: "#F2F2F3"
  },

  regularText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16
  },

})

export default Header;