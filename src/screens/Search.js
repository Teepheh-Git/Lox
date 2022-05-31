import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants/theme';

const Search = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: COLORS.black,
  },
});
