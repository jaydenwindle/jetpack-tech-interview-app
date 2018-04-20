import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

class OrderList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text> Orders go here! </Text>
      </ScrollView>
    );
  }
}

const select = state => ({
    // grab orders from state here
});

export default connect(select)(OrderList)