import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';

const Appointment = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Appointment</Text>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: COLORS.black,
  },
});
