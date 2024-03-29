'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './app';

const store = configureStore({});

class Client extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Client;
