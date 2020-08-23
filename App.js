import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import config from './app/config';
import StorybookUIRoot from './storybook';
import { RootNavigation } from './app/navigations';

const App = () => {
  if (config.storybookEnabled) {
    return <StorybookUIRoot />;
  }
  return (
    <Provider store={config.store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
