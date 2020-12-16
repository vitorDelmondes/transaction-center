import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <View style={styles.metaInfo}> 
          <Text>Número de transações</Text>
          <Text style={styles.metaNumber}>10.3030</Text>
        </View>
        <View style={styles.metaInfo}> 
          <Text>Valor Total</Text>
          <Text style={styles.metaNumber}>R$ 24.339,46</Text>
        </View>
      </View>
      
      {/* Transações */}
      <View style={styles.boxTransaction}>
        <View style={styles.rowTransaction}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>João S Silva</Text>
          <Text style={{ fontSize: 14 }}>Recusada</Text>
        </View>
        <View style={styles.rowTransaction}>
          <Text style={{ fontSize: 16 }}>10/10/2010 10:30</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>R$ 100,00</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: "#fff"
  },

  metaContainer: {
    backgroundColor: '#F2F2F3',
    height: 208,

  },

  metaInfo: {
    padding: 16,
  },

  metaNumber: {
    color: "#65A300",
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10
  },

  boxTransaction: {
    height: 88,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F3'
  },

  rowTransaction: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default Home; 