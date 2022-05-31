import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme';

const Profile = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: COLORS.black,
  },
});
