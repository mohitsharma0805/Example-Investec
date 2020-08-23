import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import config from '../config';

const ExSwitchCell = ({ switchValue, onSwitchValueChange }) => {
  const switchValueChanged = (value) => onSwitchValueChange?.(value);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Banner Status</Text>
        </View>
        <Switch
          style={styles.switch}
          value={switchValue}
          onValueChange={switchValueChanged}
          trackColor={{
            true: config.colors.appTheme,
            false: null,
          }}
        />
      </View>
    </View>
  );
};

export default ExSwitchCell;

const styles = StyleSheet.create({
  container: { backgroundColor: config.colors.white },
  wrapper: { flexDirection: 'row', alignItems: 'center', height: 60 },
  textWrapper: { flex: 1 },
  title: {
    marginLeft: 16,
    paddingVertical: 2,
    fontSize: 17,
  },
  switch: { marginRight: 20, marginLeft: 16 },
});
