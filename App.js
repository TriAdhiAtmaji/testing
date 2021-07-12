import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/features/app';
import store from './src/store';
import api from './src/utils/api';
import { StatusBar } from 'expo-status-bar';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

export default function App() {
  api.setupInterceptors(store());
  return (
    <Provider store={store()}>
      <AppContainer />
      <StatusBar style="auto" />
    </Provider>

  );
}

registerRootComponent(App);