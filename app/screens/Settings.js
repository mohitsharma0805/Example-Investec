import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ExBanner, ExSwitchCell } from '../components';
import { selectBannerStatus, saveBannerStatus, selectDeviceType } from '../state/Settings';
import { selectUser } from '../state/User';
import config from '../config';
import { useBackButton } from '../customHooks';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();
  const bannerStatus = useSelector(selectBannerStatus);
  const deviceType = useSelector(selectDeviceType);
  const user = useSelector(selectUser);

  navigation.setOptions({
    headerRight: () => (
      <View style={styles.headerRightView}>
        <Text style={styles.headerRightText}>{user.name}</Text>
      </View>
    ),
  });

  const backButtonHandler = () => {
    navigation.goBack();
    return true;
  };

  useBackButton(backButtonHandler);

  const switchValueChanged = (value) => {
    dispatch(saveBannerStatus(value));
  };

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && deviceType && <ExBanner deviceType={deviceType} />}
      <ExSwitchCell switchValue={bannerStatus} onSwitchValueChange={switchValueChanged} />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { flex: 1, justifyContent: 'center' },
  headerRightText: {
    color: config.colors.appTheme,
    marginRight: 15,
    marginLeft: 15,
    fontSize: 16,
  },
  headerRightView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
