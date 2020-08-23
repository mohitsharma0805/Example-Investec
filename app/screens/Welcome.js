import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import { ExButton, ExTextInput, ExBanner } from '../components';
import config from '../config';
import { validateUserDetails } from '../controls/Validator';
import { selectBannerStatus } from '../state/Settings';
import { selectUser, saveUser } from '../state/User';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const bannerStatus = useSelector(selectBannerStatus);
  const user = useSelector(selectUser);

  useEffect(() => {
    detailsSavedSuccessfully();
  }, [user]);

  const detailsSavedSuccessfully = () => {
    if (Object.values(name).length > 0) {
      navigation.dispatch(StackActions.replace(config.routes.DASHBOARD));
    }
  };

  const nextClicked = () => {
    if (validateUserDetails(name)) {
      dispatch(saveUser({ name }));
    }
  };

  return (
    <SafeAreaView style={styles.contentView}>
      {bannerStatus && <ExBanner />}
      <View style={styles.container}>
        <ExTextInput
          placeholder={config.strings.ENTER_YOUR_NAME}
          autoCapitalize={config.strings.NONE}
          onChangeText={(text) => setName(text)}
        />
        <ExButton buttonStyle={styles.button} text={config.strings.NEXT} onPress={nextClicked} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  contentView: { flex: 1 },
  container: { marginTop: 150 },
  button: { marginTop: 50, backgroundColor: config.colors.appTheme, borderRadius: 8 },
});
