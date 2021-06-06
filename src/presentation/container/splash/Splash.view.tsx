import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {DEVELOPMENT} from '@assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Splash.styles';
export const SplashScreen = () => {
  return (
    <LinearGradient colors={['#FBD3E9', '#BB377D']} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={DEVELOPMENT}
          resizeMode={'contain'}
          style={{width: wp(30), height: wp(30)}}
        />
        <View style={{flex: 1}}>
          <Text style={styles.nameAppStyle}>Prometheus</Text>
          <Text style={styles.quotes}>
            You are what you do, not what you say you'll do
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};
