import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import config from '../config';

const ExBanner = ({ deviceType }) => {
  return (
    <View style={styles.contentView}>
      <Text style={styles.text}>{deviceType}</Text>
    </View>
  );
};

export default ExBanner;

const styles = StyleSheet.create({
  contentView: {
    justifyContent: 'center',
    height: 40,
    width: '100%',
    backgroundColor: config.colors.black,
  },
  text: { marginLeft: 20, color: config.colors.white, fontSize: 17 },
});
