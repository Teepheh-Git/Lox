import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS} from '../constants/theme';

const grow = true;

const Login = () => {
  // useEffect(() => {
  //   grow ?? console.log('true');
  // }, []);
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    ...FONTS.body10,
  },
});
