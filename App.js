import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Global from './src/components/Global';
import List from './src/components/List';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titletext}>Data COVID-19 Global dan Indonesia</Text>
      <Text style={styles.text}>Global</Text>
        <Global />
      <Text style={styles.text}>Indonesia </Text>
        <List />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  titletext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown'
  }
});

export default App;