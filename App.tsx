import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SplashScreen} from './src/presentation/container';
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#007eff'} />
      <SplashScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
