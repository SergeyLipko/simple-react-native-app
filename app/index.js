import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/router';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

console.ignoredYellowBox = ['Remote debugger'];
AppRegistry.registerComponent('loginScreen', () => App);