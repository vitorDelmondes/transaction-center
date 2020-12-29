import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from 'react-native';
import api from '../../services/api';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign as Icon } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';

import dataTransactions from '../../services/fakeApiTransaction.json';
import { translateStatus, formatMoney, formatDate } from '../../utils';

interface ItemValue {
  amount: number;
  date: string;
  name: string;
  status: string;
}

const Item = ({ amount, date, name, status }:ItemValue) => (
  <View style={styles.transaction} >
    <View style={styles.rowTransaction}>
      <Text style={styles.boldText}>{name}</Text>
      <Text style={styles.regularText}>{translateStatus(status)}</Text>
    </View>
    <View style={styles.rowTransaction}>
      <Text style={{ fontSize: 16 }}>{formatDate(date)}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>R$ {formatMoney(amount)}</Text>
    </View>
  </View>
);

const Home: React.FC = () => {

  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const renderItem = ({item}:any) => <Item amount={item.amount} date={item.date} name={item.credit_card_holder_name} status={item.status} />;

  const getTransactions = async () => {
    try {
      const resp = await api.get('/transactions');
      setData(resp.data)
    } catch (err) {
      console.log('getTransactions:', err);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  // useEffect(() => {
  //   if (loading) {
  //     return <AppLoading />;
  //   }
  // }, [loading]);

  const calculateMetaData = async () => {
    let totalAm = 0;
    let totalTran = 0;
    await data.map((item:any, index) => {
      totalAm = +totalAm + (+item.amount);
      totalTran = index;
    })
    setTotalAmount(totalAm);
    setTotalTransactions(totalTran + 1);
  };

  useEffect(() => {
    calculateMetaData();
  }, [data]);


  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <View style={styles.metaInfo}> 
          <Text style={{ fontFamily: 'Lato_700Bold' }}>Número de transações</Text>
          <Text style={styles.metaNumber}>{totalTransactions}</Text>
        </View>
        <View style={styles.metaInfo}> 
          <Text style={{ fontFamily: 'Lato_700Bold' }}>Valor Total</Text>
          <Text style={styles.metaNumber}>R$ {formatMoney(totalAmount)}</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
        extraData={selectedId}
      />

      <RectButton style={styles.button} onPress={() => { navigation.navigate('NewTransaction') }}>
        <Icon name="pluscircle" color="#DFD5FF" size={22} />
        <Text style={styles.buttonText}>Criar transação</Text>
      </RectButton>
      

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    overflow: "scroll",
    backgroundColor: "#fff"
  },

  metaContainer: {
    backgroundColor: '#F2F2F3',
    height: 208,
    paddingTop:14
  },

  regularText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14
  },

  boldText: {
    fontSize: 16, 
    fontFamily: 'Lato_700Bold'
  },

  metaInfo: {
    padding: 16,
  },

  metaNumber: {
    fontFamily: 'Lato_700Bold',
    color: "#65A300",
    fontSize: 20,
    paddingVertical: 10
  },

  boxTransaction: {
    overflow: "visible",
    height: '60%',
  },

  transaction: {
    height: 88,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F3'
  },

  rowTransaction: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

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

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  buttonText: {
    paddingHorizontal:8,
    // justifyContent: "center",
    // textAlign: "center",
    color: "#FFF",
    fontFamily: "Lato_700Bold",
    fontSize: 16,
  },

})

export default Home; 