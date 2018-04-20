import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import * as actions from './src/redux/reducers';
import store from './src/redux/store';

export default class App extends Component {
  componentDidMount() {
    store.dispatch(actions.fetchNearbyOrders())
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
