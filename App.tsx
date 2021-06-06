import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SplashScreen} from './src/presentation/container';
const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SplashScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
