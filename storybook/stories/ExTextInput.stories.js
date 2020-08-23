import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ExTextInput } from '../../app/components';

storiesOf('ExTextInput', module).add('TextInput', () => (
  <ExTextInput placeholder="Enter" onChangeText={action('text changed')} autoCapitalize="words" />
));
