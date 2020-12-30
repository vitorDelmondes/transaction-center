import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform  } from 'react-native';
import api from '../../services/api';

import Header from '../../components/Header';
import { TextInput, Dialog } from 'react-native-paper';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import { mask, unMask } from 'remask';
import { useNavigation } from '@react-navigation/native';
import { formatMoney } from '../../utils';

import { addTransaction } from '../../store/ducks/transaction';



const NewTransaction: React.FC = () => {

  // const transactions = useSelector(state => state.transaction);

  const navigation = useNavigation();
  // const dispatch = useDispatch();
  
  const [disabled, setDisabled] = useState(true);
  const [buttonColor, setButtonColor] = useState("#F2F2F");

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [value, setValue] = useState('');

  const formSubmitted = async () => {

    try {
      const resp = await api.post('/transactions', {
        buyer_document: unMask(cpf),
          credit_card_holder_name: name,
          credit_card_number: unMask(cardNumber),
          credit_card_expiration_date: unMask(dueDate),
          credit_card_cvv: cvv,
          amount: value.replace(/\D/g, '')
      });

      // dispatch(addTransaction({ ...transact }));

      Alert.alert(
        "Sucesso!",
        "Sua transação foi criada com sucesso.",
        [
          { text: "OK", onPress: () => {
            navigation.navigate('Home', { get: true })
          }}
        ],
        { cancelable: false }
      );
    } catch (err) {
      Alert.alert(
        "Erro",
        "Sua transação não foi criada. :(" + err,
        [
          { text: "OK", onPress: () => navigation.goBack()}
        ],
        { cancelable: false }
      );
      console.log(err);
    }
  };

  const validateFields = () => {
    if (
      name &&
      cpf &&
      cardNumber &&
      dueDate &&
      cvv &&
      value
    ) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    validateFields();
  }, [name, cpf, cardNumber, dueDate, cvv, value]);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container} >
        <Header />

        <View style={styles.inputsContainer}>
          <View style={styles.input}>
            <TextInput
              label="Nome da pessoa compradora"
              mode='outlined'
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              label="CPF"
              mode='outlined'
              value={cpf}
              onChangeText={value => setCpf(mask(unMask(value), ['999.999.999-99']))}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              label="N° do cartão"
              mode='outlined'
              value={cardNumber}
              onChangeText={value => setCardNumber(mask(unMask(value), ['9999 9999 9999 9999']))}
            />
          </View>
          <View style={styles.dateCvv}>
            <TextInput
              style={{ width: '59%'}}
              label="Data de expiração"
              mode='outlined'
              value={dueDate}
              onChangeText={value => setDueDate(mask(unMask(value), ['99/9999']))}
            />
            <TextInput
              style={{ width: '39%'}}
              label="CVV"
              mode='outlined'
              value={cvv}
              onChangeText={value => setCvv(mask(unMask(value), ['999']))}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              label="Valor da transação"
              mode='outlined'
              value={value}
              onChangeText={value => setValue(mask(unMask(value), ['9999999999']))}
            />
          </View>
        </View>

        {disabled && (
          <View style={styles.footer}>
            <RectButton style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Criar transação</Text>
            </RectButton>
          </View>
        )}

        {!disabled && (
          <View style={styles.footer}>
            <RectButton style={styles.buttonB} onPress={() => {
              !disabled ? formSubmitted() : ""
            }}>
              <Text style={styles.buttonText}>Criar transação</Text>
            </RectButton>
          </View>
        )}

      </View>
    </KeyboardAvoidingView>
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
    backgroundColor: "#F2F2F3",
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

  buttonB: {
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