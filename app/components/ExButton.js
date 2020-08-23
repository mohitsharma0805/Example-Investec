import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import config from '../config';

const ExButton = ({ buttonStyle, text, textStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ExButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 50,
  },
  text: { color: config.colors.white, fontSize: 17 },
});
