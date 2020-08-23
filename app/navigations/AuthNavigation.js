import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Welcome, Dashboard, Settings } from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <Stack.Screen name={config.routes.WELCOME} component={Welcome} options={{ title: 'Welcome' }} />
    <Stack.Screen
      name={config.routes.DASHBOARD}
      component={Dashboard}
      options={{ title: 'Dashboard' }}
    />
    <Stack.Screen
      name={config.routes.SETTINGS}
      component={Settings}
      options={{ title: 'Settings' }}
    />
  </Stack.Navigator>
);

export default AuthNavigation;
