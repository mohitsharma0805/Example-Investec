import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Slider from 'react-native-slide-to-unlock';
import { ExBanner, ExButton } from '../components';
import { selectBannerStatus, selectDeviceType } from '../state/Settings';
import { selectUser } from '../state/User';
import config from '../config';
import { useBackButton } from '../customHooks';

const Dashboard = ({ navigation }) => {
  const bannerStatus = useSelector(selectBannerStatus);
  const user = useSelector(selectUser);
  const deviceType = useSelector(selectDeviceType);

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

  const pressMeClicked = () => {
    Alert.alert('', 'Press me clicked');
  };

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && deviceType && <ExBanner deviceType={deviceType} />}
      <View style={styles.container}>
        <ExButton
          buttonStyle={styles.settingsButton}
          text={config.strings.PRESS_ME}
          onPress={pressMeClicked}
          textStyle={styles.settingsText}
        />
        <ExButton
          buttonStyle={styles.secondButton}
          text={config.strings.PRESS_ME}
          onPress={pressMeClicked}
          textStyle={styles.settingsText}
        />
        <ExButton
          buttonStyle={styles.coloredButton}
          text={config.strings.PRESS_ME}
          onPress={pressMeClicked}
          textStyle={styles.pressMeText}
        />
        <Slider
          onEndReached={() => {
            navigation.navigate(config.routes.SETTINGS);
          }}
          containerStyle={styles.slideButtonContainer}
          sliderElement={
            <View style={styles.slideImageBGView}>
              <SimpleLineIcons name="diamond" size={20} color={config.colors.white} />
            </View>
          }>
          <Text style={styles.slideMeText}>{config.strings.SLIDE_ME}</Text>
        </Slider>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { bottom: 0, position: 'absolute', width: '100%' },
  text: { fontSize: 22 },
  settingsButton: { marginBottom: 10 },
  secondButton: {
    marginBottom: 10,
    backgroundColor: config.colors.disableButton,
    borderRadius: 8,
  },
  coloredButton: { marginBottom: 10, backgroundColor: config.colors.appTheme, borderRadius: 8 },
  settingsText: { color: config.colors.appTheme },
  pressMeText: { color: config.colors.white },
  slideButtonContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: config.colors.gray,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImageBGView: {
    width: 50,
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.colors.appTheme,
  },
  slideMeText: {
    color: config.colors.appTheme,
    fontSize: 17,
  },
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
