import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import config from '../config';

const ExBanner = () => {
  const getDeviceType = () => {
    let deviceType = DeviceInfo.getModel();
    if (DeviceInfo.isEmulatorSync) {
      if (Platform.OS === 'ios') {
        deviceType = 'Simutator';
      } else {
        deviceType = 'Emulator';
      }
    }
    return deviceType;
  };

  return (
    <View style={styles.contentView}>
      <Text style={styles.text}>{getDeviceType()}</Text>
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
