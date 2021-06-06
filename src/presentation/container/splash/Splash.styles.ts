import {Colors, Fonts} from '@resources';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.MainColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  nameAppStyle: {
    color: '#fff',
    fontSize: wp(5),
    fontFamily: Fonts.Open_Sans_Bold,
  },
  quotes: {
    color: '#fff',
    fontSize: wp(4),
    fontFamily: Fonts.Open_Sans_Regular,
  },
});
