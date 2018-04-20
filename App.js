import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as actions from './src/redux/reducers';
import store from './src/redux/store';

import OrderList from './src/screens/OrderList'

export default class App extends Component {
  componentDidMount() {
    store.dispatch(actions.fetchNearbyOrders())
  }

  render() {
    return (
      <Provider store={store}>
        <OrderList />
      </Provider>
    );
  }
}

