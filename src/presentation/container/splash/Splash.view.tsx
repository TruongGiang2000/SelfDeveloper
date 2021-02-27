import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../resource';
import FastImage from 'react-native-fast-image';
import {DEVELOPMENT} from '@assets';
export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <FastImage source={DEVELOPMENT} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MainColor,
    flex: 1,
  },
});
