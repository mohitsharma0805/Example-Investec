import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import config from '../config';

const ExTextInput = ({ viewStyle, ...props }) => {
  return (
    <View style={[styles.contentView, viewStyle]}>
      <TextInput {...props} style={styles.textInput} />
      <View style={styles.divider} />
    </View>
  );
};

export default ExTextInput;

const styles = StyleSheet.create({
  contentView: {
    marginLeft: 20,
    marginRight: 20,
    height: 50,
  },
  textInput: {
    flex: 1,
    marginTop: 12,
    height: 30,
    fontSize: 15,
    padding: 5,
  },
  divider: {
    marginTop: 5,
    height: 1,
    backgroundColor: config.colors.cellDivider,
  },
});
