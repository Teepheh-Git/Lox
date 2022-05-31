import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text onPress={() => navigation.navigate('Login')} style={styles.text}>
        Skip
      </Text>

      <Image
        style={styles.image}
        source={icons.onboardingImg}
        resizeMode="cover"
      />
      <Text style={styles.hi}>Hi there!</Text>
      <Text style={styles.desc}>This is Lox Service app development test!</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    ...FONTS.body6,
    color: COLORS.grey,
    marginTop: SIZES.font1,
    alignSelf: 'flex-end',
    marginRight: SIZES.font5,
  },
  image: {
    height: SIZES.height * 0.4,
    width: SIZES.width,
    marginTop: SIZES.font1 * 2.5,
  },
  hi: {
    ...FONTS.largeTitle,
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: SIZES.font1,
  },
  desc: {
    ...FONTS.body6,
    color: COLORS.black,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: SIZES.font10,
    width: SIZES.width * 0.9,
  },
});
