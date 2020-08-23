import { NativeModules } from 'react-native';

export const getDeviceInfoFromNativeModule = (callback) => {
  const { DeviceInfoManager } = NativeModules;
  DeviceInfoManager.getNativeDeviceInfo(({ deviceInfo }) => {
    callback = callback ? callback(deviceInfo) : null;
  });
};
