import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';

import Header from '../../components/Header';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

const NewTransaction: React.FC = () => {

  const [name, setName] = useState('');


  return (
    <View style={styles.container} >
      <Header />

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <TextInput
            label="Nome da pessoa compradora"
            mode='outlined'
            value={name}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="CPF"
            mode='outlined'
            value={name}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="N° do cartão"
            mode='outlined'
            value={name}
          />
        </View>
        <View style={styles.dateCvv}>
          <TextInput
            style={{ width: '59%'}}
            label="Data de expiração"
            mode='outlined'
            value={name}
          />
          <TextInput
            style={{ width: '39%'}}
            label="CVV"
            mode='outlined'
            value={name}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="Valor da transação"
            mode='outlined'
            value={name}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Criar transação</Text>
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: Constants.statusBarHeight,
    overflow: "scroll",
    backgroundColor: "#fff"
  },

  inputsContainer: {
    width: '100%',
    padding: 26
  },

  input: {
    paddingVertical: 8
  },

  dateCvv: {
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-between"
  },

  footer: {},

  button: {
    backgroundColor: "#3F2787",
    alignContent: "center",
    alignSelf: "center",
    width: 328,
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    paddingHorizontal:8,
    color: "#FFF",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
  },

})

export default NewTransaction;